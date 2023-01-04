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
    isLoading: true,
    error: false,
    showingBookmarks: false
}


const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: initialState,
    reducers: {
        startGetBookmarks: (state) => {
            state.isLoading = true;
            state.error = false;
            state.showingBookmarks = false;
        },
        successGetBookmarks: (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.bookmarks[action.payload.index].data = action.payload.data;
        },
        setShowingBookmarks: (state) => {
            state.showingBookmarks = true;  
        },
        failGetBookmarks: (state) => {
            state.isLoading = false;
            state.error = true;
            state.showingBookmarks = false;
        },
        addBookmark: (state, action) => {
            return {...state, bookmarks: [...state.bookmarks, action.payload] }
        },
        removeBookmark: (state,action) => {
            return {...state, bookmarks: state.bookmarks.filter(element => element.id !== action.payload.id)}
        }
    }
});

export default bookmarksSlice.reducer;
export const {
    startGetBookmarks,
    successGetBookmarks,
    setShowingBookmarks,
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
        dispatch(setShowingBookmarks());
    } catch(error) {
        console.log(error);
        dispatch(failGetBookmarks());
    }
};