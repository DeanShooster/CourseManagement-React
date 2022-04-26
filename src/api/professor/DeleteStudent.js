const server = require('../../config/const');
/**
 * Sends a delete request for a student via ID.
 * @param {Student ID number} ID 
 * @returns if deleted student data otherwise error message.
 */
async function DeleteStudent( ID )
{
    const res = await fetch(`${server}/students`,{
        method: 'DELETE',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(ID)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {DeleteStudent};