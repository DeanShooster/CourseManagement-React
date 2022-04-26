const server = require('../../config/const');

/**
 * Sends a Get request for student courses information.
 * @param {Student token} token 
 * @returns student courses otherwise error message.
 */
async function GetStudentCourses( token )
{
    const res = await fetch(`${server}/student/courses`,{
        method: 'GET',
        headers:  { 'Content-Type': 'application/json', token }
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {GetStudentCourses};