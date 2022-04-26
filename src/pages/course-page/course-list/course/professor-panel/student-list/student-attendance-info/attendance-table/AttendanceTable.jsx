import React, { Fragment, useState } from 'react';

import { GetStudentAttendanceReason } from '../../../../../../../../api/professor/GetStudentAttendanceReason';

import './attendance-table.css';
import StudentAbsentReason from './student-absent-reason/StudentAbsentReason';

const AttendanceATable = ( props ) => {

    const schedule = props.course.schedule;
    const [ absentReason, setAbsentReason ] = useState(null);
    const [ mouseLocationX, setMouseLocationX] = useState(null);
    const [ mouseLocationY, setMouseLocationY] = useState(null);

    /**
     * Converts a date UTC string to DD/MM format.
     * @param {Date string} date 
     * @returns String DD/MM format of date.
     */
    const dateToDayMonth = ( date )=>{
        const month = date.slice(5,7); const day = date.slice(8,10);
        return day + '/' + month;
    };

    /**
     * Sends a GET request to the server in order to get the student absence reason.
     * @param {Absent Date} event 
     */
    async function onClickDateHandler(event)
    {
        const info = {ID: props.studentID, date: event.target.innerHTML, courseName: props.course.name};
        if(event.target.className === 'not-attended'){
            const result = await GetStudentAttendanceReason( info );
            if( result.reason ){
                setAbsentReason(result.reason);
                setMouseLocationX(event.pageX);
                setMouseLocationY(event.pageY);
            }
            else
                alert('Server Error');
        }
    }

    // Closes the reason.
    const onMouseLeaveHandler = () =>{
        setAbsentReason(null);
    }

    return (
        <Fragment>
            <div className='table'>
                {schedule.map( (lesson)=> {
                    let didAttend = '';
                    for(let i = 0; i < lesson.attendances.length; i++){
                        if( lesson.attendances[i].studentID === parseInt(props.studentID) ){
                            if( lesson.attendances[i].attendance === true )
                                didAttend = 'attended';
                            else if( lesson.attendances[i].reason !== 'Empty')
                                didAttend = 'not-attended';
                        }
                    }
                    return <div key={lesson.date} className={didAttend} onClick={onClickDateHandler}>{ dateToDayMonth(lesson.date) }</div> 
                    })}
                { absentReason && <StudentAbsentReason reason={absentReason} top={mouseLocationY} left={mouseLocationX} closeReason={onMouseLeaveHandler}/> }
            </div>
            
        </Fragment>
        
    );
};

export default AttendanceATable;