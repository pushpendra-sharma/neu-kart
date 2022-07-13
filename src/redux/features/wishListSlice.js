import { createSlice } from '@reduxjs/toolkit';

const wishlistState = {
  items: [],
};

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: wishlistState,
  reducers: {
    addToWishlistAction: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromWishlistAction: (state, action) => {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addToWishlistAction, removeFromWishlistAction } =
  wishListSlice.actions;

export default wishListSlice.reducer;
