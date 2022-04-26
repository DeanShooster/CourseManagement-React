import React, { useState } from 'react';

import CreateCourseForm from './create-course-form/CreateCourseForm';

import {BsFillFileEarmarkPlusFill} from 'react-icons/bs';
import '../../user-page.css';

const CreateCourse = () => {

    const [createCourseForm,setCreateCourseForm] = useState(false);

    const createCourseFormHandler = () =>{
        setCreateCourseForm(true);
    }

    const closeCourseForm = ()=>{
        setCreateCourseForm(false);
    }

    return (
        <div className='request-container'>
            <BsFillFileEarmarkPlusFill className='svg' onClick={createCourseFormHandler} />
            <p>Add Course</p>
            { createCourseForm && <CreateCourseForm closeForm={closeCourseForm} />}
        </div>
    );
};

export default CreateCourse;