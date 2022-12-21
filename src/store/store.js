import { configureStore } from '@reduxjs/toolkit';

import forecastReducer from './forecastSlice'

export const store = configureStore({
  reducer: {
    forecast: forecastReducer
  },
});
