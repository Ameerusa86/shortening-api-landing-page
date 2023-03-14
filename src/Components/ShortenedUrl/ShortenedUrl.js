import React, { useState } from 'react';
import Button from "../Button/Button";
import './ShortenedUrl.css';

export default function ShortenedUrl(props) {

    const [ urlCopied, setUrlCopied ] = useState(false);

    const { originalUrl, shortenUrl } = props;

    const BtnStyles = {
        margin: '10px',
        borderRadius: 10,
    }

    const BtnStylesCopied = {
        backgroundColor: 'hsl(257, 27%, 26%)',
        margin: '10px',
        borderRadius: 10,
    }

    const copyUrl = async () => {
        console.log(shortenUrl)
        await navigator.clipboard.writeText(shortenUrl)
                        // .then(setUrlCopied(true))
        setUrlCopied(true)
    }

    return (
        <div className="individualUrls">
            <p className="originalUrl">{originalUrl}</p>
            <hr />
            <div className='shortened-right'>
                <p className="shortUrl">{shortenUrl}</p>
                {!urlCopied &&
                <Button styles={BtnStyles} onClick={copyUrl}>
                    Copy
                </Button>}
                {urlCopied &&
                <Button styles={BtnStylesCopied} onClick={copyUrl}>
                    Copied!
                </Button>}
            </div>
        </div>
    )
}