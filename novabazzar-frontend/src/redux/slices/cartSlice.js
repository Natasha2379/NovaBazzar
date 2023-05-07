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
            state.items.push({
                id: action.payload.id,
                quantity: action.payload.quantity,
                price: action.payload.price,
            });
            state.totalCost += action.payload.price * action.payload.quantity;
        },
        increaseItem: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    state.totalCost -= item.price * item.quantity;

                    state.totalCost +=
                        action.payload.price * action.payload.quantity;
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id,
            );
            state.totalCost -= action.payload.price * action.payload.quantity;
        },
        emptyCart: (state) => {
            state.items = [];
            state.totalCost = 0;
        },
    },
});

export const { addItem, removeItem, emptyCart, increaseItem } =
    cartSlice.actions;

export const selectCartItems = (state) => state?.cart?.items;
export const selectCartTotalCost = (state) => state?.cart?.totalCost;

export default cartSlice.reducer;
