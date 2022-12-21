import React from "react";
import { useSelector } from "react-redux";

import './Current.css'

export const Current = () => {

    const forecast = useSelector((state) => state.forecast.forecast);
    const isLoading = useSelector((state) => state.forecast.isLoading);


    const renderCurrent = () => {

        if(isLoading) {
            return(
                <div className="CurrentContainer">
                    <p>Loading...</p>
                </div>
            )
        }

        if(forecast.location) {
            return(
                <div className="CurrentContainer">
                    <div className="right">
                        <h1>{forecast.location.name}</h1>
                        <h3>{`${Math.floor(forecast.current.temp_c)}°`}</h3>
                        <h3>H: {`${Math.floor(forecast.forecast.forecastday[0].day.maxtemp_c)}°`} | L: {`${Math.floor(forecast.forecast.forecastday[0].day.mintemp_c)}°`}</h3>
                    </div>
                    <div className="right">
                        <h3>{forecast.current.condition.text}</h3>
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