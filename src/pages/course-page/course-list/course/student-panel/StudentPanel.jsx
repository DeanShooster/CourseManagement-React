import React, { Fragment, useState } from 'react';
import AttendanceForm from './attendace-form/AttendanceForm';

import StudentAttendanceTable from './student-attendance-table/StudentAttendanceTable';

import './student-panel.css';

const StudentPanel = ( props )=>{

    const [attendanceForm,setAttendanceForm] = useState(false);
    const [attendanceInfo,setAttendanceInfo] = useState(null);

    // Opens attendance form.
    const attendanceFormHandler = ( info ) =>{
        setAttendanceInfo( info );
        setAttendanceForm(true);
    };

    // Close attendance form.
    const closeAttendanceFormHandler = ()=>{
        setAttendanceForm(false);
    };

    return (
        <Fragment>
            <div className='student-panel'>
                <h3>Attendance Table</h3>
                <StudentAttendanceTable course={props.course} openAttendanceForm={attendanceFormHandler} />
                { attendanceForm && <AttendanceForm courseName={props.course.name} DateID={attendanceInfo} closeForm={closeAttendanceFormHandler} />}
            </div>
        </Fragment>
    );
};

export default StudentPanel;