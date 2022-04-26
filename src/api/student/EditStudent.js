const server = require('../../config/const');

/**
 * Sends a Patch request for student information.
 * @param {Student Information} info 
 * @returns if patched student data otherwise error message.
 */
async function EditStudent( info )
{
    const res = await fetch(`${server}/student`,{
        method: 'PATCH',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {EditStudent};