import { configureStore } from '@reduxjs/toolkit';
import { activeSectionSlice } from './activeSection-slice';

export const store = configureStore({
    reducer: {
        [activeSectionSlice.name]: activeSectionSlice.reducer
    }
});
