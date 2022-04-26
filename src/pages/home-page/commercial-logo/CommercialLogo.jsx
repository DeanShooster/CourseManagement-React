import React from 'react';

import CommercialMajor from './commercial-major/CommercialMajor';

import './commercial-logo.css';

const CommercialLogo = () =>{
    return (
        <div className='commercial-logo'>
            <img alt='' src={require('../../../assets/commercialLogo.jpg')} />
            <div className='commercial-logo-titles'>
                <p className='title-logo'>Leading in distance learning technologies</p>
                <p className='title-sub-logo'>What interests you, when it is convenient for you, in a method that is best suited for you</p>
            </div>
            <span> <CommercialMajor /> </span>
        </div>
    );
};

export default CommercialLogo;