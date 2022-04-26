import React from 'react';

import './course-info.css';

const CourseInfo = ( props )=>{

    const students = props.course.students;
    const courseDuration = (new Date(props.course.duration.end) - new Date(props.course.duration.start)) /  (1000*60*60*24);

    return (
        <div className='course-info'>
            <p><u>Number of Students:</u> <span className='info'>{students.length}</span></p>
            <p><u>Course Duration:</u> <span className='info'>{ courseDuration} Days</span> </p>
        </div>
    );
};

export default CourseInfo;