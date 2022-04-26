const server = require('../../config/const');

/**
 * Sends a Get request for student ID.
 * @param {User token} token
 * @returns student ID otherwise error message
 */
async function GetStudentID( token )
{
    const res = await fetch(`${server}/student`,{
        method: 'GET',
        headers:  { 'Content-Type': 'application/json', token },
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {GetStudentID};