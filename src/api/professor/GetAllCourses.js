const server = require('../../config/const');

/**
 * Sends a GET request for all the existing courses in the system.
 * @returns if there are courses returns data otherwise error message.
 */
async function GetAllCourses()
{
    const res = await fetch(`${server}/courses`, {
        method: 'GET'
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {GetAllCourses};