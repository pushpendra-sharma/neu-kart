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
      sessionStorage.setItem('loginUserId', resp.data.userId);
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
      sessionStorage.setItem('loginUserId', resp.data.userId);
      return resp.data;
    } catch (error) {
      return error.response.message;
    }
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    signOut: state => {
      state.userDetails = {
        name: '',
        address: '',
        mobileNumber: '',
        emailId: '',
      };
      state.isLoggedIn = false;
      sessionStorage.removeItem('loginUserId', '');
    },
  },
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

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
