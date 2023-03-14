import React from 'react';
import './BeforeFooter.css';
import Button from '../Button/Button';

export default function BeforeFooter() {
    return (
        <div className='beforeFooter'>
            <h2>Boost your links today</h2>
            <Button styles={{borderRadius: 50, width: 200, padding: '15px 0'}}>Get Started</Button>
        </div>
    )
}