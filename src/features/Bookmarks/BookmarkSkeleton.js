import React from "react";
import Skeleton from "react-loading-skeleton";
import './BookmarkSkeleton.css';
import './Bookmarks.css';
import {AiFillCloseCircle} from 'react-icons/ai';

export const BookmarkSkeleton = () => {
    return(
        <div className="bookmarksSkeletonWrapper">
            <div className="bookmarksSkeletonContainer">
                {Array(4).fill(0).map((count, index) => (
                    <div className="skeBookmark" key={index}>
                        <div className="delete">
                            < AiFillCloseCircle className="close"/>
                        </div>
                        <div className="Bleft">
                            <Skeleton width='12rem' height="2rem"/>
                            <Skeleton width='3rem' height="2rem"/>
                        </div>
                        <div className="Bright">
                            <Skeleton width='7rem' height="1.2rem"/>
                            <Skeleton width='6rem' height="1.2rem"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

