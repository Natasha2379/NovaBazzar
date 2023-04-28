import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    user_id: null,
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
        logout: (state) => {
            state.userData = null;
        },
    },
});

export const { addUser, addUserID, logout } = userSlice.actions;
export const selectUserData = (state) =>
    state.user.userData !== null ? state.user.userData : null;
export const selectUser_ID = (state) => state.user.user_id;

export default userSlice.reducer;
