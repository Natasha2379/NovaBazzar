import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    user_id: null,
    otp: 0,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        },
        addUserID: (state, action) => {
            state.user_id = action.payload;
        },
        saveOTP: (state, action) => {
            state.otp = action.payload;
        },
        logout: (state) => {
            state.userData = null;
        },
    },
});

export const { addUser, addUserID, saveOTP, logout } = userSlice.actions;

export const selectUserData = (state) => state?.user?.userData;
export const selectUser_ID = (state) => state?.user?.user_id;
export const selectOTP = (state) => state?.user?.otp;

export default userSlice.reducer;
