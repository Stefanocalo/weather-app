import React from "react";
import { useSelector } from "react-redux";
import {BsDropletHalf, BsSunglasses, BsSnow} from 'react-icons/bs';
import {BiWind} from 'react-icons/bi';
import {WiHumidity} from 'react-icons/wi';
import {MdVisibility} from 'react-icons/md';

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
                                <div className="row">
                                    <div className="card" >
                                        <p className="cardTitle">Precipitation</p>
                                        <div className="cardContent">
                                            <BsDropletHalf  className="cardIcon"/>
                                            <p className='data'>{`${forecast.forecast.forecastday[index].day.totalprecip_mm} mm`}</p>
                                        </div>
                                    </div>
                                    <div className="card" >
                                        <p className="cardTitle">Wind</p>
                                        <div className="cardContent">
                                            <BiWind  className="cardIcon"/>
                                            <p className='data'>{`${forecast.forecast.forecastday[index].day.maxwind_kph} km/h`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card" >
                                        <p className="cardTitle">Umidity</p>
                                        <div className="cardContent">
                                            <WiHumidity  className="cardIcon"/>
                                            <p className='data'>{`Avg. ${forecast.forecast.forecastday[index].day.avghumidity} %`}</p>
                                        </div>
                                    </div> 
                                    <div className="card" >
                                        <p className="cardTitle">UV Index</p>
                                        <div className="cardContent">
                                            <BsSunglasses  className="cardIcon"/>
                                            <p className='data'>{`Avg. ${forecast.forecast.forecastday[index].day.uv}`}</p>
                                        </div>
                                    </div>               
                                </div> 
                                <div className="row">
                                    <div className="card" >
                                        <p className="cardTitle">Visibility</p>
                                        <div className="cardContent">
                                            <MdVisibility  className="cardIcon"/>
                                            <p className='data'>{`Avg. ${forecast.forecast.forecastday[index].day.avgvis_km} km`}</p>
                                        </div>
                                    </div> 
                                    <div className="card" >
                                        <p className="cardTitle">Snow Chance</p>
                                        <div className="cardContent">
                                            <BsSnow  className="cardIcon"/>
                                            <p className='data'>{`${forecast.forecast.forecastday[index].day.uv} %`}</p>
                                        </div>
                                    </div>              
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
            {renderNext()}
        </div>
    )

}