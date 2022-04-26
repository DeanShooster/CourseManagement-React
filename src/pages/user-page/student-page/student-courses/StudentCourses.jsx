import React from 'react';
import { useNavigate } from 'react-router-dom';

import {SiCoursera} from 'react-icons/si';
import '../../user-page.css';

const StudentCourses = () => {

    const navigate = useNavigate();

    const navigationHandler = () =>{
        navigate('/user/courses');
    }

    return (
        <div className='request-container'>
            <SiCoursera className='svg' onClick={navigationHandler} />
            <p>My Courses</p>
        </div>
    );
};

export default StudentCourses;