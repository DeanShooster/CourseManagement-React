import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';
import ProfessorPage from './professor-page/ProfessorPage';
import StudentPage from './student-page/StudentPage';

import './user-page.css';

const UserPage = () => {
    const {user} = useContext(UserContext);

    const offlineUserPanel = <p className='offline-msg'>You are currently offline, Please log in. </p>

    return (
        <section className='user-requests'>
            { user && <ProfessorPage />}
            { (user!=null && !user) && <StudentPage />}
            { user === null && offlineUserPanel }
        </section>
    )
};

export default UserPage;