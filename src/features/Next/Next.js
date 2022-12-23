import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useSelector } from "react-redux";

import './Next.css';

import { renderStatic } from "../Hourly/renderStatic";

export const Next = () => {

    const  forecast = useSelector((state) => state.forecast.forecast);
    const  isLoading = useSelector((state) => state.forecast.isLoading);
    let today = new Date();
    let now = today.getHours();

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];




    const renderNext = () => {
        if(isLoading) {
            return(
                <div>
                    <p>loading</p>
                </div>
            )
        }
        if(forecast.location){
            let sunsetF = Math.floor(forecast.forecast.forecastday[0].astro.sunset[0] + forecast.forecast.forecastday[0].astro.sunset[1]);
            let dawn = (Math.floor(forecast.forecast.forecastday[0].astro.sunrise[0] + forecast.forecast.forecastday[0].astro.sunrise[1]));
            let sunsetHF = sunsetF + 12;
            let dayCode = today.getDay()
            return(
                <>
                    {forecast.forecast.forecastday.map((day, index) => (
                        <div 
                        className="day"
                        onClick={() => document.querySelector(`#day${index}`).classList.toggle('active')}
                        id={`day${index}`}
                        key={index}>
                            <div className="top">
                                {dayCode + index === dayCode && <p>Today</p>}
                                {dayCode + index <= 6 && dayCode + index !== dayCode && <p>{weekday[dayCode + index]}</p>}
                                {dayCode + index > 6 && dayCode + index !== dayCode  && <p>{weekday[(dayCode + index) - 7]}</p>}
                                {renderStatic(forecast.forecast.forecastday[index].day.condition.code, now, 100, 0)}
                                <div className="highLowContainer">
                                    <div className='maxMin'>
                                        <p className="highLow">H:</p>
                                        <p className="temp">{`${Math.floor(forecast.forecast.forecastday[index].day.maxtemp_c)}°`}</p>
                                    </div>
                                    <div className='maxMin'>
                                        <p className="highLow">H:</p>
                                        <p className="temp">{`${Math.floor(forecast.forecast.forecastday[index].day.mintemp_c)}°`}</p>
                                    </div>
                                </div>

                                </div>
                                
                            <div className="bottom">

                            </div>
                        </div>
                    ))}
                </>
            )
        }
    }

    return(
        <div className="nextContainer"> 
            {renderNext()}
        </div>
    )

}