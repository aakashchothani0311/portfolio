import { createSlice } from '@reduxjs/toolkit';

export const activeSectionSlice = createSlice({
    name: 'activeSection',
    initialState: 'hero',
    reducers: {
        setActiveSection: (state, action) => {
            return action.payload;
        }
    }
});

export const { setActiveSection } = activeSectionSlice.actions;

export const getActiveSection = (state) => state.activeSection;