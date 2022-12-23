import React from "react";
import { useSelector } from "react-redux";
import {renderStatic} from './renderStatic.js'

import './Hourly.css'

export const Hourly = () => {

    const forecast = useSelector((state) => state.forecast.forecast);
    const isLoading = useSelector((state) => state.forecast.isLoading);

    let today = new Date();
    let now = today.getHours() + 1;


    const renderHourly = () => {
        if(isLoading) {
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
        if(forecast.location) {
            let sunsetF = Math.floor(forecast.forecast.forecastday[0].astro.sunset[0] + forecast.forecast.forecastday[0].astro.sunset[1]);
            let dawn = (Math.floor(forecast.forecast.forecastday[0].astro.sunrise[0] + forecast.forecast.forecastday[0].astro.sunrise[1]));
            let sunsetHF = sunsetF + 12;

            return(
                <>
                <div className="hour">
                    <p>now</p>
                    {renderStatic(forecast.current.condition.code, now, sunsetHF, dawn)}
                    <p>{`${Math.floor(forecast.current.temp_c)}°`}</p>
                </div>
                { Array(15).fill(0).map((n, index) => {
                if(now + index <= 23) {
                    return(
                        <div className="hour" key={index}>
                            <p>{`${(now + index)}:00`}</p>
                            {renderStatic(forecast.forecast.forecastday[0].hour[(now + index)].condition.code, (now + index), sunsetHF, dawn)}
                            <p>{`${Math.floor(forecast.forecast.forecastday[0].hour[(now + index)].temp_c)}°`}</p>
                        </div>
                    )
                } else if(now + index > 23) {
                    return(
                        <div className="hour" key={index}>
                            <p>{`${(now + index) - 24}:00`}</p>
                            {renderStatic(forecast.forecast.forecastday[1].hour[(now + index) -24].condition.code, ((now + index) -24), sunsetHF, dawn)}
                            <p>{`${Math.floor(forecast.forecast.forecastday[1].hour[(now + index) - 23].temp_c)}°`}</p>
                        </div>
                    )
                }
            }) }
                </>
            )  
        }
    }


    


    return(
        <div className="hourlyContainer">
            <div className="hourlyWrapper">
                {renderHourly()}
            </div>
        </div>
    )
}