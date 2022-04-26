import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { GetCourseInfo } from '../../../../api/professor/GetCourseInfo';

import CourseDate from './course-date/CourseDate';
import ProfessorPanel from './professor-panel/ProfessorPanel';
import StudentPanel from './student-panel/StudentPanel';

import './course.css';
import { UserContext } from '../../../../context/UserContext';
import Loader from '../../../../components/shared/Loader/Loader';

const Course = () => {

    const {name} = useParams();
    const [course, setCourses] = useState(null);
    const [addStudentForm,setAddStudentForm] = useState(false);
    const [updateStudents,setUpdateStudents] = useState(false);

    const {user} = useContext(UserContext);  // Professor / Student context.

    useEffect( () => {
        const fetchCourse = async () => {
            const data = await GetCourseInfo(name);
            setCourses(data);
        }
        setTimeout(() => {
            fetchCourse();
        }, 500);
    }, [name,updateStudents]);

    // Opens 'Add Student' form.
    const addStudentToCourseHandler =() =>{
        setAddStudentForm(true);
    }

    // Closes 'Add Student' form.
    const closeAddStudentForm = ()=> {
        setAddStudentForm(false);
    }

    // Change state dependency for useEffect ~ update course. 
    const updateStudentsHandler = () =>{
        setUpdateStudents(!updateStudents);
    }

    return (
        <Fragment>
            {course ? <section className='course-container'>
                <div className='course-title'>
                    <h3>{course.name} Course</h3>
                    <CourseDate date={course.duration}/>
                </div>
                { user ? <ProfessorPanel course={course} addStudentForm={addStudentForm} closeForm={closeAddStudentForm} 
                    studentUpdate={updateStudentsHandler} courseName={name} addStudent={addStudentToCourseHandler}/> :
                    <StudentPanel course={course}/> }
            </section> : <Loader /> }
        </Fragment>
    );
};

export default Course;