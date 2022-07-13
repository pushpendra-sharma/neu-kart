import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../../services';

const initialProductState = {
  loading: false,
  items: [],
  error: '',
  sortBy: '',
  filterBy: {
    category: ['Mobile', 'Laptop'],
    brand: [],
    availability: '',
    price: '',
    rating: [],
    discount: [],
  },
  filterdItems: [],
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
  reducers: {
    filterByCategory: (state, action) => {
      state.filterBy.category = action.payload;
    },
    filterByBrand: (state, action) => {
      state.filterBy.brand = action.payload;
    },
    filterByAvailability: (state, action) => {
      state.filterBy.availability = action.payload;
    },
    filterByPrice: (state, action) => {
      state.filterBy.price = action.payload;
    },
    filterByRating: (state, action) => {
      state.filterBy.rating = action.payload;
    },
    filterByDiscount: (state, action) => {
      state.filterBy.discount = action.payload;
    },
    sortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
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

export const {
  filterByCategory,
  filterByBrand,
  filterByAvailability,
  filterByPrice,
  filterByRating,
  filterByDiscount,
  sortBy,
} = productSlice.actions;

export default productSlice.reducer;
