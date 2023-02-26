import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false,
        user: {},
        tattoers: [],
        studios: [],
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        updateTattoers: (state,action) => {
            state.tattoers = action.payload;
        },
        updateStudios: (state,action) => {
            state.studios = action.payload;
        },
    }
})

export const {login, logout, updateTattoers, updateStudios} = authSlice.actions;

export default authSlice.reducer;