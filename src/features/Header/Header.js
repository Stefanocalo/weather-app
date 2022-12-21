import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHints, setSearchTerm } from "../../store/forecastSlice";

import {AiFillCloud} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';

import './Header.css';

export const Header = () => {

    const [searchInput, setSearchInput] = useState('');

    const searchTerm = useSelector((state) => state.forecast.searchTerm );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchTerm(searchInput))
    }, [searchInput])

    const handleInputChange = ({target}) => {
        setSearchInput(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getHints(searchTerm));
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
            </div>
        </div>
    )
}