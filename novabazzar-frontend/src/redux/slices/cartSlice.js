import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalCost: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload.id);
            state.totalCost += action.payload.price;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item !== action.payload.id,
            );
            state.totalCost -= action.payload.price;
        },
        emptyCart: (state) => {
            state.items = [];
            state.totalCost = 0;
        },
    },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state?.cart?.items;
export const selectCartTotalCost = (state) => state?.cart?.totalCost;

export default cartSlice.reducer;
