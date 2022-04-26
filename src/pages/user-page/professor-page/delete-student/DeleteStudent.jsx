import React, { useState } from 'react';

import DeleteStudentForm from './delete-student-form/DeleteStudentForm';

import {FaUserMinus} from 'react-icons/fa';
import '../../user-page.css';

const DeleteStudent = () => {

    const [deleteStudentForm,setDeleteStudentForm] = useState(false);

    // Opens Form.
    const deleteStudentFormHandler = ()=>{
        setDeleteStudentForm(true);
    }

    // Closes Form.
    const closeDeleteStudentForm = ()=>{
        setDeleteStudentForm(false);
    }

    return (
        <div className='request-container'>
            <FaUserMinus className='svg' onClick={deleteStudentFormHandler} />
            <p>Remove Student</p>
            { deleteStudentForm && <DeleteStudentForm closeForm={closeDeleteStudentForm}/>}
        </div>
    );
};

export default DeleteStudent;