import React, { Fragment, useState } from 'react';

import StudentAttendanceInfo from './student-attendance-info/StudentAttendanceInfo';

import './student-list.css';

const StudentList = ( props ) => {

    const students = props.course.students;
    const [studentAttendanceInfo, setStudentAttendanceInfo] = useState(false);
    const [studentID , setStudentID ] = useState(0);

    // Shows the chosen student the attendance and throws the user to the bottom of the table.
    const studentAttendanceInfoHandler = (event) =>{
        if(event.target.tagName === 'LI') 
            return;
        const studentID = event.target.parentElement.children[0].innerHTML;
        setStudentAttendanceInfo(true);
        setStudentID(studentID);
        // attendanceTable.current.scrollIntoView(); 
    }
    
    return (
        <Fragment>
            <div> [ [ [ SEARCH BAR ] ] ] </div> {/** NEED TO BE CREATED! */}
            <ul className='student-list' onClick={studentAttendanceInfoHandler}>
                <div className='student-info student-table-title'>
                    <div>ID</div>
                    <div>Name</div>
                    <div>Last Name</div>
                    <div>Email</div>
                </div>
                { students.map( (student)=> { return <li key={student.student.ID} className='student-info student-info-border'>
                        <div>{student.student.ID}</div>
                        <div>{student.student.firstName}</div>
                        <div>{student.student.lastName}</div>
                        <div>{student.student.email}</div>
                    </li>} ) }
            </ul>
            { studentAttendanceInfo && <StudentAttendanceInfo course={props.course} studentID={studentID} /> }
        </Fragment>
        
    );
};

export default StudentList;