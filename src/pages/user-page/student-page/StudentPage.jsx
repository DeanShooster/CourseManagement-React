import React, { Fragment } from 'react';

import EditStudent from './edit-student/EditStudent';
import StudentCourses from './student-courses/StudentCourses';
import CourseSignUp from './course-sign-up/CourseSignUp';

import '../user-page.css';

const StudentPage = () => {
    return (
        <Fragment>
            <EditStudent />
            <StudentCourses />
            <CourseSignUp />
        </Fragment>
    );
};

export default StudentPage;