const server = require('../../config/const');

/**
 * Sends a logout request to the server.
 * @param {User token} token 
 * @returns True if logged otherwise false.
 */
async function UserLogout( token )
{
    const res = await fetch(`${server}/logout`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(token)
    });
    const data = await res.json();
    if( data.Message )
        return false;
    return true;
}

module.exports = {UserLogout};