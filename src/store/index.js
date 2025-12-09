import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from '../store/slices/calandarSlices.js';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});