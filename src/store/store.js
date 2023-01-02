import { configureStore } from '@reduxjs/toolkit';

import forecastReducer from './forecastSlice'
import bookmarksReducer from './bookmarksSlice'

export const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    bookmarks: bookmarksReducer
  },
});
