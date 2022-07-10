import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../../services';

const initialProductState = {
  loading: false,
  items: [],
  error: '',
};

export const fetchProducts = createAsyncThunk(
  `products/fetchItems`,
  async () => {
    try {
      const resp = await getAllProducts();
      return resp.data;
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
