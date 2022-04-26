const server = require('../../config/const');

async function IsProfessor( email )
{
    const res = await fetch(`${server}/professor/validation`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify( {email} )
    });
    const data = await res.json();
    if( data.Message )
        return null;
    return data;
}

module.exports = {IsProfessor};