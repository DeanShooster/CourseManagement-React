const server = require('../../config/const');

/**
 * Sends a Patch request for professor information.
 * @param {Professor Information} info 
 * @returns if patched professor data otherwise error message.
 */
async function EditProfessor( info )
{
    const res = await fetch(`${server}/professor`,{
        method: 'PATCH',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    });
    const data = await res.json();
    if( data.Message )
        return data.Message;
    return data;
}

module.exports = {EditProfessor};