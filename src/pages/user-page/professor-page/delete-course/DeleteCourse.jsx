import React, { useState } from 'react';

import DeleteCourseForm from './delete-course-form/DeleteCourseForm';

import {BsFillFileEarmarkMinusFill} from 'react-icons/bs';
import '../../user-page.css';

const DeleteCourse = () => {

    const [deleteCourseForm,setDeleteCourseForm] = useState(false);

    const deleteCourseFormHandler =() =>{
        setDeleteCourseForm(true);
    }

    const closeDeleteCourseForm = () => {
        setDeleteCourseForm(false);
    }

    return (
        <div className='request-container'>
            <BsFillFileEarmarkMinusFill className='svg' onClick={deleteCourseFormHandler} />
            <p>Remove Course</p>
            {deleteCourseForm && <DeleteCourseForm closeForm={closeDeleteCourseForm}/> }
        </div>
    );
};

export default DeleteCourse;