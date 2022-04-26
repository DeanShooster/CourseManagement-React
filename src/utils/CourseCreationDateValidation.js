
/**
 * Checks if given two dates the dates are in order and if end comes after today.
 * @param {Starting Course Date} start 
 * @param {Ending Course Date} end 
 * @returns true/false
 */
function CourseCreationDateValidation(start , end )
{
    const startDate = new Date(start); const endDate = new Date(end);
    if( endDate - startDate <= 0 || new Date() - endDate >= 0 )
        return false;
    return true;
}

module.exports = {CourseCreationDateValidation};