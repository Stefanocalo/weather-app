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

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];




    const renderNext = () => {
        if(isLoading) {
            return(
                <div>
                    <p>loading</p>
                </div>
            )
        }
        if(forecast.location){
            let dayCode = today.getDay()
            return(
                <>
                    {forecast.forecast.forecastday.map((day, index) => (
                        <div 
                        className="day"
                        key={index}>
                            <div className="top">
                                <p>{dayCode + index <= 6 ? weekday[dayCode + index] : weekday[(dayCode + index) - 7]}</p>


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