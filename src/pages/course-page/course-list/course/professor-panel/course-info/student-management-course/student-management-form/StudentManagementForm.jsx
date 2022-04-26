import React, { Fragment, useState } from 'react';

import { AddStudentToCourse } from '../../../../../../../../api/professor/AddStudentToCourse';
import {RemoveStudentFromCourse} from '../../../../../../../../api/professor/RemoveStudentFromCourse';
import PopupMsg from '../../../../../../../../components/shared/popup-msg/PopupMsg';

import './student-management-form.css';

const StudentManagementForm = ( props ) =>{

    const [addStudentError,setAddStudentError] = useState(false);
    const [removeStudentError,setRemoveStudentError] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    const [successReq,setSuccessReq] = useState(false);  //  Successful request modal.

    /**
     * Sends an add student to course request to the server.
     * @param {Add Student Submit} event 
     */
    async function addStudentFormHandler(event)
    {
        event.preventDefault();
        const info = { course: props.courseName, studentID: event.target[0].value};
        if( info.studentID.length === 0 ){
            setAddStudentError(true);
            setErrorMsg('ID is too short.');
            return;
        }
        const result = await AddStudentToCourse( info );
        if( result.name ){
            setSuccessReq(true);
            props.studentUpdate();
            event.target.reset();
        }
        else{ // Server error ( Bad query or server error )
            setAddStudentError(true);
            setErrorMsg(result);
            return;
        }
    }

    /**
     * Sends a remove student to course request to the server.
     * @param {Remove Student Submit} event 
     */
    async function removeStudentFromHandler(event)
    {
        event.preventDefault();
        const info = { course: props.courseName, studentID: event.target[0].value};
        if( info.studentID.length === 0 ){
            setRemoveStudentError(true);
            setErrorMsg('ID is too short.');
            return;
        }
        const result = await RemoveStudentFromCourse( info );
        if( result.name ){
            setSuccessReq(true);
            props.studentUpdate();
            event.target.reset();
        }
        else{ // Server error ( Bad query or server error )
            setRemoveStudentError(true);
            setErrorMsg(result);
            return;
        }
    }

    const closePopup = () =>{
        setSuccessReq(false);
    }

    return (
        <Fragment>
            <form className='add-remove-student-form' onSubmit={addStudentFormHandler} >
                <input type='number' placeholder='STUDENT ID'/>
                <button className='add-remove-student-form-button'>+</button>
            </form>
            <form className='add-remove-student-form' onSubmit={removeStudentFromHandler}>
                <input type='number' placeholder='STUDENT ID' />
                <button className='add-remove-student-form-button'>-</button>
            </form>
            { ( addStudentError || removeStudentError ) && <p className='error-msg'>{errorMsg}</p>}
            <button onClick={props.closeForm} className='add-remove-student-form-button previous-button'>BACK</button>
            {successReq && <PopupMsg Message='Successful Action.' closePopup={closePopup} /> }
        </Fragment>
    );
};

export default StudentManagementForm;