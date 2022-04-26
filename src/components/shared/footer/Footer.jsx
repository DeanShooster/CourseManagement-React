import React from 'react';

import ContactDetails from './contact/ContactDetails';
import Commercial from './commercial/Commercial'

import './footer.css';

const Footer = () => {

    const commercials = [
        { title: 'Organizational Structure' , info: ['Academic Departments in Hebrew and English']},
        { title: 'Admissions and Registration', info: ['Open Admission Policy and Registration','Campuses and Study Centers']},
        { title: 'Projects and Programs', info: ['Access Optimization','Higher Education in High School','Bringing Change to the Periphery']},
        { title: 'General Information', info: ['Inter-University Computation Center','General Basic Regulations','Highest level of Education']}
    ];

    return (
        <footer>
            <hr></hr>
            <hr></hr>
            <ContactDetails />
            <hr></hr>
            <hr></hr>
            <div className='footer-commercials'>
                { commercials.map( (commercial,i) =>{
                    return <Commercial key={i} title={commercial.title} info={commercial.info} />
                })}
            </div>   
        </footer>
    );
};

export default Footer;