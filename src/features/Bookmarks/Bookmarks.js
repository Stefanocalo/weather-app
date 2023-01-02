import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchBookmarksData, removeBookmark } from "../../store/bookmarksSlice";
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

    const renderBookmarks = () => {
        if (isLoading) {
            console.log('loading...')
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
        }

        const handleRemove = (bookmark) => {
            dispatch(removeBookmark({id: bookmark}));
        }

        if(forecast.location) {
            console.log('ok');
            return(
                <div className="bookmarksWrapper">
                    <div className="bookmarksContainer">
                        {bookmarks.map((bookmark, index) => (
                            <div className="bookmark" key={index}>
                                <div
                                className="delete"
                                onClick={() => handleRemove(bookmark.id)} >
                                    < AiFillCloseCircle className="close"/>
                                </div>
                                <div className="Bleft">
                                    <p className="Bcity">{bookmark.city}</p>
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
        <div className="genralContainer"> 
            <p className="sub">Bookmarks</p>
            {renderBookmarks()}
        </div>
    )
}