const server = require('../../config/const');

/**
 * Sends a delete request for a course via course name.
 * @param {Course name} name 
 * @returns if deleted course returns data otherwise error message.
 */
async function DeleteCourse( name )
{
    const res = await fetch(`${server}/courses`,{
        method: 'DELETE',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(name)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {DeleteCourse};