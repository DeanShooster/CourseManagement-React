const server = require('../../config/const');

/**
 * Sends a post request for a student creation via student information object.
 * @param {Student Information} student 
 * @returns if created student returns data otherwise error message.
 */
async function CreateStudent( student )
{
    const res = await fetch(`${server}/students`, {
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {CreateStudent};