import React, { useState } from 'react';

import CreateStudentForm from './create-student-form/CreateStudentForm';

import {FaUserPlus} from 'react-icons/fa';
import '../../user-page.css';

const CreateStudent = () => {

    const [addStudentForm,setAddStudentForm] = useState(false);

    const addStudentFormHandler = ()=>{
        setAddStudentForm(true);
    }

    const closeStudentFormHandler = () =>{
        setAddStudentForm(false);
    }

    return (
        <div className='request-container'>
            <FaUserPlus className='svg' onClick={addStudentFormHandler} />
            <p>Add Student</p>
            {addStudentForm && <CreateStudentForm closeForm={closeStudentFormHandler}/> }
        </div>
    );
};

export default CreateStudent;