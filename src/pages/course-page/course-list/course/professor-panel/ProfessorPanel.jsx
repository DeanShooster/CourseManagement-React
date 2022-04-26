import React, { Fragment } from 'react';

import StudentManagementForm from './course-info/student-management-course/student-management-form/StudentManagementForm';
import StudentManagementCourse from './course-info/student-management-course/StudentManagementCourse';
import CourseInfo from './course-info/CourseInfo';
import StudentList from './student-list/StudentList';

const ProfessorPanel = ( props ) =>{

    return (
        <Fragment>
            <CourseInfo course={props.course} />
            { props.addStudentForm ? <StudentManagementForm closeForm={props.closeForm} studentUpdate={props.studentUpdate} courseName={props.courseName}/> 
                                : <StudentManagementCourse addStudent={props.addStudent} /> }
            { props.course.students.length > 0 ? 
                <Fragment>
                    <h3 className='students-container-title'>Student List</h3>
                    <StudentList course={props.course} />
                </Fragment>
             : <p>No Students registered to the course.</p> }
        </Fragment>
    );
};

export default ProfessorPanel;