const server = require('../../config/const');

/**
 * Sends a post request for creating a course ( name and starting/ending date ).
 * @param {Course information} info 
 * @returns if created a course returns data otherwise error message.
 */
async function CreateCourse( info )
{
    const res = await fetch(`${server}/courses`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {CreateCourse};