import './styles.css';

import React from 'react';

const Card = ({ title, image, alt, link }) => {

    return (
        <div class="card">
            <div class="card-body">
                <div className='flip-card-front'>
                    <h5 class="card-title">{title}</h5>
                    <img src={image} alt={alt}/>
                </div>
                <div className='flip-card-back'>
                    <h5 class="card-title">{title}</h5>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button>View</button>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Card;