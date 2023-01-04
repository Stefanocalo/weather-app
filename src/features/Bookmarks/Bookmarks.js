import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchBookmarksData, removeBookmark } from "../../store/bookmarksSlice";
import { fetchForecast } from "../../store/forecastSlice";
import './Bookmarks.css';
import {AiFillCloseCircle} from 'react-icons/ai';


export const Bookmarks = () => {

    const bookmarks = useSelector(state => state.bookmarks.bookmarks);
    const isLoading = useSelector(state => state.bookmarks.isLoading);
    const error = useSelector(state => state.bookmarks.error);
    const showingBookmarks = useSelector(state => state.bookmarks.showingBookmarks);
    const forecast = useSelector((state) => state.forecast.forecast);
    const dispatch = useDispatch();


    useEffect(() => {
        bookmarks.map((city, index) => {
            dispatch(fetchBookmarksData(city.city, index))
        })
    }, []);

    const handleRemove = (bookmark) => {
        dispatch(removeBookmark({id: bookmark}));
    }

    const handleBookmarkClick = (city) => {
        dispatch(fetchForecast(city));
        document.querySelector('#hamburgerMenu').classList.remove('active');
        document.querySelector('.bookMainContainer').classList.remove('active');
        window.scrollTo({top: 0});
    }

    const renderBookmarks = () => {
        if (isLoading) {
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
        }

        if(forecast.location) {
            return(
                <div className="bookmarksWrapper">
                    <div className="bookmarksContainer">
                    {bookmarks.length === 0 && <p className="noBookmark">Saved location will be displayed here.</p>}
                        {bookmarks.map((bookmark, index) => (
                            <div className="bookmark"
                            onClick={() => handleBookmarkClick(bookmark.data.location.name)}    
                            key={index}>
                                <div
                                className="delete"
                                onClick={() => handleRemove(bookmark.id)} >
                                    < AiFillCloseCircle className="close"/>
                                </div>
                                <div className="Bleft">
                                    <p className="Bcity">{bookmark.data.location.name}</p>
                                    <p className="Btemp">{bookmark.data.current.temp_c}°</p>
                                </div>
                                <div className="Bright">
                                    <p className="Bcondition">{bookmark.data.current.condition.text}</p>
                                    <p className="BHL">H: {Math.floor(bookmark.data.forecast.forecastday[0].day.maxtemp_c)}° | L: {Math.floor(bookmark.data.forecast.forecastday[0].day.mintemp_c)}°</p>
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