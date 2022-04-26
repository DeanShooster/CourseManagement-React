import React from 'react';

import './course-date.css';

const CourseDate = ( props ) =>{

    const date = props.date;
    const startingDate = new Date(date.start);   const endingDate = new Date(date.end);

    const startingDay = startingDate.getDate(); const startingMonth = startingDate.getMonth() + 1; const year = startingDate.getFullYear();
    const endingDay = endingDate.getDate(); const endingMonth = endingDate.getMonth() + 1;

    return (
        <div className='date-container'>
            <p className='year'>{year}</p>
            <div className='date-duration'>
                <p>{startingDay}/{startingMonth}</p>
                <span>&nbsp;~&nbsp;</span>
                <p>{endingDay}/{endingMonth}</p>
            </div>
        </div>
    );
};

export default CourseDate;