import { createSlice } from '@reduxjs/toolkit';

const cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    addToCartAction: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCartAction: (state, action) => {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addToCartAction, removeFromCartAction } = cartSlice.actions;

export default cartSlice.reducer;
