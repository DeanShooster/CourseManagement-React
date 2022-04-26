import React from 'react';

import {SiCoursera} from 'react-icons/si';
import { useNavigate } from 'react-router';
import './course-list-item.css';

const CourseListItem = ( props ) => {

    const navigate = useNavigate();

    const navigateHandler = ()=>{
        navigate(`/user/courses/${props.courseName}`);
    }

    return(
        <div className='course-list-item'>
            <SiCoursera className='icon' onClick={navigateHandler} />
            <p>{props.courseName}</p>
        </div>
    );
};

export default CourseListItem;