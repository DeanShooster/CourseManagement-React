import React, { useState } from 'react';

import SignUpForm from './sign-up-form/SignUpForm';

import {FaFileSignature} from 'react-icons/fa';
import '../../user-page.css';

const CourseSignUp = () => {

    const [signUpForm, setSignUpForm] = useState(false);

    const signUpFormHandler = ()=>{
        setSignUpForm(true);
    }

    const closeSignUpForm = () =>{
        setSignUpForm(false);
    }

    return (
        <div className='request-container'>
            <FaFileSignature className='svg' onClick={signUpFormHandler} />
            <p>Course Sign Up</p>
            {signUpForm && <SignUpForm closeForm={closeSignUpForm} /> }
        </div>
    );
};

export default CourseSignUp;