
/**
 * Basic validation for email.
 * @param {User email} email 
 * @returns true if valid otherwise false.
 */
function IsEmailValid( email )
{
    if( email.length < 7 || email.length > 30)
        return false;
    if( email.includes('@') && (email.includes('.com') || email.includes('.il') || email.includes('.org') ))
        return true;
    return false;
}

module.exports = {IsEmailValid};