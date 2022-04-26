/**
 * Basic password validation.
 * @param {User password} password 
 * @returns true if valid otherwise false.
 */
 function IsPasswordValid( password )
 {
     if( password.length < 6 || password.length > 15 )
         return false;
     const passwords = [
         '123456',
         '000000',
         'abcdefg',
     ];
     for(let i = 0; i < passwords.length; i++ )
         if( password === passwords[i] )
             return false;
     return true;
 }

 module.exports = {IsPasswordValid};