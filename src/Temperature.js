import React from 'react';

const Temperature = ({props}) => {

    return(
        <p className="temperature-display">{props.temp_c}°C | {props.temp_f}°F </p>
    )
}

export default Temperature