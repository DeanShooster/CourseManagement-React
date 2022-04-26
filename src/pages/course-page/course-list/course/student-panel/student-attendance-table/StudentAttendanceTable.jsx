import React, { Fragment, useEffect, useState } from 'react';

import { GetStudentID } from '../../../../../../api/student/GetStudentID';

const StudentAttendanceTable = ( props )=>{

    const schedule = props.course.schedule;
    const [studentID,setStudentID] = useState(null);

    useEffect( () => {
        const fetchStudent = async () => {
            const data = await GetStudentID(localStorage.getItem('token'));
            setStudentID(data);
        }
        fetchStudent();
    }, []);


    /**
     * Converts a date UTC string to DD/MM format.
     * @param {Date string} date 
     * @returns String DD/MM format of date.
     */
     const dateToDayMonth = ( date )=>{
        const month = date.slice(5,7); const day = date.slice(8,10);
        return day + '/' + month;
    };

    const onClickAttendanceHandler = ( event )=>{
        props.openAttendanceForm( {studentID: studentID.ID, attendanceDate: event.target.innerHTML} );
    };

    const tempLoader = <div>Loading...</div>;

    return (
        <Fragment>
            { studentID ? <div className='table' onClick={onClickAttendanceHandler} >
                {schedule.map( (lesson)=> {
                    let didAttend = '';
                    for(let i = 0; i < lesson.attendances.length; i++){
                        if( lesson.attendances[i].studentID === studentID.ID ){
                            if( lesson.attendances[i].attendance === true )
                                didAttend = 'attended';
                            else if( lesson.attendances[i].reason !== 'Empty')
                                didAttend = 'not-attended';
                        }
                    }
                    return <div key={lesson.date} className={didAttend} >{ dateToDayMonth(lesson.date) }</div> 
                    })}
                </div> : tempLoader }
        </Fragment>
    );
};

export default StudentAttendanceTable;