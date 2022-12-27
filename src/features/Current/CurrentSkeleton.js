import React from "react";
import Skeleton from "react-loading-skeleton";
import './CurrentSkeleton.css';


export const CurrentSkeleton = () => {
    return(
        <div className="loadingCurrentContainer">
            <div className="loadingLeft">
                <Skeleton className="loadingCity"/>
                <Skeleton className="loadingIcon"/>
                <Skeleton className="loadingCondition"/>
            </div>
            <div className="loadingRight">   
                <Skeleton className="loadingDeg" />
                <Skeleton className="loadingCond" />            
            </div>
        </div>
    )
}