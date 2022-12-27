import React from "react";
import Skeleton from "react-loading-skeleton";
import './GeneralSkeleton.css';

export const GeneralSkeleton = () => {
    return(
        <div className="generalLoadingWrapper">
            <div className="loadingGeneral">
                {Array(4).fill(0).map((item, index) => (
                    <div className="row" key={index}>
                        <div className="card">
                            <Skeleton />
                            <Skeleton /> 
                            <Skeleton />
                        </div>
                        <div className="card">
                            <Skeleton />
                            <Skeleton /> 
                            <Skeleton />
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>
    )
};

