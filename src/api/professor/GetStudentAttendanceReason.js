const server = require('../../config/const');

/**
 * Sends a Get request for a student attendance in course x in day y.
 * @param {Student&Date information} info 
 * @returns data otherwise error msg.
 */
async function GetStudentAttendanceReason( info )
{
    const res = await fetch(`${server}/student/course/attendance/?id=${info.ID}&date=${info.date}&courseName=${info.courseName}`,{
        method: 'GET',
        headers:  { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {GetStudentAttendanceReason};