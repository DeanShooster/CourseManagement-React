import React, { useEffect, useState } from 'react';

import { GetAllCourses } from '../../../api/professor/GetAllCourses';

import CourseListItem from './course-list-item/CourseListItem';
import Loader from '../../../components/shared/Loader/Loader';

import '../course-page.css';

const CourseList = () => {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetAllCourses();
            setCourses(data);
        }
        setTimeout(() => {
            fetchData();
        }, 500);
    }, []);

    return (
        <div className='course-list'>
            { courses ? courses.map((course, i) => <CourseListItem key={i} courseName={course.name}/>) : <Loader />}
        </div>
    );
};

export default CourseList;