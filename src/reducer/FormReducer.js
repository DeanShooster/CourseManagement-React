import _ from 'lodash';
import {IsPasswordValid} from '../utils/IsPasswordValid';
import { IsEmailValid } from '../utils/IsEmailValid';

/**
 * Form useReducer dispatch with basic validation of user inputs.
 * @param {Current Form State} state 
 * @param {Action type} action 
 * @returns new form state
 */
export function FormReducer(state,action)
{
    let formValid = IsFormValid(state),isValid, values;
    if( formValid )
        return { ..._.cloneDeep(state), isFormValid: true };
        
    switch(action.type){
        case 'STUDENT_ID':
            let studentID =false;
            if( action.payload.length > 0 ) studentID = true;
            values = { ...state.values, studentID: action.payload };
            isValid = { ...state.isValid,studentID };
            return { ...state, isValid, values };
        case 'FIRST_NAME':
            let firstName = false;
            if( action.payload.length > 2 )
                firstName = true;
            values = { ...state.values, firstName: action.payload };
            isValid = { ...state.isValid,firstName };
            return { ...state, isValid,values };
        case 'LAST_NAME':
            let lastName = false;
            if( action.payload.length > 2 )
                lastName = true;
            values = { ...state.values, lastName: action.payload };
            isValid = { ...state.isValid,lastName };
            return { ...state, isValid,values };
        case 'EMAIL':
            let email = IsEmailValid( action.payload );
            values = { ...state.values, email: action.payload };
            isValid = { ...state.isValid,email };
            return { ...state, isValid,values };
        case 'PASSWORD':
            let password = IsPasswordValid( action.payload );
            values = { ...state.values, password: action.payload };
            isValid = { ...state.isValid,password };
            return { ...state, isValid,values };
        case 'REPEAT_PASSWORD':
            let repeatedPassword = IsPasswordValid( action.payload );
            values = { ...state.values, repeatedPassword: action.payload };
            isValid = { ...state.isValid,repeatedPassword };
            return { ...state, isValid,values };
        case 'BIRTH_DATE':
            let birthDate = false;
            if(action.payload.length > 0 )
                birthDate = true;
            values = { ...state.values, birthDate: action.payload };
            isValid = { ...state.isValid,birthDate };
            return { ...state, isValid,values };
        case 'ADDRESS':
            let address = false;
            if(action.payload.length > 3 )
                address = true;
            values = { ...state.values, address: action.payload };
            isValid = { ...state.isValid,address };
            return { ...state, isValid,values };    
        default:
            return;
    }
}

function IsFormValid( state )
{
        return state.values.studentID.length > 0 && state.values.firstName.length > 0 && state.values.lastName.length > 0 &&
        state.values.email.length > 0 && state.values.password.length > 0 && state.values.repeatedPassword.length > 0 &&
        state.values.birthDate.length > 0 && state.values.address.length > 0 && state.isValid.studentID && state.isValid.firstName &&
        state.isValid.lastName && state.isValid.email && state.isValid.password && state.isValid.repeatedPassword && 
        state.isValid.birthDate && state.isValid.address;
}