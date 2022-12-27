import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecast, getHints, setSearchTerm, setshowingResults } from "../../store/forecastSlice";
import { HintSkeleton } from "./HintSkeleton";

import {AiFillCloud, AiOutlineConsoleSql} from 'react-icons/ai';

import './Header.css';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const Header = () => {

    const [searchInput, setSearchInput] = useState('');

    const searchTerm = useSelector((state) => state.forecast.searchTerm );
    const hints = useSelector((state) => state.forecast.searchResults);
    const showingResults = useSelector((state) => state.forecast.showingResults);
    const searchLoading = useSelector((state) => state.forecast.searchLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchTerm(searchInput));
        if(searchInput.length >= 3) {
            dispatch(getHints(searchTerm))
        } else if(searchInput.length < 3) {
            dispatch(setshowingResults());
        }
       ;
    }, [searchInput]);

    useEffect(() => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const posR = `${latitude},${longitude}`
                dispatch(fetchForecast(posR))
            })
           } else {
            
            dispatch(fetchForecast('Milan'));
           }
    }, [])

    

    const handleInputChange = ({target}) => {
        setSearchInput(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClick = (city) => {
        dispatch(fetchForecast(city));
        setSearchInput('');
    }

    const handleClearClick = () => {
        dispatch(setshowingResults());
        setSearchInput('');
    }

    const renderHints = () => {

        if(showingResults) {
            if(searchLoading === true) {
                return(
                    <div>
                        <HintSkeleton />
                    </div>
                )
            }
            if(hints.length > 0) {
                return(
                    <div>
                        <ul className="HintsList">
                            {hints.map((city, index) => index < 3 && (
                                <li 
                                className="list"
                                key={city.id}
                                onClick={() => handleClick(city.name)} >{city.name}</li>
                            ))}
                        </ul>
                        
                    </div>
                )

            }
            if(hints.length === 0) {
                return(
                    <div>
                        <ul className="HintsList">
                                <li 
                                className="list"
                                >No results</li>

                        </ul>
                    </div>
                )
            }
            
        }
    }

    return(
        <div className="header">
            <div className="logo">
                <AiFillCloud className="logoIcon" />
                <p>City<span>Weather</span></p>

            </div>
            <div className="search">
                <form
                onSubmit={handleSubmit}
                >
                    <input
                    className="searchInput"
                    type='text'
                    placeholder="search"
                    value={searchInput}
                    onChange={handleInputChange}>
                    </input>
                    <button 
                    onClick={() => handleClearClick()}
                    >clear</button>
                </form>
                {showingResults && <div className="searchHints">
                    {renderHints()}
                </div>}
            </div>
        </div>
    )
}