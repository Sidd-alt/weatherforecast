import React from 'react';

const Location = ({props}) => {

    return(
        <>
            <p className="location">{props.name}, {props.country}</p>            
        </>
    )
}

export default Location