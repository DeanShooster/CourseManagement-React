const server = require('../../config/const');

/**
 * User login request.
 * @param {Email/Password login information} credentials 
 * @returns True for successful login otherwise false.
 */
async function Login( credentials )
{
    const res = await fetch(`${server}/login`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    });
    const data = await res.json();
    if( data.token ){
        localStorage.setItem('token', data.token); localStorage.setItem('name',data.name);
        return true;
    }
    return false;
}

module.exports = {Login};