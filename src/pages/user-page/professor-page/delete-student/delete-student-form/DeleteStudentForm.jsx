import React, { Fragment, useState } from 'react';

import '../../../shared/FormModal.css';
import { DeleteStudent } from '../../../../../api/professor/DeleteStudent';
import PopupMsg from '../../../../../components/shared/popup-msg/PopupMsg';

const {ObjectifyFormInputs} = require('../../../../../utils/ObjectifyFormInputs');


const DeleteStudentForm = ( props )=>{

    const [validID,setValidID] = useState(true);
    const [errorMsg,setErrorMsg] = useState('');
    const [successReq,setSuccessReq] = useState(false);  //  Successful request modal.

    /**
     * Disfigures the form input to object and sends a delete request to the server.
     * Handles basic validations ( empty or server error )
     * @param {Form Submit} event 
     */
    async function StudentDeletionHandler(event)
    {
        event.preventDefault();
        const input = event.target[0].value;
        if( input.length === 0 ){ //Empty form.
            setValidID(false);
            setErrorMsg('Empty ID.');
            return;
        }
        const objectifiedForm = ObjectifyFormInputs( event.target ); // Disfigures form to object.
        const result = await DeleteStudent(objectifiedForm);
        if( result.ID ){
            setSuccessReq(true);
            event.target.reset();
        }
        else{ // Server error ( Bad query or server error )
            setValidID(false);
            setErrorMsg(result);
            return;
        }
    }

    //Resets validation while the user interacting with the form.
    const validIDonChangeHandler = ()=>{
        setValidID(true);
    };

    //Checks validation when the user blurs out of the form.
    const validIDonBlurHandler = (event)=>{
        if(event.target.value.length > 0 )
            setValidID(true);
        else{
            setValidID(false);
            setErrorMsg('Empty ID.');
        }
    };

    const closePopup = () =>{
        setSuccessReq(false);
    }

    return (
        <Fragment>
            <div className='block-modal'></div>
            <div className='form-modal delete-form' onSubmit={StudentDeletionHandler}>
                <div className='close-modal' onClick={props.closeForm}>X</div>
                <h3>Student Deletion</h3>
                <form>
                    <label>ID</label>
                    <input type='number' name='ID' className={ !validID ? 'error' : ''} onChange={validIDonChangeHandler} onBlur={validIDonBlurHandler} />
                    { !validID && <div className='error-msg'>{errorMsg}</div> }
                    <button>Delete Student</button>
                </form>
            </div>
            {successReq && <PopupMsg Message='Successfully Deleted.' closePopup={closePopup} /> }
        </Fragment>
    );
};

export default DeleteStudentForm;