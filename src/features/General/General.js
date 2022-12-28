import React from "react";
import { useSelector } from "react-redux";
import {BsDropletHalf, BsSunglasses, BsSnow, BsFillSunsetFill, BsFillSunriseFill, BsSpeedometer} from 'react-icons/bs';
import {BiWind} from 'react-icons/bi';
import {WiHumidity, WiMoonrise, WiMoonset, WiCloudyGusts} from 'react-icons/wi';
import {MdVisibility} from 'react-icons/md';
import {FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa';

export const General = () => {
    const  forecast = useSelector((state) => state.forecast.forecast);
    const  isLoading = useSelector((state) => state.forecast.isLoading);

    const renderGeneral = () => {

        if(isLoading) {
            return(
                <div></div>
            )
        }

        if(forecast.location) {
            const current = forecast.current;
            return(
                <div className="nextContainer">
                    <div className="dayGeneral">
                        <div className="row">
                            <div className="rowTitle">
                                <BsFillSunriseFill  className="rowIcon"/>
                                <p>Sunrise: {forecast.forecast.forecastday[0].astro.sunrise}</p>
                            </div>
                            <div className="rowTitle">
                                <BsFillSunsetFill  className="rowIcon"/>
                                <p>Sunset: {forecast.forecast.forecastday[0].astro.sunset}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <WiMoonrise  className="rowIcon"/>
                                <p>Moonrise: {forecast.forecast.forecastday[0].astro.moonrise}</p>
                            </div>
                            <div className="rowTitle">
                                <WiMoonset  className="rowIcon"/>
                                <p>Moonset: {forecast.forecast.forecastday[0].astro.moonset}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <FaTemperatureHigh  className="rowIcon"/>
                                <p>Feels like:</p>
                            </div>
                            <div className="rowTitle">
                                <FaTemperatureLow  className="noShow"/>
                                <p>{current.feelslike_c}°</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <BiWind  className="rowIcon"/>
                                <p>Current Wind:</p>
                            </div>
                            <div className="rowTitle">
                                <BsDropletHalf  className="noShow"/>
                                <p>{current.wind_kph} km/h | {current.wind_dir}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <WiCloudyGusts  className="rowIcon"/>
                                <p>Gust:</p>
                            </div>
                            <div className="rowTitle">
                                <BsDropletHalf  className="noShow"/>
                                <p>{current.gust_kph} km/h</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <BsDropletHalf  className="rowIcon"/>
                                <p>Precipitations:</p>
                            </div>
                            <div className="rowTitle">
                                <BsDropletHalf  className="noShow"/>
                                <p>{current.precip_mm} mm</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <BsSpeedometer  className="rowIcon"/>
                                <p>Pressure:</p>
                            </div>
                            <div className="rowTitle">
                                <BsSpeedometer  className="noShow"/>
                                <p>{current.pressure_mb} hPa</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <MdVisibility  className="rowIcon"/>
                                <p>Visibility:</p>
                            </div>
                            <div className="rowTitle">
                                <BsDropletHalf  className="noShow"/>
                                <p>{current.vis_km} km</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <WiHumidity  className="rowIcon"/>
                                <p>Umidity:</p>
                            </div>
                            <div className="rowTitle">
                                <BsDropletHalf  className="noShow"/>
                                <p>{current.humidity} %</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="rowTitle">
                                <BsSunglasses  className="rowIcon"/>
                                <p>UV Index:</p>
                            </div>
                            <div className="rowTitle">
                                <BsDropletHalf  className="noShow"/>
                                <p>{current.uv} </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }


    return(
        <div className="genralContainer"> 
            <p className="sub">Current stats</p>
            {renderGeneral()}
        </div>
    )
}