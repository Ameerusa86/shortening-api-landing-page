import React from 'react';
import './SocialIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcon(props) {
    const {href, src} = props;

    return (
        <a className='socialIcon'href={href} >
            <FontAwesomeIcon icon={src} size="2x" className='icons' />
        </a>
    )
}