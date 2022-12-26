import React from "react";
import Skeleton from "react-loading-skeleton";
import './NextSkeleton.css';

export const NextSkeleton = () => {
    return(
        <div className="hourWrapper">
            <div className="loadingDay">
            {Array(3).fill(0).map((item,index) => (
                <div className="dayContainer">
                    <Skeleton className="loadingText"/>
                    <Skeleton className="loadingStIcon"/>
                    <Skeleton className="loadingText"/>
                </div>
            ))}
            </div>
        </div>
    )
}