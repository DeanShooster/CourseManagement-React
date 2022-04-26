import React, { Fragment, useState } from 'react';

import '../../../shared/FormModal.css';
import { CreateCourse } from '../../../../../api/professor/CreateCourse';
import { CourseCreationDateValidation } from '../../../../../utils/CourseCreationDateValidation';
import PopupMsg from '../../../../../components/shared/popup-msg/PopupMsg';

const {ObjectifyFormInputs} = require('../../../../../utils/ObjectifyFormInputs');

const CreateCourseForm = ( props ) => {

    const [validName,setValidName] = useState(true);
    const [validStartingDate,setValidStartingDate] = useState(true); 
    const [validEndingDate,setValidEndingDate] = useState(true);
    const [errorMsg,setErrorMsg] = useState('');
    const [successReq,setSuccessReq] = useState(false);  //  Successful request modal.

    /**
     * Sends a course creation request to the server.
     * @param {Submit} event 
     */
    async function CourseCreationHandler(event)
    {
        event.preventDefault();
        const input = event.target;
        if( !isFormValid(input) )
            return;
        if( !CourseCreationDateValidation(event.target[1].value,event.target[2].value) ){
            setValidStartingDate(false); setValidEndingDate(false);
            setErrorMsg('Illegal date input.');
            return;
        }
        const objectifiedForm = ObjectifyFormInputs( event.target ); // Disfigures form to object.
        const result = await CreateCourse(objectifiedForm);
        if( result.name ){
            setSuccessReq(true);
            event.target.reset();
        }
        else{ // Server error ( Bad query or server error )
            setValidName(false); setValidStartingDate(false); setValidEndingDate(false);
            setErrorMsg(result);
            return;
        }
    }

    /**
     * Validation for user form input ( name,startingDate , endingDate).
     * @param {Form} form 
     */
    function isFormValid( form )
    {
        let flag = true;
        if( form[0].value.length <= 2){
            setValidName(false); flag = false;
        }     
        if( form[1].value.length === 0 ){
            setValidStartingDate(false); flag = false;
        }
        if( form[2].value.length === 0){
            setValidEndingDate(false); flag = false;
        }
        if( flag )
            return true;
        setErrorMsg('Invalid Credentials or Missing fields.');
        return false;
    }
    // Resets validation when the user interacts.
    const validNameOnChangeHandler = ()=>{
        setValidName(true);
    };
    // Checks validation for name when the user blurs out of the form.
    const validNameOnBlurHandler = (event)=>{
        if(event.target.value.length > 2)
            setValidName(true);
        else{
            setValidName(false);
            if(event.target.value.length === 0)
                setErrorMsg('Course name is empty.');
            else
                setErrorMsg('Course name is too short.');
        }
    };
    // Resets validation when the user inputs an actual date.
    const validStartingDateHandler = ()=>{
        setValidStartingDate(true);
    };
    // Resets validation when the user inputs an actual date.
    const validEndingDateHandler = ()=>{
        setValidEndingDate(true);
    };

    const closePopup = () =>{
        setSuccessReq(false);
    }

    return (
        <Fragment>
            <div className='block-modal'></div>
            <div className='form-modal create-course' onSubmit={CourseCreationHandler}>
                <div className='close-modal' onClick={props.closeForm}>X</div>
                <h3>Course Creation</h3>
                <form>
                    <label>Name</label>
                    <input type='text' name='name' autoComplete="off" className={ !validName ? 'error' : ''} onChange={validNameOnChangeHandler} onBlur={validNameOnBlurHandler}/>
                    <label>Starting Date</label>
                    <input type='date' name='startingDate' className={!validStartingDate ? 'error' : ''} onChange={validStartingDateHandler}/>
                    <label>Ending Date</label>
                    <input type='date' name='endingDate' className={!validEndingDate ? 'error' : ''} onChange={validEndingDateHandler}/>
                    { (!validName || !validStartingDate || !validEndingDate) && <div className='error-msg'>{errorMsg}</div> }
                    <button>Create Course</button>
                </form>
            </div>
            {successReq && <PopupMsg Message='Successful Creation.' closePopup={closePopup} /> }
        </Fragment>
        
    );
};

export default CreateCourseForm;