import React, { useContext } from "react";
import { useNavigate } from "react-router";

import { UserLogout } from "../../api/shared/UserLogout";
import { UserContext } from "../../context/UserContext";

import './logout.css';

const Logout = ( ) => {

    const name = localStorage.getItem('name');
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    /**
     * Clears the local storage and logouts.
     */
    async function onLogoutHandler()
    {
        const result = await UserLogout( { token: localStorage.getItem('token') });
        if( result ){
            localStorage.clear();
            setUser(null);
            navigate('/');
        }
    }

    return (
        <div className="logout">
            <p>Hello {name},</p>
            <button onClick={onLogoutHandler}>Logout</button>
        </div>   
    );
};

export default Logout;