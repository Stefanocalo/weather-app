import React from "react";
import { useSelector } from "react-redux";
import {BsDropletHalf, BsSunglasses, BsThermometerHalf} from 'react-icons/bs';
import {AiFillCloud} from 'react-icons/ai';
import {BiWind} from 'react-icons/bi';
import {WiHumidity, WiBarometer} from 'react-icons/wi';
import {MdVisibility} from 'react-icons/md';
import { GeneralSkeleton } from "./GeneralSkeleton";

export const General = () => {
    const  forecast = useSelector((state) => state.forecast.forecast);
    const  isLoading = useSelector((state) => state.forecast.isLoading);

    const renderGeneral = () => {

        if(isLoading) {
            return(
                <GeneralSkeleton />
            )
        }

        if(forecast.location) {
            return(
                <div className="nextContainer">
                    <div className="dayGeneral">
                    <div className="row">
                        <div className="card" >
                            <p className="cardTitle">Precipitation</p>
                            <div className="cardContent">
                                 <BsDropletHalf  className="cardIcon"/>
                                <p className='data'>{`${forecast.current.precip_mm} mm`}</p>
                                </div>
                            </div>
                            <div className="card" >
                                <p className="cardTitle">Feels Like</p>
                                <div className="cardContent">
                                    <BsThermometerHalf  className="cardIcon"/>
                                    <p className='data'>{`${Math.floor(forecast.current.feelslike_c)}°`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card" >
                                <p className="cardTitle">Umidity</p>
                                <div className="cardContent">
                                    <WiHumidity  className="cardIcon"/>
                                    <p className='data'>{`${forecast.current.humidity} %`}</p>
                                </div>
                            </div>
                            <div className="card" >
                                <p className="cardTitle">Wind</p>
                                <div className="cardContent">
                                    <BiWind  className="cardIcon"/>
                                    <p className='data'>{`${forecast.current.wind_kph} km/h`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card" >
                                <p className="cardTitle">Clouds</p>
                                <div className="cardContent">
                                    <AiFillCloud  className="cardIcon"/>
                                    <p className='data'>{`${forecast.current.cloud} %`}</p>
                                </div>
                            </div> 
                            <div className="card" >
                                <p className="cardTitle">UV Index</p>
                                <div className="cardContent">
                                    <BsSunglasses  className="cardIcon"/>
                                    <p className='data'>{`${forecast.current.uv}`}</p>
                                </div>
                            </div>               
                        </div> 
                        <div className="row">
                            <div className="card" >
                                <p className="cardTitle">Visibility</p>
                                <div className="cardContent">
                                    <MdVisibility  className="cardIcon"/>
                                    <p className='data'>{`${forecast.current.vis_km} km`}</p>
                                </div>
                            </div> 
                            <div className="card" >
                                <p className="cardTitle">Pressure</p>
                                <div className="cardContent">
                                    <WiBarometer  className="cardIcon"/>
                                    <p className='data'>{`${forecast.current.pressure_mb} hPa`}</p>
                                </div>
                            </div>              
                        </div>
                    </div>
                </div>
            )
        }

    }


    return(
        <div className="genralContainer"> 
            <p className="sub">Today stats</p>
            {renderGeneral()}
        </div>
    )
}