import React, { useState } from 'react';

import EditStudentForm from './edit-student-form/EditStudentForm';

import {FaUserCog} from 'react-icons/fa';
import '../../user-page.css';

const EditStudent = () => {

    const [editStudentForm,setEditStudent] = useState(false);

    const editStudentFormHandler = ()=>{
        setEditStudent( true );
    }

    const closeEditStudentForm = ()=>{
        setEditStudent( false );        
    }

    return (
        <div className='request-container'>
            <FaUserCog className='svg' onClick={editStudentFormHandler}/>
            <p>Edit User</p>
            { editStudentForm && <EditStudentForm closeForm={closeEditStudentForm} /> }
        </div>
    );
};

export default EditStudent;