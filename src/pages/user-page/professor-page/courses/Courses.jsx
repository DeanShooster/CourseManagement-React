import React from 'react';
import { useNavigate } from 'react-router-dom';

import {SiCoursera} from 'react-icons/si';
import '../../user-page.css';

const Courses = () => {

    const navigate = useNavigate();

    const navigationHandler = () =>{
        navigate('/user/courses');
    }

    return (
        <div className='request-container'>
            <SiCoursera className='svg' onClick={ navigationHandler }/>
            <p>Courses</p>
        </div>
    );
};

export default Courses;