import React from "react";
import { useSelector } from "react-redux";
import {BsSunFill} from 'react-icons/bs'

import './Hourly.css'

export const Hourly = () => {

    const forecast = useSelector((state) => state.forecast.forecast);
    const isLoading = useSelector((state) => state.forecast.isLoading);

    let today = new Date();
    let now = today.getHours();


    const renderHourly = () => {
        if(isLoading) {
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
        if(forecast.location) {
            return(
                <>
                { Array(15).fill(0).map((n, index) => {
                if(now <=22) {
                    return(
                        <div className="hour" key={index}>
                            <p>{`${(now + index)}:00`}</p>
                            <BsSunFill className="icon"/>
                            <p>{forecast.forecast.forecastday[0].hour[(now + index)].temp_c}</p>;
                        </div>
                    )
                } else if(now > 22) {
                    return(
                        <div className="hour" key={index}>
                            <p>{`${(now + index) - 23}:00`}</p>
                            <BsSunFill className="icon"/>
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