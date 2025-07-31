import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const exist = state.items.find((el) => el.title === item.title);
            if (exist) {
                exist.count += 1;
            } else {
                state.items.push({ ...item, count: 1, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.title !== action.payload);
        },
        incrementQuantity(state, action) {
            const item = state.items.find(i => i.title === action.payload);
            if (item) item.quantity += 1;
        },
        decrementQuantity(state, action) {
            const item = state.items.find(i => i.title === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    decrementQuantity,
    incrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;