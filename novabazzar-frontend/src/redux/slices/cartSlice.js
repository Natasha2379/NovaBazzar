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
            state.items.push(action.payload);
            state.totalCost += action.payload.price;
        },
        removeItem: (state, action) => {
            const removedItem = state.items.find(
                (item) => item.id === action.payload,
            );
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            );
            state.totalCost -= removedItem.price;
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
