import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import userReducer from './features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
  },
});
