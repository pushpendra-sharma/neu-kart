import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addToWishlist,
  getWishlistItems,
  removeFromWishlist,
} from '../../services';

const wishlistState = {
  items: [],
  loading: false,
  error: '',
};

export const getWishlistThunk = createAsyncThunk(
  `wishlist/getItems`,
  async () => {
    try {
      const id = sessionStorage.getItem('loginUserId');
      const resp = await getWishlistItems(id);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const addToWishlistThunk = createAsyncThunk(
  `wishlist/addItem`,
  async pid => {
    try {
      const id = sessionStorage.getItem('loginUserId');
      const res = await addToWishlist(id, pid);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const removeFromWishlistThunk = createAsyncThunk(
  `wishlist/removeItem`,
  async pid => {
    try {
      const id = sessionStorage.getItem('loginUserId');
      const res = await removeFromWishlist(id, pid);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: wishlistState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addToWishlistThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishlistThunk.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.items = action.payload.items;
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
        state.loading = false;
      })
      .addCase(addToWishlistThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFromWishlistThunk.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeFromWishlistThunk.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.items = action.payload.items;
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
        state.loading = false;
      })
      .addCase(removeFromWishlistThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getWishlistThunk.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getWishlistThunk.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.items = action.payload.items;
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
        state.loading = false;
      })
      .addCase(getWishlistThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addToWishlistAction,
  removeFromWishlistAction,
  clearWishlistAction,
} = wishListSlice.actions;

export default wishListSlice.reducer;
