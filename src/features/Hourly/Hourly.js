import React from "react";
import { useSelector } from "react-redux";
import {BsSunFill, BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillCloud} from 'react-icons/ai';

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
            let sunsetF = Math.floor(forecast.forecast.forecastday[0].astro.sunset[0] + forecast.forecast.forecastday[0].astro.sunset[1]);
            let dawn = (Math.floor(forecast.forecast.forecastday[0].astro.sunrise[0] + forecast.forecast.forecastday[0].astro.sunrise[1]));
            let sunsetHF = sunsetF + 12;

            return(
                <>
                { Array(15).fill(0).map((n, index) => {
                if(now + index <= 23) {
                    return(
                        <div className="hour" key={index}>
                            <p>{now + index === now ? 'now' : `${(now + index)}:00`}</p>
                            {renderStatic(forecast.forecast.forecastday[0].hour[(now + index)].condition.code, (now + index), sunsetHF, dawn)}
                            <p>{`${Math.floor(forecast.forecast.forecastday[0].hour[(now + index)].temp_c)}°`}</p>
                        </div>
                    )
                } else if(now + index > 23) {
                    return(
                        <div className="hour" key={index}>
                            <p>{(now + index )- 24 === now ? 'now' : `${(now + index) - 24}:00`}</p>
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


    const renderStatic = (code, actual, sunsetH, dawn) => {
        switch(code) {
            case 1000: 
                if(actual < sunsetH && actual > dawn) {
                    return(
                        <div className="clear">
                            <BsSunFill className="staticSun"/>
                        </div>
                    )
                } else if(actual >= sunsetH || actual >= 0 && actual < dawn) {
                    return(
                        <div className="clear">
                            <BsFillMoonStarsFill className="staticMoon" />
                        </div>
                    )
                }
            break;
            case 1003:
                if(actual < sunsetH && actual > dawn) {
                    return(
                        <div className="cloudy">
                            <BsSunFill className="staticSun"/>
                            <AiFillCloud className="staticCloud" />
                        </div>
                    )
                } else if(actual >= sunsetH || actual >= 0 && actual < dawn) {
                    return(
                        <div className="cloudy">
                            <BsFillMoonStarsFill className="staticMoon" />
                            <AiFillCloud className="staticCloud" />
                        </div>
                    )
                }
            break;
            case 1006 || 1009:
                return(
                    <div className="overCast">
                        <AiFillCloud className="staticCloud1" />
                        <AiFillCloud className="staticCloud2" />
                    </div>
                );
            break;
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