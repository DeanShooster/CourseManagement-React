import React, { useState } from 'react';

import EditProfessorForm from './edit-professor-form/EditProfessorForm';

import {FaUserCog} from 'react-icons/fa';
import '../../user-page.css';

const EditProfessor = () => {

    const [editProfessorForm,setEditProfessorForm] = useState(false);

    const editProfessorFormHandler = ()=>{
        setEditProfessorForm(true);
    }

    const closeEditProfessorForm = ()=>{
        setEditProfessorForm(false);
    }

    return (
        <div className='request-container'>
            <FaUserCog className='svg' onClick={editProfessorFormHandler}/>
            <p>Edit User</p>
            {editProfessorForm && <EditProfessorForm closeForm={closeEditProfessorForm}/>}
        </div>
    );
};

export default EditProfessor;