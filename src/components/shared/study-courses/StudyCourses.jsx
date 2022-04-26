import React, { Fragment, useEffect, useState } from 'react';
import { GetAllCourses } from '../../../api/professor/GetAllCourses';
import Loader from '../Loader/Loader';

import {SiCoursera} from 'react-icons/si';
import './study-courses.css';

const StudyCourses = () =>{

    const [courses,setCourses] = useState(null);

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
        <Fragment>
            <h2 className='study-courses-title'>uStudy Courses List</h2>
            <div className='study-courses'>
                { courses ? courses.map((course, i) => <div key={i}> 
                    <SiCoursera className='svg'/>
                    { course.name } 
                    </div>) : <Loader />}
            </div>
            <h3 className='study-course-motto'>Login and sign up for a course! Education is everything.</h3>
        </Fragment>
    );
};

export default StudyCourses;