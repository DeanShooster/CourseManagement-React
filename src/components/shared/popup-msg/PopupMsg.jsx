import React, { Fragment } from 'react';

import './popup-msg.css';

const PopupMsg = ( props ) =>{

    return (
        <Fragment>
            <div className='block-wall'></div>
            <div className='handle left-handle'></div>
            <div className='popup'>
                <span>{props.Message}</span>
                <span className='close-pop-up' onClick={props.closePopup}>Close</span>
            </div>
            <div className='handle right-handle'></div>
        </Fragment>
        
    );
};

export default PopupMsg;