import React from "react";
import Skeleton from "react-loading-skeleton";
import './HintSkeleton.css';

export const HintSkeleton = () => {
   return(
    <div>
        <ul className="hintsLoading">
            {Array(3).fill(0).map((element, index) => (
                <li key={index}><Skeleton width='10rem' className="list" /></li>
            ))}

        </ul>
                    
    </div>
   )
}