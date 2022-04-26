import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs';

import './contact-details.css';

const ContactDetails = () =>{

    const title = 'uStudy Academy, University of Israel';
    const address = '3 Steel Road P.O. Box 101, TLV 43109';
    const phoneContact = '03-77811111 or *0000';

    return (
        <div className='contact-details'>
            <h3>{title}</h3>
            <p>{address}</p>
            <p> <BsFillTelephoneFill /> {phoneContact}</p>
        </div>
    );
};

export default ContactDetails;