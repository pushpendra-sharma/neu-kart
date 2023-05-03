import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../services';

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: {},
  data: {},
};

export const fetchQueryResult = createAsyncThunk(
  `search/query`,
  async query => {
    try {
      const response = await instance.get(`/search?searchTerm=${query}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clear: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchQueryResult.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchQueryResult.fulfilled, (state, action) => {
        const { query, suggestions } = action.payload;
        state.data[query] = suggestions;
        state.isLoading = false;
        state.isSuccess = true;
        state.error = false;
      })
      .addCase(fetchQueryResult.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { clear } = searchSlice.actions;

export default searchSlice.reducer;
