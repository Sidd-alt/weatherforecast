import React from 'react';

const Weathercondition = ({props}) => {

    return(
        <div style={{display: "flex", justifyContent : 'center'}}>
            <h1 className="weather-condition fw6">{props.text}</h1>
            <img src={props.icon} alt="weather-icon" width="50px" height="40px" />
        </div>
    )
}

export default Weathercondition