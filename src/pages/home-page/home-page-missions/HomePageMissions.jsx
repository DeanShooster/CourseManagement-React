import React, { Fragment } from 'react';

import './home-page-missions.css';

const HomePageMissions = () => {

    return(
        <Fragment>
            <h2 className='centered'>Our Missions</h2>
            <section className='missions-container'>
                <div>
                    <img alt='' src={require('../../../assets/knowledge.jpg')} />
                    <p>Excellence and flexibility</p>
                </div>
                <div>
                    <img alt='' src={require('../../../assets/Education.jpg')} />
                    <p>Pivot role in eduction</p>
                </div>
                <div>
                    <img alt='' src={require('../../../assets/students.jfif')} />
                    <p>Distance learning utils</p>
                </div>
                <div>
                    <img alt='' src={require('../../../assets/president.jfif')} />
                    <p>Academy President</p>
                </div>
            </section>
        </Fragment>
    );
};

export default HomePageMissions;