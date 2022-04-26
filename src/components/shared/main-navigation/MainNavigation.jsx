import React from 'react';
import { NavLink } from 'react-router-dom';

import './main-navigation.css';

const MainNavigation = () =>{

    return(
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/'>Main Page</NavLink>
                </li>
                <li>
                    <NavLink to='/user'>User Page</NavLink>
                </li>
                <li>
                    <NavLink to='/courses'>Courses</NavLink>
                </li>
            </ul>
            <hr></hr>
        </nav>
    );
};

export default MainNavigation;