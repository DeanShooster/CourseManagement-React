import React from 'react';

import HomePageMissions from './home-page-missions/HomePageMissions';
import CommercialLogo from './commercial-logo/CommercialLogo';

import './home-page.css';

const HomePage = ()=>{

    const academyName = 'uStudy Academy';
    const academyLogo = 'Excellence in Research and Teaching';

    return (
        <section>
            <div className='campus-image'>
                <h1>{academyName}</h1>  
                <p>{academyLogo}</p>
            </div>
            <HomePageMissions />
            <CommercialLogo />
        </section>
    );
};

export default HomePage;