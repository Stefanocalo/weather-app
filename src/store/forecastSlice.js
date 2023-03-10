import { createSlice } from "@reduxjs/toolkit";
import { getForecast, getSearch } from "./api";

const initialState = {
    forecast: [],
    isLoading: true,
    error: false,
    searchTerm: '',
    searchLoading: false,
    searchError: false,
    showingResults: false,
    searchResults: [],
    isCelsius: true
}



const forecastSlice = createSlice({
    name: 'forecast',
    initialState: initialState,
    reducers: {
        startGetForecast: (state) => {
            state.isLoading = true;
            state.error = false;
            state.showingResults = false;
        },
        getForecastSuccess: (state, action) => {
            state.isLoading = false;
            state.forecast = action.payload;
        },
        getForecastFail: (state) => {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        startGetResults: (state) => {
            state.searchLoading = true;
        },
        searchSuccess: (state, action) => {
            state.searchLoading = false;
            state.showingResults = true;
            state.searchResults = action.payload;
        },
        searchError: (state) => {
            state.searchError = true;
            state.searchLoading = false;
        },
        setshowingResults: (state) => {
            state.showingResults = false;
        },
        setUnit: (state) => {
            state.isCelsius = !state.isCelsius
        }
    }
});

export const {
    startGetForecast,
    getForecastSuccess,
    getForecastFail,
    setSearchTerm,
    startGetResults,
    searchSuccess,
    searchLoading,
    searchError,
    setshowingResults,
    setUnit
} = forecastSlice.actions;

export default forecastSlice.reducer;

// Thunk to fetch Forecast

export const fetchForecast = (query) => async (dispatch) => {
    try{
        dispatch(startGetForecast());
        const forecast = await getForecast(query);
        dispatch(getForecastSuccess(forecast));
        dispatch(setshowingResults())
    } catch(error) {
        console.log(error);
        dispatch(getForecastFail);
    }
};

// Thunk to get autocomplete

export const getHints = (input) => async (dispatch) => {
    try{
        dispatch(startGetResults());
        const searchResult = await getSearch(input);
        dispatch(searchSuccess(searchResult));
    } catch(error) {
        console.log(error)
        dispatch(searchError());
    }
}

