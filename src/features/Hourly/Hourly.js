import React from "react";
import { useSelector } from "react-redux";
import {renderStatic} from './renderStatic.js'
import { HourlySkeleton } from "./HourlySkeleton.js";
import './Hourly.css'

export const Hourly = () => {

    const forecast = useSelector((state) => state.forecast.forecast);
    const isLoading = useSelector((state) => state.forecast.isLoading);
    const unit = useSelector(state => state.forecast.isCelsius);

    let today = new Date();




    const renderHourly = () => {
        if(isLoading) {
            return(
                   <HourlySkeleton />
            )
        }
        if(forecast.location) {
            let sunsetF = Math.floor(forecast.forecast.forecastday[0].astro.sunset[0] + forecast.forecast.forecastday[0].astro.sunset[1] );
            let dawn = Math.floor(forecast.forecast.forecastday[0].astro.sunrise[0] + forecast.forecast.forecastday[0].astro.sunrise[1]);
            let sunsetHF = sunsetF + 12;
            let now = Math.floor(forecast.current.last_updated[11]+forecast.current.last_updated[12]) + 1;
            return(
                <>
                <div className="hour">
                    <p>now</p>
                    {renderStatic(forecast.current.condition.code, now, sunsetHF, dawn)}
                    <p>{`${Math.floor(unit ? forecast.current.temp_c : forecast.current.temp_f)}°`}</p>
                </div>
                { Array(23).fill(0).map((n, index) => {
                if(now + index <= 23) {
                    return(
                        <div className="hour" key={index}>
                            <p>{`${(now + index)}:00`}</p>
                            {renderStatic(forecast.forecast.forecastday[0].hour[(now + index)].condition.code, (now + index), sunsetHF, dawn)}
                            <p>{`${unit ? Math.floor(forecast.forecast.forecastday[0].hour[(now + index)].temp_c) : Math.floor(forecast.forecast.forecastday[0].hour[(now + index)].temp_f)}°`}</p>
                        </div>
                    )
                } else if(now + index > 23) {
                    return(
                        <div className="hour" key={index}>
                            <p>{`${(now + index) - 24}:00`}</p>
                            {renderStatic(forecast.forecast.forecastday[1].hour[(now + index) -24].condition.code, ((now + index) -24), sunsetHF, dawn)}
                            <p>{`${unit ? Math.floor(forecast.forecast.forecastday[1].hour[(now + index) - 23].temp_c) : Math.floor(forecast.forecast.forecastday[1].hour[(now + index) - 23].temp_f)}°`}</p>
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