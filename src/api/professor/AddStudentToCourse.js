const server = require('../../config/const');

/**
 * Sends a post request for adding a student to a selected course.
 * @param {Student and Course information} info 
 * @returns if added a student returns data otherwise error message.
 */
async function AddStudentToCourse( info )
{
    const res = await fetch(`${server}/courses/students/add`,{
        method: 'PATCH',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {AddStudentToCourse};