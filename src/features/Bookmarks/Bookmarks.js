import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSwipeable } from "react-swipeable";

import { fetchBookmarksData, removeBookmark } from "../../store/bookmarksSlice";
import { fetchForecast } from "../../store/forecastSlice";
import './Bookmarks.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import { BookmarkSkeleton } from "./BookmarkSkeleton";

export const Bookmarks = () => {

    const bookmarks = useSelector(state => state.bookmarks.bookmarks);
    const isLoading = useSelector(state => state.forecast.isLoading);
    const error = useSelector(state => state.bookmarks.error);
    const forecast = useSelector((state) => state.forecast.forecast);
    const unit = useSelector(state => state.forecast.isCelsius);
    const dispatch = useDispatch();


    useEffect(() => {
        bookmarks?.map((city, index) => {
            dispatch(fetchBookmarksData(city.city, index))
        })
    }, []);

    const handleRemove = (bookmark) => {
        dispatch(removeBookmark({id: bookmark}));
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            document.querySelector('#hamburgerMenu').classList.remove('active');
            document.querySelector('.bookMainContainer').classList.remove('active');
            window.scrollTo({top: 0});
            document.body.style.overflow = 'auto';
        }
    })

    const handleBookmarkClick = (city) => {
        dispatch(fetchForecast(city));
        document.querySelector('#hamburgerMenu').classList.remove('active');
        document.querySelector('.bookMainContainer').classList.remove('active');
        window.scrollTo({top: 0});
        document.body.style.overflow = 'auto';
    }

    const renderBookmarks = () => {
        if (isLoading) {
            return(
              <BookmarkSkeleton />
            )
        }

        if(forecast.location) {
            return(
                <div
                {...handlers}
                className="bookmarksWrapper">
                    <div className="bookmarksContainer">
                    {bookmarks.length === 0 && <p className="noBookmark">Saved location will be displayed here.</p>}
                        {bookmarks.map((bookmark, index) => (
                            <div className="bookmark"  
                            key={index}>
                                <div
                                className="delete"
                                onClick={() => handleRemove(bookmark.id)} >
                                    < AiFillCloseCircle className="close"/>
                                </div>
                                <div
                                onClick={() => handleBookmarkClick(bookmark.data.location.name)}  
                                className="Bleft">
                                    <p className="Bcity">{bookmark.data.location.name}</p>
                                    <p className="Btemp">{unit ? bookmark.data.current.temp_c : bookmark.data.current.temp_f }°</p>
                                </div>
                                <div 
                                onClick={() => handleBookmarkClick(bookmark.data.location.name)}  
                                className="Bright">
                                    <p className="Bcondition">{bookmark.data.current.condition.text}</p>
                                    <p className="BHL">H: {unit ? Math.floor(bookmark.data.forecast.forecastday[0].day.maxtemp_c) : Math.floor(bookmark.data.forecast.forecastday[0].day.maxtemp_f)}° | L: {unit ? Math.floor(bookmark.data.forecast.forecastday[0].day.mintemp_c) : Math.floor(bookmark.data.forecast.forecastday[0].day.mintemp_f)}°</p>
                                </div>
                            </div>
                        ))}
                    </div>
        
                </div>
            )
        
        }

    };

    return(
        <div className="bookMainContainer"> 
            <p className="sub">Bookmarks</p>
            {renderBookmarks()}
        </div>
    )
}