import React, { Fragment, useState } from 'react';

import { UpdateAttendance } from '../../../../../../api/student/UpdateAttendance';
import PopupMsg from '../../../../../../components/shared/popup-msg/PopupMsg';

const AttendanceForm = ( props ) =>{

    const [errorMsg,setErrorMsg] = useState('');
    const [textAreaBox,setTextAreaBox] = useState(true);
    const [successReq,setSuccessReq] = useState(false);  //  Successful request modal.

    /**
     * Sends a Patch request to the server for student attendance update.
     * @param {Submit} event 
     */
    async function onAttendanceSubmitHandler( event )
    {
        event.preventDefault();
        const attendanceSelector = event.target[0].value;
        const textArea = event.target[1].value;
        if( textArea.length === 0 && attendanceSelector === 'No'){
            setErrorMsg('You must enter a reason for unattended lessons.');
            return;
        }
        if( textArea.length > 0 && attendanceSelector === 'Yes'){
            setErrorMsg('If attended a lesson leave the absence reason empty.');
            return;
        }
        const result = await UpdateAttendance( {attendance: attendanceSelector, reason: textArea,
             date: props.DateID.attendanceDate, token: localStorage.getItem('token'), courseName: props.courseName } );
        if( !result.name ){
            setErrorMsg(result);
            return;
        }
        alert('Attendance Update!');  window.location.reload(false);  // CHANGE TO STATE!
        props.closeForm();
    }

    const onAttendanceSelectHandler = ()=>{
        setTextAreaBox(!textAreaBox);
    };

    const closePopup = () =>{
        setSuccessReq(false);
    }

    return (
        <Fragment>
            <p className='attendance-date'>Lesson {props.DateID.attendanceDate}</p>
            <div className='attendance' onSubmit={onAttendanceSubmitHandler}>
                <div className='close-attendance' onClick={props.closeForm}>X</div>
                <form  >
                    <div className='attendance-select'>
                        <label>Did you Attend?</label>
                        <select onChange={onAttendanceSelectHandler} >
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className='attendance-reason'>
                        <label>Absence Reason</label>
                        <textarea placeholder='Write a reason only if you did not attend.' disabled={textAreaBox}></textarea>
                    </div>
                    {errorMsg && <p className='error-msg'>{errorMsg}</p>}
                    <button>Submit</button>
                </form>
            </div>
            {successReq && <PopupMsg Message='Successful attendance update.' closePopup={closePopup} /> }
        </Fragment>
    );
};

export default AttendanceForm;