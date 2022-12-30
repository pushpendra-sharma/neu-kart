import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, signUp } from '../../services';

const initialUserState = {
  loading: false,
  profile: {
    _id: '',
    name: '',
    mobileNumber: '',
    email: '',
    userId: '',
    gender: '',
    dateOfBirth: '',
    address: '',
  },
  isLoggedIn: false,
  error: '',
  token: '',
};

export const loginUser = createAsyncThunk(
  `user/loginAction`,
  async loginData => {
    try {
      const resp = await login(loginData);
      sessionStorage.setItem('loginUserId', resp.data.user._id);
      sessionStorage.setItem('token', resp.data.token);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const signUpUser = createAsyncThunk(
  `user/signUpAction`,
  async signUpData => {
    try {
      const resp = await signUp(signUpData);
      sessionStorage.setItem('loginUserId', resp.data.user._id);
      sessionStorage.setItem('token', resp.data.token);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    signOut: state => {
      state = initialUserState;
      sessionStorage.clear();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.profile = action.payload.user;
          state.token = action.payload.token;
          state.error = null;
          state.isLoggedIn = true;
        } else {
          state.isLoggedIn = false;
          state.error = action.payload.message;
        }
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(signUpUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.profile = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.error = null;
        } else {
          state.isLoggedIn = false;
          state.error = action.payload.message;
        }
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
