import React from "react";
import { useSelector } from "react-redux";

import './Next.css';

export const Next = () => {

    const  forecast = useSelector((state) => state.forecast.forecast);
    const  isLoading = useSelector((state) => state.forecast.isLoading);

    let today = new Date();
    let now = today.getHours();

    const renderNext = () => {
        if(isLoading) {
            return(
                <div>
                    <p>loading</p>
                </div>
            )
        }
        if(forecast.location){
            return(
                <>
                    {forecast.forecast.forecastday.map((day, index) => (
                        <div 
                        className="day"
                        key={index}>
                            <div className="top">

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