import React from 'react';
import './FeatureCard.css';

export default function FeatureCard(props) {
    const { src, title, text, id } = props;
return (
    <div className='feature-card' id={id}>
        <div className='feature-card-icon-container'>
            <img src={src} alt={title} className='feature-card-icon' />
        </div>
        <section className="feature-content">
            <h3>{title}</h3>
            <p>{text}</p>
        </section>
    </div>
)
}