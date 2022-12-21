import React from "react";
import { useSelector } from "react-redux";

import './Current.css'

export const Current = () => {

    const forecast = useSelector((state) => state.forecast.forecast)

    console.log(forecast.forecast.forecastday[0].day.maxtemp_c)

    return(
        <div className="CurrentContainer">
            <div className="right">
                <h1>{forecast.location.name}</h1>
                <h3>{`${Math.floor(forecast.current.temp_c)}°`}</h3>
            </div>
            <div className="right">
                <h3>{forecast.current.condition.text}</h3>
                <h3>H: {`${Math.floor(forecast.forecast.forecastday[0].day.maxtemp_c)}°`} | L: {`${Math.floor(forecast.forecast.forecastday[0].day.mintemp_c)}°`}</h3>
            </div>
        </div>
    )
}