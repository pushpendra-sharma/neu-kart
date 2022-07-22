import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, signUp } from '../../services';

const initialUserState = {
  loading: false,
  userDetails: {
    name: '',
    address: '',
    mobileNumber: '',
    emailId: '',
  },
  isLoggedIn: false,
  error: '',
};

export const loginUser = createAsyncThunk(
  `user/loginAction`,
  async loginData => {
    try {
      const resp = await login(loginData);
      return resp.data;
    } catch (error) {
      return error.response.message;
    }
  }
);

export const signUpUser = createAsyncThunk(
  `user/signUpAction`,
  async signUpData => {
    try {
      const resp = await signUp(signUpData);
      return resp.data;
    } catch (error) {
      return error.response.message;
    }
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUpUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
