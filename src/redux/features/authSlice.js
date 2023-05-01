import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../services';

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
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await instance.post('/users/login', loginData);
      sessionStorage.setItem('loginUserId', response.data.user._id);
      sessionStorage.setItem('token', response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUpUser = createAsyncThunk(
  `user/signUpAction`,
  async (signUpData, { rejectWithValue }) => {
    try {
      const response = await instance.post('/users/login', signUpData);
      sessionStorage.setItem('loginUserId', response.data.user._id);
      sessionStorage.setItem('token', response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
        state.error = action.payload.message;
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
