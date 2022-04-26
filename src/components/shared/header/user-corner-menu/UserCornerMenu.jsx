import React, { useContext, useState } from 'react';
import {FaUserGraduate} from 'react-icons/fa';
import { UserContext } from '../../../../context/UserContext';

import Login from '../../../login/Login';
import Logout from '../../../logout/Logout';

import './user-corner-menu.css';

const UserCornerMenu = () => {

    const [loginModal,setLoginModal] = useState(false);
    const {user} = useContext(UserContext); // Defines if login or logout button should be visible according to the local storage.

    /**
     * State of visibility of the `Login Modal` according to the button clicks.
     */
    const loginHandler = ()=>{
        setLoginModal(true);
    };
    const closeLoginHandler = () =>{
        setLoginModal(false);
    }

    return(
        <div className='user-menu'>
            <FaUserGraduate className='user-menu-logo'/>
            { user==null ? <button onClick={loginHandler}>Login</button> : <Logout />}
            {loginModal && <Login closeLoginModal={closeLoginHandler} />}
        </div>
    );
};

export default UserCornerMenu;