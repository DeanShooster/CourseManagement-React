import React from 'react';

import './student-management-course.css';

const StudentManagementCourse = ( props ) =>{
    return (
        <div className='add-remove-student-button'>
            <span className='add-remove-student' onClick={props.addStudent}>Students Management</span>
        </div>
    );
};

export default StudentManagementCourse;