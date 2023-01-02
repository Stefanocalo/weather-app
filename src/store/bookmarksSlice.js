import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

import { getForecast } from "./api";

const initialState = {
    bookmarks: [
       {
        city: 'Milan',
        id: uuid(),
        data: []
       },
       {
        city: 'Rome',
        id: uuid(),
        data: []
       },
       {
        city: 'Palermo',
        id: uuid(),
        data: []
       },
       {
        city: 'Florence',
        id: uuid(),
        data: []
       },
       {
        city: 'Naples',
        id: uuid(),
        data: []
       },
       {
        city: 'Bologna',
        id: uuid(),
        data: []
       }
    ],
    isLoading: false,
    error: false
}


const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: initialState,
    reducers: {
        startGetBookmarks: (state) => {
            state.isLoading = true;
            state.error = false
        },
        successGetBookmarks: (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.bookmarks[action.payload.index].data = action.payload.data;
        },
        failGetBookmarks: (state) => {
            state.isLoading = false;
            state.error = true;
        },
        addBookmark: (state, action) => {
            return state.bookmarks.push({
                city: action.name,
                id: uuid(),
                forecacst: [action.payload]
            })
        },
        removeBookmark: (state,action) => {
            return state.bookmarks.filter(element => element.id !== action.id);
        }
    }
});

export default bookmarksSlice.reducer;
export const {
    startGetBookmarks,
    successGetBookmarks,
    failGetBookmarks,
    addBookmark,
    removeBookmark
} = bookmarksSlice.actions;

// Thunk to fetch bookmarks initial data 

export const fetchBookmarksData = (query, index) => async (dispatch) => {
    try{
        dispatch(startGetBookmarks());
        const forecast = await getForecast(query);
        dispatch(successGetBookmarks({index: index, data: forecast}));
    } catch(error) {
        console.log(error);
        dispatch(failGetBookmarks());
    }
};