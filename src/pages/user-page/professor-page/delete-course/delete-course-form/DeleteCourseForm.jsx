import React, { Fragment,useState } from 'react';

import '../../../shared/FormModal.css';
import { DeleteCourse } from '../../../../../api/professor/DeleteCourse';
import PopupMsg from '../../../../../components/shared/popup-msg/PopupMsg';

const {ObjectifyFormInputs} = require('../../../../../utils/ObjectifyFormInputs');

const DeleteCourseForm = ( props )=>{

    const [validName,setValidName] = useState(true);
    const [errorMsg,setErrorMsg] = useState('');
    const [successReq,setSuccessReq] = useState(false);  //  Successful request modal.

    /**
     * Sends a course deletion request to the server.
     * @param {Submit event} event 
     */
    async function CourseDeletionHandler(event)
    {
        event.preventDefault();
        const input = event.target[0].value;
        if( input.length <= 2 ){  //Empty form.
            setValidName(false);
            if( input.length === 0)
                setErrorMsg('Course name is empty.');
            else
                setErrorMsg('Course name is too short.');
            return;
        }
        const objectifiedForm = ObjectifyFormInputs( event.target ); // Disfigures form to object.
        const result = await DeleteCourse(objectifiedForm);
        if( result.name ){
            setSuccessReq(true);
            event.target.reset();
        }
        else{ // Server error ( Bad query or server error )
            setValidName(false);
            setErrorMsg(result);
            return;
        }
    }
    //Resets validation while the user interacting with the form.
    const validNameOnChangeHandler = ()=>{
        setValidName(true);
    };
    //Checks validation when the user blurs out of the form.
    const validNameOnBlurHandler = (event)=>{
        if(event.target.value.length > 2 )
            setValidName(true);
        else{
            setValidName(false);
            if(event.target.value.length === 0)
                setErrorMsg('Course name is empty.');
            else
                setErrorMsg('Course name is too short.');
        }
    };

    const closePopup = () =>{
        setSuccessReq(false);
    }

    return (
        <Fragment>
            <div className='block-modal'></div>
            <div className='form-modal delete-form' onSubmit={CourseDeletionHandler}>
                <div className='close-modal' onClick={props.closeForm}>X</div>
                <h3>Course Deletion</h3>
                <form>
                    <label>Name</label>
                    <input type='text' name='name' autoComplete='off' className={ !validName ? 'error' : ''} onChange={validNameOnChangeHandler} onBlur={validNameOnBlurHandler}/>
                    { !validName && <div className='error-msg'>{errorMsg}</div> }
                    <button>Delete Course</button>
                </form>
            </div>
            {successReq && <PopupMsg Message='Successful Deletion.' closePopup={closePopup} /> }
        </Fragment>
    );
};

export default DeleteCourseForm;