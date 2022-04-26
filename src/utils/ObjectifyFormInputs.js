/**
 * Takes a form elements which holds input only with name and value and builds an array of objects with key and values.
 * <input name='name' value='value' />  ---->  {name,value}
 * @param {Form element} form 
 * @returns Array of objects
 */
function ObjectifyFormInputs( form )
{
    const objectifiedForm = {};
    for(let i = 0; i < form.length - 1; i++){
        if( form[i].name === 'repeatedPassword') continue;
        objectifiedForm[form[i].name] = form[i].value;
    }
    return objectifiedForm;
}

module.exports =  {ObjectifyFormInputs};