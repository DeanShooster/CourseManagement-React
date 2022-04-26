import React from 'react';

import AttendanceATable from './attendance-table/AttendanceTable';

import './student-attendance-info.css';

const StudentAttendanceInfo = ( props ) =>{
    return (
        <section className='student-attendance-container'>
             <h3>Attendance Course Table</h3>
             <h4>Student ID: {props.studentID} </h4>
             <AttendanceATable course={props.course} studentID={props.studentID}/>
        </section>
    );
};

export default StudentAttendanceInfo;