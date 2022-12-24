import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, getCartItems, removeFromCart } from '../../services';

const cartState = {
  items: [],
  loading: false,
  error: '',
};

export const getCart = createAsyncThunk(`cart/getItems`, async () => {
  try {
    const id = sessionStorage.getItem('loginUserId');
    const resp = await getCartItems(id);
    return resp.data;
  } catch (error) {
    return error.response.data;
  }
});

export const addToCartThunk = createAsyncThunk(`cart/addItem`, async pid => {
  try {
    const id = sessionStorage.getItem('loginUserId');
    const resp = await addToCart(id, pid);
    return resp.data;
  } catch (error) {
    return error.response.data;
  }
});

export const removeFromCartThunk = createAsyncThunk(
  `cart/removeItem`,
  async pid => {
    try {
      const id = sessionStorage.getItem('loginUserId');
      const resp = await removeFromCart(id, pid);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder
      .addCase(getCart.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.items = action.payload.items;
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
        state.loading = false;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToCartThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.items = action.payload.items;
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
        state.loading = false;
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFromCartThunk.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeFromCartThunk.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.items = action.payload.items;
          state.error = null;
        } else {
          state.error = action.payload.message;
        }
        state.loading = false;
      })
      .addCase(removeFromCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToCartAction, removeFromCartAction, clearCartAction } =
  cartSlice.actions;

export default cartSlice.reducer;
