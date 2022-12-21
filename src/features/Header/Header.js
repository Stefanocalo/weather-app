import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecast, getHints, setSearchTerm, setshowingResults } from "../../store/forecastSlice";

import {AiFillCloud} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';

import './Header.css';

export const Header = () => {

    const [searchInput, setSearchInput] = useState('');

    const searchTerm = useSelector((state) => state.forecast.searchTerm );
    const hints = useSelector((state) => state.forecast.searchResults);
    const showingResults = useSelector((state) => state.forecast.showingResults);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchTerm(searchInput));
        if(searchTerm.length > 2) {
            dispatch(getHints(searchTerm))
        }
       ;
    }, [searchInput])

    

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

    const renderHints = () => {
        if(showingResults) {
            if(hints.length > 1) {
                return(
                    <div>
                        <ul className="HintsList">
                            {hints.map((city, index) => index < 5 && (
                                <li 
                                className="list"
                                key={city.id}
                                onClick={() => handleClick(city.name)} >{city.name}</li>
                            ))}
    
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
                    type='text'
                    placeholder="search"
                    value={searchInput}
                    onChange={handleInputChange} >
                    </input>
                    <button
                    type="submit">
                        <BiSearch className="searchBtn"/>
                    </button>
                </form>
                {showingResults && <div className="searchHints">
                    {renderHints()}
                </div>}
            </div>
        </div>
    )
}