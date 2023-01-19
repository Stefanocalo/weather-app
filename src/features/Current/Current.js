import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentSkeleton } from "./CurrentSkeleton";
import { addBookmark, removeBookmark } from "../../store/bookmarksSlice";

import { renderAnim } from "../Hourly/renderAnim";
import '../Hourly/renderAnim.css';
import {IoIosAddCircle, IoIosRemoveCircle} from 'react-icons/io';

import './Current.css'
import uuid from "react-uuid";

export const Current = () => {



    const forecast = useSelector((state) => state.forecast.forecast);
    const isLoading = useSelector((state) => state.forecast.isLoading);
    const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
    const unit = useSelector(state => state.forecast.isCelsius);
    const dispatch = useDispatch();

    let today = new Date();

    const findId = () => {
        const city = bookmarks.find(element => element.city === forecast.location.name);
        let id = city.id
        return id;
    };
    

    const handleBookmark = (city) => {
        let isBookmark;
        if(bookmarks.some(element => element.city === city)) {
            isBookmark = true
        } else {
            isBookmark = false;
        }
        if(isBookmark) {
            return(
                <>
                <button
                className="bookmarkD"
                onClick={() => dispatch(removeBookmark({id: findId()}))}>
                    < IoIosRemoveCircle className="remove"/>
                    Remove bookmark
                </button>
                </>
            )
        } else {
            return(
                <>
                <button
                className="bookmarkB"
                onClick={() => dispatch(addBookmark({
                    city: forecast.location.name,
                    id: uuid(),
                    data: forecast}))}>
                        < IoIosAddCircle className="add"/>
                        Add bookmark
                    </button>
                </>
            )
        }
    }

    const handleHamburger = () => {
        document.querySelector('#hamburgerMenu').classList.toggle('active');
        document.querySelector('.bookMainContainer').classList.toggle('active');
        window.scrollTo({top: 0});
        document.body.style.overflow = 'hidden';
    }


    const renderCurrent = () => {

        if(isLoading) {
            return(
                <CurrentSkeleton />
            )
        }

        if(forecast.location) {
            let now = Math.floor(forecast.current.last_updated[11]+forecast.current.last_updated[12]+forecast.current.last_updated[14]+forecast.current.last_updated[15]);
            let sunsetF = Math.floor(forecast.forecast.forecastday[0].astro.sunset[0] + forecast.forecast.forecastday[0].astro.sunset[1] + forecast.forecast.forecastday[0].astro.sunset[3] + forecast.forecast.forecastday[0].astro.sunset[4]);
            let dawn = (Math.floor(forecast.forecast.forecastday[0].astro.sunrise[0] + forecast.forecast.forecastday[0].astro.sunrise[1] + forecast.forecast.forecastday[0].astro.sunrise[3] + forecast.forecast.forecastday[0].astro.sunrise[4]));
            let sunsetHF = sunsetF + 1200;

            return(
                <div className="CurrentContainer">
                     <div id="hamburgerMenu" onClick={() => handleHamburger()}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                     </div>
                    <div className="left">
                        <h1 className='city'>{forecast.location.name}</h1>
                        <div className="condition">
                            {renderAnim(forecast.current.condition.code, now, sunsetHF, dawn)}
                            <h3 className="cond">{forecast.current.condition.text}</h3>
                            {handleBookmark(forecast.location.name)}
                        </div>
                    </div>
                    <div className="right">
                        <h1 className="deg">{`${unit ? Math.floor(forecast.current.temp_c) : Math.floor(forecast.current.temp_f)}°`}</h1>
                        <h3 className="cond">H: {`${unit ? Math.floor(forecast.forecast.forecastday[0].day.maxtemp_c) : Math.floor(forecast.forecast.forecastday[0].day.maxtemp_f)}°`} | L: {`${unit ? Math.floor(forecast.forecast.forecastday[0].day.mintemp_c) : Math.floor(forecast.forecast.forecastday[0].day.mintemp_f)}°`}</h3>
                    </div>
                </div>
            )
        }
        
    }

    return(
        <div className="Wrapper">
           {renderCurrent()}
        </div>
    )
}

