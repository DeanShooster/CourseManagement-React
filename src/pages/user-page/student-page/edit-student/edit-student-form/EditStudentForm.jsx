import React, { Fragment, useReducer, useState } from 'react';

import { FormReducer } from '../../../../../reducer/FormReducer';
import { ObjectifyFormInputs } from '../../../../../utils/ObjectifyFormInputs';
import { EditStudent } from '../../../../../api/student/EditStudent';
import PopupMsg from '../../../../../components/shared/popup-msg/PopupMsg';

import '../../../shared/FormModal.css';

const EditStudentForm = ( props ) =>{

    const [formState,dispatchForm] = useReducer(FormReducer,{
        values: { studentID: 'GHOST_VALUE', firstName: '', lastName: '', email:'', password: '',
                repeatedPassword: '', birthDate: 'GHOST_VALUE', address: '' },
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

    async function EditionHandler(event)
    {
        event.preventDefault();
        if( !formState.isFormValid ){
            return;
        }
        const objectifiedForm = ObjectifyFormInputs( event.target ); // Disfigures form to object.
        const result = await EditStudent(objectifiedForm);
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
            <div className='form-modal edit-user' onSubmit={EditionHandler}>
                <div className='close-modal' onClick={props.closeForm}>X</div>
                <h3>User Profile</h3>
                <form autoComplete='new-password'>
                    <label>First Name</label>
                    <input type='text' name='firstName' autoComplete='new-password' className={formState.isValid.firstName ? '' : 'error'}
                    onBlur={ (e)=>{ dispatchForm({type: 'FIRST_NAME', payload: e.target.value})}} />

                    <label>Last Name</label>
                    <input type='text' name='lastName' autoComplete='new-password' className={formState.isValid.lastName ? '' : 'error'}
                    onBlur={ (e)=>{ dispatchForm({type: 'LAST_NAME', payload: e.target.value})}}/>

                    <label>Email</label>
                    <input type='email' name='email' autoComplete='new-password' className={formState.isValid.email ? '' : 'error'}
                    onBlur={ (e)=>{ dispatchForm({type: 'EMAIL', payload: e.target.value})}} />

                    <label>Password</label>
                    <input type='password' name='password' autoComplete='new-password' className={formState.isValid.password ? '' : 'error'} 
                    onBlur={ (e)=>{ dispatchForm({type: 'PASSWORD', payload: e.target.value})}} />

                    <label>Repeat Password</label>
                    <input type='password' name='RepeatPassword' autoComplete='new-password' className={formState.isValid.repeatedPassword ? '' : 'error'} 
                    onBlur={ (e)=>{ dispatchForm({type: 'REPEAT_PASSWORD', payload: e.target.value})}} />

                    <label>Address</label>
                    <input type='text' name='address' className={formState.isValid.address ? '' : 'error'} 
                    onBlur={ (e)=>{ dispatchForm({type: 'ADDRESS', payload: e.target.value})}} />

                    { !validFields && <div className='error-msg'> {errorMsg} </div> } 

                    <button>Update User</button>
                </form>
            </div>
            {successReq && <PopupMsg Message='Successful edition.' closePopup={closePopup} /> }
        </Fragment>
    );
};

export default EditStudentForm;