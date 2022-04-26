import React, { Fragment, useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import StudentCourseList from './student-course-list/StudentCourseList';
import CourseList from './course-list/CourseList';

import './course-page.css';

const CoursePage = () =>{

    const {user} = useContext(UserContext);
    const offlineUserPanel = <p className='offline-msg'>You are currently offline, Please log in. </p>

    return (
        <Fragment>
            <section className='courses-container'>
                <h3>Courses List</h3>
                { user && <CourseList /> }
                { (user!=null && !user) && <StudentCourseList /> }
                { user === null && offlineUserPanel }
            </section>
        </Fragment>  
    );
};

export default CoursePage;