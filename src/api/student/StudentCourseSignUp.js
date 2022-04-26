const server = require('../../config/const');

/**
 * Sends a Post request for student course sign up.
 * @param {Course name, Student token} info
 * @returns if student signed up data otherwise error message.
 */
async function StudentCourseSignUp( info )
{
    const res = await fetch(`${server}/student/course/register`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {StudentCourseSignUp};