import { createSlice } from "@reduxjs/toolkit";
import { getForecast } from "./api";


const initialState = {
    forecast: [],
    isLoading: false,
    error: false,
    searchTerm: ''
}

const forecastSlice = createSlice({
    name: 'forecast',
    initialState: initialState,
    reducers: {
        startGetForecast: (state) => {
            state.isLoading = true;
            state.error = false;
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
        }
    }
});

export const {
    startGetForecast,
    getForecastSuccess,
    getForecastFail,
    setSearchTerm
} = forecastSlice.actions;

export default forecastSlice.reducer;

// Thunk to fetch Forecast

export const fetchForecast = (query) => async (dispatch) => {
    try{
        dispatch(startGetForecast());
        const forecast = await getForecast(query);
        dispatch(getForecastSuccess(forecast));
    } catch(error) {
        console.log(error);
        dispatch(getForecastFail);
    }
}

