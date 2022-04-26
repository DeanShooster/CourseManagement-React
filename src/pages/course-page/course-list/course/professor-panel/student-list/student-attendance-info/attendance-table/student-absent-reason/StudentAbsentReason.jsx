import React from 'react';

const StudentAbsentReason = ( props ) =>{

    // Closes the reason.
    const onMouseLeaveHandler = () =>{
        props.closeReason();
    };

    return (
        <div style={ {position: 'absolute', top: props.top, left: props.left} } onMouseLeave={onMouseLeaveHandler} > {props.reason} </div>
    );
};

export default StudentAbsentReason;