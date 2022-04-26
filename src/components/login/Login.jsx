import React, { Fragment } from 'react';

import LoginForm from './login-form/LoginForm';

import './login.css';

const Login = ( {closeLoginModal} ) => {
    return (
        <Fragment>
            <div className='block'></div>  {/**Background Drop */}
            <div className='login-modal'>
                <span className='close-modal' onClick={closeLoginModal}>X</span>
                <p>Login</p>
                <LoginForm closeLogin={closeLoginModal}/>
            </div>
        </Fragment>
    );
};

export default Login;