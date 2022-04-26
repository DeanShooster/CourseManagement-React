import React, { useContext, useEffect } from 'react';
import {FaGraduationCap} from 'react-icons/fa';

import { IsUserLoggedIn } from '../../../api/shared/IsUserLoggedIn';
import UserCornerMenu from './user-corner-menu/UserCornerMenu';
import { UserContext } from '../../../context/UserContext';

import './header.css';

const Header = () => {

    const webTitle = 'uStudy';
    const systemTitle = 'Course Management';
    
    const {setUser} = useContext(UserContext);

    // Logging in on site load.
    useEffect(() => {
        async function fetchIsLoggedIn()
        {
            const result = await IsUserLoggedIn( {token:localStorage.getItem('token')} );
            if( result )
                setUser(result.isProfessor);
        }
        fetchIsLoggedIn();
    }, [setUser] );

    return (
        <header className='header'>
            <div className='header-titles'>
                <p className='site-title'>{webTitle}</p>
                <p className='system-title'>
                    <FaGraduationCap className='graduation-hat'/> {systemTitle}
                </p>
            </div>
            <UserCornerMenu />
        </header>
    );
};

export default Header;