import React from "react";
import Skeleton from "react-loading-skeleton";
import './HourlySkeleton.css';

export const HourlySkeleton = () => {
    return(
        <div className="loadingHourlyContainer">
            <div className="loadingHourlyWrapper">
               {Array(10).fill(0).map((item, index) => (
                 <div 
                 className="loadingHour"
                 key={index}>
                    <Skeleton className="loadingTIme" />
                    <Skeleton className="loadingStIcon" />
                    <Skeleton className="loadingTemp" />
                </div>
               ))}
            </div>
        </div>
    )
}