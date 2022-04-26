const server = require('../../config/const');

/**
 * Checks if user is already logged in.
 * @param {User token} token 
 * @returns True if logged otherwise false.
 */
async function IsUserLoggedIn( token )
{
    const res = await fetch(`${server}/validation`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(token)
    });
    const data = await res.json();
    if( data.Message )
        return false;
    localStorage.setItem('name',data.name);
    return data;
}

module.exports = {IsUserLoggedIn};