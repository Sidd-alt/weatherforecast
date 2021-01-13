import React from 'react';
import Temperature from './Temperature';
import Weathercondition from './Weathercondition';
import Location from './Location';
import WeatherChart from './WeatherChart';


const Weatherapp = ({ props }) => { 
   
    return(
        <>
            <Temperature props={props.current}/>
            <Weathercondition props = {props.current.condition} />
            <Location props={props.location}/>
            <div className="chart-box">
                <p className="heading">24 Hours Weather Forecast</p>
                <WeatherChart props = {props.forecast.forecastday[0]}/>
            </div>
        </>
    )
}

export default Weatherapp