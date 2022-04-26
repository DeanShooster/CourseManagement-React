import React, { useEffect, useState } from 'react';

import { GetStudentCourses } from '../../../api/student/GetStudentCourses';
import CourseListItem from '../course-list/course-list-item/CourseListItem';
import Loader from '../../../components/shared/Loader/Loader';

import '../course-list/course-list-item/course-list-item.css';

const StudentCourseList = () => {

    const [studentCourses, setStudentCourses] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetStudentCourses( localStorage.getItem('token') );
            setStudentCourses(data);
        }
        fetchData();
    }, [] );

    return (
        <div className='course-list'>
            { studentCourses ? studentCourses.map( (course,i) => <CourseListItem key={i} courseName={course.course.name} /> ) : <Loader /> }
        </div>
    );
};

export default StudentCourseList;