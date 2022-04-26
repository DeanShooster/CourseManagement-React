const server = require('../../config/const');

/**
 * Sends a Post request for student attendance update.
 * @param {Attendance} info
 * @returns attendances otherwise error msg.
 */
async function UpdateAttendance( info )
{
    const res = await fetch(`${server}/student/attendance`,{
        method: 'PATCH',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {UpdateAttendance};