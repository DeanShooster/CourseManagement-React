import React, { Fragment } from 'react';

import EditProfessor from './edit-professor/EditProfessor';
import Courses from './courses/Courses';
import CreateStudent from './create-student/CreateStudent';
import DeleteStudent from './delete-student/DeleteStudent';
import CreateCourse from './create-course/CreateCourse';
import DeleteCourse from './delete-course/DeleteCourse';

import '../user-page.css';

const ProfessorPage = () =>{
    return (
        <Fragment>
            <EditProfessor />
            <Courses />
            <CreateStudent />
            <DeleteStudent />
            <CreateCourse />
            <DeleteCourse />
        </Fragment>
    );
};

export default ProfessorPage;