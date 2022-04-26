import React, { Fragment, useReducer, useState } from 'react';

import {FormReducer} from '../../../../../reducer/FormReducer';
import { CreateStudent } from '../../../../../api/professor/CreateStudent';
import PopupMsg from '../../../../../components/shared/popup-msg/PopupMsg';

const {ObjectifyFormInputs} = require('../../../../../utils/ObjectifyFormInputs');

const CreateStudentForm = ( props ) => {

    const [formState,dispatchForm] = useReducer(FormReducer, {
        values: { studentID: '', firstName: '', lastName: '', email:'', password: '',
        repeatedPassword: '', birthDate: '', address: '' },
        isValid: { studentID: true, firstName: true, lastName: true, email: true, password: true, 
            repeatedPassword: true, birthDate: true, address: true
        },
        isFormValid: false
    });
    const [errorMsg,setErrorMsg] = useState('Invalid or Empty Input.');

    const validFields = formState.isValid.studentID && formState.isValid.firstName && formState.isValid.lastName && formState.isValid.email
                        && formState.isValid.password && formState.isValid.repeatedPassword && formState.isValid.birthDate 
                        && formState.isValid.address;
    const [successReq,setSuccessReq] = useState(false);  //  Successful request modal.

    /**
     * Sends a student creation request to the server.
     * @param {Submit} event 
     */
    async function StudentCreationHandler( event )
    {
        event.preventDefault();
        if( !formState.isFormValid )
            return; 
        const objectifiedForm = ObjectifyFormInputs( event.target ); // Disfigures form to object.
        const result = await CreateStudent(objectifiedForm);
        if( result.ID ){
            setSuccessReq(true);
            event.target.reset();
        }
        else{ // Server error ( Bad query or server error )
            setErrorMsg(result);
            return;
        }
    }

    const closePopup = () =>{
        setSuccessReq(false);
    }

    return (
        <Fragment>
            <div className='block-modal'></div>
            <div className='form-modal' onSubmit={StudentCreationHandler} >
                <div className='close-modal' onClick={props.closeForm}>X</div>
                <h3>Student Creation</h3>
                <form autoComplete='new-password'>
                    <label>Student ID</label>
                    <input name='ID' type='number' autoComplete='new-password' className={formState.isValid.studentID ? '' : 'error'} 
                    onBlur={ (e)=>{ dispatchForm({type: 'STUDENT_ID', payload: e.target.value})}} />

                    <label>First Name</label>
                    <input name='firstName' type='text' autoComplete='new-password' className={formState.isValid.firstName ? '' : 'error'}
                    onBlur={(e)=>{dispatchForm( {type: 'FIRST_NAME' , payload: e.target.value} )}}/>

                    <label>Last Name</label>
                    <input name='lastName' type='text' autoComplete='new-password' className={formState.isValid.lastName ? '' : 'error'}
                    onBlur={(e)=>{dispatchForm( {type: 'LAST_NAME' , payload: e.target.value} )}}/>

                    <label>Email</label>
                    <input name='email' type='email' autoComplete='new-password' className={formState.isValid.email ? '' : 'error'}
                    onBlur={(e)=>{dispatchForm( {type: 'EMAIL' , payload: e.target.value} )}}/>

                    <label>Password</label>
                    <input name='password' type='password' autoComplete='new-password' className={formState.isValid.password ? '' : 'error'}
                    onBlur={(e)=>{dispatchForm( {type: 'PASSWORD' , payload: e.target.value} )}}/>

                    <label>Repeat Password</label>
                    <input name='repeatedPassword' type='password' autoComplete='new-password' className={formState.isValid.repeatedPassword ? '' : 'error'}
                    onBlur={(e)=>{dispatchForm( {type: 'REPEAT_PASSWORD', payload: e.target.value} )}}/>

                    <label>Birth Date</label>    
                    <input name='birthDate' type='date' className={formState.isValid.birthDate ? '' : 'error'}
                    onBlur={(e)=>{dispatchForm( {type: 'BIRTH_DATE' , payload: e.target.value} )}}/>

                    <label>Address</label>
                    <input name='address' type='text' className={formState.isValid.address ? '' : 'error'}
                    onBlur={(e)=>{dispatchForm( {type: 'ADDRESS' , payload: e.target.value} )}}/>

                    { !validFields && <div className='error-msg'> {errorMsg} </div> }
                    
                    <button>Add Student</button>
                </form>
            </div>
            {successReq && <PopupMsg Message='Successfully Created.' closePopup={closePopup} /> }
        </Fragment>
    );
};

export default CreateStudentForm;