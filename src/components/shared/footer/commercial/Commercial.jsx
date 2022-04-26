import React, { Fragment } from 'react';

import './commercial.css';

const Commercial = ( {title,info} ) => {

    return (
        <Fragment>
            <div className='commercial-note'>
                <h4>{title}</h4>
                <ul>
                    {info.map( (commercial,i)=>{
                        return <li key={i}>{commercial}</li>
                    })}
                </ul>
            </div>
            <hr></hr>
        </Fragment>
    );
};

export default Commercial;