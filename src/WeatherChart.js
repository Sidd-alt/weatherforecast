import React from 'react';
import {Line} from 'react-chartjs-2'


const WeatherChart = ({props}) => {

    const xAxis = props.hour.map(h_data=> {
        return(h_data.time) 
    })


    const yAxis = props.hour.map(h_data=> {
        return(`${h_data.temp_c}`) 
    })

    const chartData = {
        labels : xAxis,
        datasets : [
            {
                label : 'Temperature in °C',
                data : yAxis,
                backgroundColor : ` rgba(42, 186, 243, 0.2)`,
                borderColor : 'rgba(42, 186, 243, 0.9)',
                fill : true,
                lineTension: '0',
            }
        ]
    }
    
    return(
        <div className = "chart-box">
            <Line
                data={chartData}
                width={350}
                height={300}
                option={{ maintainAspectRatio: false}}
            />
        </div>
    )
}

export default WeatherChart