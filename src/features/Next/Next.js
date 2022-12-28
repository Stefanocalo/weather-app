import React from "react";
import { useSelector } from "react-redux";
import {BsDropletHalf, BsSunglasses, BsSnow, BsFillSunsetFill, BsFillSunriseFill} from 'react-icons/bs';
import {BiWind} from 'react-icons/bi';
import {WiHumidity, WiMoonrise, WiMoonset, WoMoonset} from 'react-icons/wi';
import {MdVisibility} from 'react-icons/md';
import { NextSkeleton } from "./NextSkeleton";
import {TbTemperature} from 'react-icons/tb';
import {FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa';

import './Next.css';

import { renderStatic } from "../Hourly/renderStatic";

export const Next = () => {

    const  forecast = useSelector((state) => state.forecast.forecast);
    const  isLoading = useSelector((state) => state.forecast.isLoading);
    let today = new Date();


    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];




    const renderNext = () => {
        if(isLoading) {
            return(
                <NextSkeleton />
            )
        }
        if(forecast.location){
            let sunsetF = Math.floor(forecast.forecast.forecastday[0].astro.sunset[0] + forecast.forecast.forecastday[0].astro.sunset[1]);
            let dawn = (Math.floor(forecast.forecast.forecastday[0].astro.sunrise[0] + forecast.forecast.forecastday[0].astro.sunrise[1]));
            let sunsetHF = sunsetF + 12;
            let dayCode = today.getDay()
            let now = Math.floor(forecast.current.last_updated[11]+forecast.current.last_updated[12]) + 1;

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
                                {renderStatic(day.day.condition.code, now, 100, 0)}
                                <div className="highLowContainer">
                                    <div className='maxMin'>
                                        <p className="highLow">L:</p>
                                        <p className="temp">{`${Math.floor(forecast.forecast.forecastday[index].day.mintemp_c)}°`}</p>
                                    </div>
                                    <div className='maxMin'>
                                        <p className="highLow">H:</p>
                                        <p className="temp">{`${Math.floor(forecast.forecast.forecastday[index].day.maxtemp_c)}°`}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom">
                                {index !== 0 && <><div className="top">
                                    <p>09:00</p>
                                    {renderStatic(day.hour[9].condition.code, 9, sunsetHF, dawn)}
                                    <div className='highLowContainer'>
                                        <div className="section">
                                            <WiHumidity className="sectionIcon"/>
                                            <p>72%</p>
                                        </div>
                                        <div className="section">
                                            <TbTemperature className="sectionIcon"/>
                                            <p>{`${day.hour[9].temp_c}°`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="top">
                                    <p>15:00</p>
                                    {renderStatic(day.hour[15].condition.code, 15, sunsetHF, dawn)}
                                    <div className='highLowContainer'>
                                        <div className="section">
                                            <WiHumidity />
                                            <p>72%</p>
                                        </div>
                                        <div className="section">
                                            <TbTemperature />
                                            <p>{`${day.hour[15].temp_c}°`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="top">
                                    <p>21:00</p>
                                    {renderStatic(day.hour[21].condition.code, 21, sunsetHF, dawn)}
                                    <div className='highLowContainer'>
                                        <div className="section">
                                            <WiHumidity />
                                            <p>72%</p>
                                        </div>
                                        <div className="section">
                                            <TbTemperature />
                                            <p>{`${day.hour[21].temp_c}°`}</p>
                                        </div>
                                    </div>
                                </div> </>}
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <BsFillSunriseFill  className="rowIcon"/>
                                    <p>Sunrise: {day.astro.sunrise}</p>
                                </div>
                                <div className="rowTitle">
                                    <BsFillSunsetFill  className="rowIcon"/>
                                    <p>Sunset: {day.astro.sunset}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <WiMoonrise  className="rowIcon"/>
                                    <p>Moonrise: {day.astro.moonrise}</p>
                                </div>
                                <div className="rowTitle">
                                    <WiMoonset  className="rowIcon"/>
                                    <p>Moonset: {day.astro.moonset}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <FaTemperatureHigh  className="rowIcon"/>
                                    <p>High: {day.day.maxtemp_c}°</p>
                                </div>
                                <div className="rowTitle">
                                    <FaTemperatureLow  className="rowIcon"/>
                                    <p>Low: {day.day.mintemp_c}°</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <BiWind  className="rowIcon"/>
                                    <p>Max Wind:</p>
                                </div>
                                <div className="rowTitle">
                                    <BsDropletHalf  className="noShow"/>
                                    <p>{day.day.maxwind_kph} km/h</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <BsDropletHalf  className="rowIcon"/>
                                    <p>Precipitations:</p>
                                </div>
                                <div className="rowTitle">
                                    <BsDropletHalf  className="noShow"/>
                                    <p>{day.day.totalprecip_mm} mm</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <BsDropletHalf  className="rowIcon"/>
                                    <p>Chance of rain:</p>
                                </div>
                                <div className="rowTitle">
                                    <BsDropletHalf  className="noShow"/>
                                    <p>{day.day.daily_chance_of_rain} %</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <BsSnow  className="rowIcon"/>
                                    <p>Snow:</p>
                                </div>
                                <div className="rowTitle">
                                    <BsDropletHalf  className="noShow"/>
                                    <p>{day.day.totalsnow_cm} cm</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <BsSnow  className="rowIcon"/>
                                    <p>Chance of snow:</p>
                                </div>
                                <div className="rowTitle">
                                    <BsDropletHalf  className="noShow"/>
                                    <p>{day.day.daily_chance_of_snow} %</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <MdVisibility  className="rowIcon"/>
                                    <p>Visibility:</p>
                                </div>
                                <div className="rowTitle">
                                    <BsDropletHalf  className="noShow"/>
                                    <p>{day.day.avgvis_km} km</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <WiHumidity  className="rowIcon"/>
                                    <p>Umidity:</p>
                                </div>
                                <div className="rowTitle">
                                    <BsDropletHalf  className="noShow"/>
                                    <p>{day.day.avghumidity} %</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="rowTitle">
                                    <BsSunglasses  className="rowIcon"/>
                                    <p>UV Index:</p>
                                </div>
                                <div className="rowTitle">
                                    <BsDropletHalf  className="noShow"/>
                                    <p>{day.day.uv} </p>
                                </div>
                            </div>
                        </div>    
                    ))}
                </>
            )
        }
    }

    return(
        <div className="nextContainer"> 
            <p className="sub">3-day forecast</p>
            {renderNext()}
        </div>
    )

}