import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import userReducer from './features/authSlice';
import cartReducer from './features/cartSlice';
import wishListReducer from './features/wishListSlice';
import searchReducer from './features/searchSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    search: searchReducer,
  },
});
