import React, { useState } from "react";
import './ShortenUrl.css';

import ShortenedUrl from "../ShortenedUrl/ShortenedUrl";
import Button from "../Button/Button";

 const ShortenUrl = () => {
     const [ url, setUrl ] = useState('');
     const [ warning, setWarning ] = useState(false);
     const [ shortenURLs, setShortenURLs ] = useState([]);

     const shortLink = async () => {
        const endpoint = 'https://api.shrtco.de/v2/'
        const query = 'shorten?url='

        if (!url) {
            console.log('warning: empty string')
            setWarning(true)
            return;
        }

        const result = await fetch(
        `${endpoint}${query}${url}`)
            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json()
                } throw new Error ('request failed!')
            } 
            )
            .then(jsonResponse => {
                console.log(jsonResponse)
                const shortenUrl = jsonResponse.result['full_short_link']
                return shortenUrl
            })

        setShortenURLs(prev => [...prev, {original: url, shorten: result }])
        setUrl('')
     }

     const setInput = e => {
         e.preventDefault()
         setUrl(e.target.value)
         setWarning(false)
     }

    return (
    <div className='shortenUrl'>
        <div className='shortenUrlForm'>
            <div className="shortenUrlForm-left">
                <input type="text" placeholder="Shorten a link here..." onChange={setInput} value={url}
                       className={warning ? 'input-warning shortenInput' : 'shortenInput'} />
            </div>
            {warning &&
                    <p className="warningMsg">Please add a link</p>
                    }
            <Button onClick={shortLink}>
                Shorten It!
            </Button>
            
        </div>
        <div className="shortenedUrls">
            <div className='urlResults'>
                {
                    shortenURLs.length > 0 &&
                        shortenURLs.map((element, index)=>
                        <ShortenedUrl originalUrl={element.original} shortenUrl={element.shorten} key={index} />
                        )
                }
            </div>
        </div>
    </div>
    )
}

export default ShortenUrl;