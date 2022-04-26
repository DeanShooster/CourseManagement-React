const server = require('../../config/const');

/**
 * Sends a post request for removing a student from a selected course.
 * @param {Student and Course information} info 
 * @returns if removed a student returns data otherwise error message.
 */
async function RemoveStudentFromCourse( info )
{
    const res = await fetch(`${server}/courses/students/remove`,{
        method: 'PATCH',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {RemoveStudentFromCourse};