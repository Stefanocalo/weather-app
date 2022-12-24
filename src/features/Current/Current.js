import React from "react";
import { useSelector } from "react-redux";


import { renderAnim } from "../Hourly/renderAnim";
import '../Hourly/renderAnim.css';

import './Current.css'

export const Current = () => {

    const forecast = useSelector((state) => state.forecast.forecast);
    const isLoading = useSelector((state) => state.forecast.isLoading);

    let today = new Date();


    const renderCurrent = () => {

        if(isLoading) {
            return(
                <div className="CurrentContainer">
                    <p>Loading...</p>
                </div>
            )
        }

        if(forecast.location) {
            let now = Math.floor(forecast.current.last_updated[11]+forecast.current.last_updated[12]) + 1;
            let sunsetF = Math.floor(forecast.forecast.forecastday[0].astro.sunset[0] + forecast.forecast.forecastday[0].astro.sunset[1]);
            let dawn = (Math.floor(forecast.forecast.forecastday[0].astro.sunrise[0] + forecast.forecast.forecastday[0].astro.sunrise[1]));
            let sunsetHF = sunsetF + 12;

            return(
                <div className="CurrentContainer">
                    <div className="left">
                        <h1 className='city'>{forecast.location.name}</h1>
                        <div className="condition">
                            {renderAnim(forecast.current.condition.code, now, sunsetHF, dawn)}
                            <h3 className="cond">{forecast.current.condition.text}</h3>
                        </div>
                    </div>
                    <div className="right">
                        <h1 className="deg">{`${Math.floor(forecast.current.temp_c)}°`}</h1>
                        <h3 className="cond">H: {`${Math.floor(forecast.forecast.forecastday[0].day.maxtemp_c)}°`} | L: {`${Math.floor(forecast.forecast.forecastday[0].day.mintemp_c)}°`}</h3>
                    </div>
                </div>
            )
        }
        
    }

    return(
        <div className="Wrapper">
           {renderCurrent()}
        </div>
    )
}

