import React, { useContext, useState } from 'react';

import { IsProfessor } from '../../../api/shared/IsProfessor';
import { Login } from '../../../api/shared/Login';
import { UserContext } from '../../../context/UserContext';

import './login-form.css';

const LoginForm = ( props )=>{

    const [isEmailValid,setIsEmailValid] = useState(true);
    const [emailErrorMessage,setEmailErrorMessage] = useState(false); // error message for email.
    const [isPasswordValid,setIsPasswordValid] = useState(true);
    const [passwordErrorMessage,setPasswordErrorMessage] = useState(false); // error message for password.

    const {setUser} = useContext(UserContext);

    /**
     * Form submit basic validation.
     * @param {onSubmit} event 
     */
    async function formSubmitHandler(event){
        event.preventDefault();
        const email = event.target.children[0].value;  let password = event.target.children[1].value;
        if( !password )
            password = event.target.children[2].value;
        if( isEmailValid && isPasswordValid && email.length > 0 && password.length > 0 ){
            const login = await Login( {email,password} ); // Server login request.
            if( !login ){ // failed login.
                setIsEmailValid(false); setEmailErrorMessage(true);
                setIsPasswordValid(false); setPasswordErrorMessage(true);
                return;
            }
            const isProfessor = await IsProfessor( email );
            setUser( isProfessor );
            props.closeLogin(); // Closes login modal after successful login.
        }
        if( !email || email.length === 0){ // Empty email counter.
            setIsEmailValid(false); setEmailErrorMessage(true);
        }
            
        if( !password || password.length === 0){ // Empty password counter.
            setIsPasswordValid(false); setPasswordErrorMessage(true);
        }
    };

    /**
     * onBlur validates the current input email ( basic validation ) and updates visually the input boxes according.
     * @param {onBlur} event 
     */
    const emailValidHandler = (event) => {
        const input = event.target.value;
        if( input.length > 4 && input.includes('@') && input[input.length-1] !== '@' && (input.includes('.com') || input.includes('.co.il') || input.includes('.org'))){
            setEmailErrorMessage(false);
            setIsEmailValid(true);
        }
        else{
            setIsEmailValid(false);
            setEmailErrorMessage(true);
        }
    };

    /**
     * onChange validates the current input email ( basic validation ) and updates visually the input boxes according.
     * @param {onChange} event 
     */
    const emailOnChangeHandler = (event) => {
        const input = event.target.value;
        if( input.length > 4 && input.includes('@') && input[input.length-1] !== '@' && (input.includes('.com') || input.includes('.co.il') || input.includes('.org'))){
            setEmailErrorMessage(false);
            setIsEmailValid(true);
        }
    }

    /**
     * onBlur validates the current input password ( basic length validation ) and updates visually the input boxes according.
     * @param {onBlur} event 
     */
    const passwordValidHandler = (event) => {
        const input = event.target.value;
        if( input.length >= 6 )
            setIsPasswordValid(true);
        else{
            setIsPasswordValid(false);
            setPasswordErrorMessage(true);
        }
    };

    /**
     * onChange validates the current input password ( basic length validation ) and updates visually the input boxes according.
     * @param {onChange} event 
     */
    const passwordOnChangeHandler = (event) =>{
        const input = event.target.value;
        if( input.length >= 6 ){
            setPasswordErrorMessage(false);
            setIsPasswordValid(true);
        }
    }

    return (
        <form className='login-form' onSubmit={formSubmitHandler}>
            <input placeholder='Email' autoComplete='off' onBlur={emailValidHandler} onChange={emailOnChangeHandler} className={ isEmailValid ? '' : 'error'}/>
            {emailErrorMessage && <span className='error-message'>Invalid Email.</span>}
            <input type='password' autoComplete='off' placeholder='Password' onBlur={passwordValidHandler} onChange={passwordOnChangeHandler} className={isPasswordValid ? '' : 'error'}/>
            {passwordErrorMessage && <span className='error-message'>Invalid Password.</span>}
            <button>Login</button>
        </form>
    );
};

export default LoginForm;