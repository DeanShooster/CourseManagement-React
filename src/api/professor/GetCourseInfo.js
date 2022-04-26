
const server = require('../../config/const');

/**
 * Sends a GET request for all information about a course.
 * @returns if there are courses returns data otherwise error message.
 */
async function GetCourseInfo( course )
{
    const res = await fetch(`${server}/courses/${course}`, { method: 'GET' });
    const data = await res.json();
    return data;
}

module.exports = {GetCourseInfo};