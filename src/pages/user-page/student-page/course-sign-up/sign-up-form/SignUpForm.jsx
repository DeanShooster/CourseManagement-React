import React, { Fragment, useState } from 'react';

import { StudentCourseSignUp } from '../../../../../api/student/StudentCourseSignUp';
import PopupMsg from '../../../../../components/shared/popup-msg/PopupMsg';

import '../../../shared/FormModal.css';

const SignUpForm = ( props ) =>{

    const [formState ,setFormState ] = useState(false);
    const [courseName,setCourseName] = useState(true);
    const [error,setError] = useState(false);
    const [errorMsg, setErrorMsg ] = useState('');
    const [successReq,setSuccessReq] = useState(false);  //  Successful request modal.

    /**
     * Sends a student course sign up request to the server.
     * @param {Form Submit} event
     */
    async function onSignUpHandler( event )
    {
        event.preventDefault();
        if( !formState )
            return;
        const info = { courseName: event.target[0].value, token: localStorage.getItem('token')};
        const result = await StudentCourseSignUp( info );
        if( !result.name ){
            setErrorMsg(result);
            setError(true);  setFormState(false);
            return;
        }
        setSuccessReq(true);
        event.target.reset();
    }

    /**
     * UX for input on blur event.
     * @param {Blur Event} event 
     */
    const onBlurHandler = (event)=>{
        const input = event.target.value;
        if( input.length > 2 ){
            setCourseName(true);  setError(false);  setErrorMsg(''); setFormState(true);
            return;
        }
        if( input.length === 0 )
            setErrorMsg('Empty Input.');
        else
            setErrorMsg('Course name is too short.');
        setCourseName(false);
        setError(true);
        setFormState(false);
    };

    /**
     * UX for input on change event.
     * @param {Change Event} event 
     */
    const onChangeHandler = (event) =>{
        const input = event.target.value;
        if( input.length > 2 ){
            setCourseName(true);  setError(false);  setErrorMsg(''); setFormState(true);
        }
    };

    const closePopup = () =>{
        setSuccessReq(false);
    }

    return (
        <Fragment>
            <div className='block-modal'></div>
            <div className='form-modal edit-user' onSubmit={onSignUpHandler} >
                <div className='close-modal' onClick={props.closeForm}>X</div>
                <h3>Course Sign Up</h3>
                <form>
                    <label>Course Name</label>
                    <input type='text' onBlur={onBlurHandler} onChange={onChangeHandler} className={courseName ? '' : 'error'} />
                    {error && <div className='error-msg'>{errorMsg}</div>}
                    <button>Sign Up</button>
                </form>
            </div>
            {successReq && <PopupMsg Message='Successfully signed up.' closePopup={closePopup} /> }
        </Fragment>
    );
};

export default SignUpForm;