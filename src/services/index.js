import axios from 'axios';

const getAllProducts = () =>
  axios.get('https://neukart-api.onrender.com/products/');

const addProduct = item =>
  axios.post('https://neukart-api.onrender.com/products/addProduct', item);

const getProductDetails = id =>
  axios.get(`https://neukart-api.onrender.com/products/${id}`);

const login = loginData =>
  axios.post('https://neukart-api.onrender.com/users/login', loginData);

const signUp = data =>
  axios.post('https://neukart-api.onrender.com/users/', data);

const addToCart = (userId, productId) =>
  axios.post(
    `https://neukart-api.onrender.com/cart/add/${userId}/${productId}`
  );

const removeFromCart = (userId, productId) =>
  axios.delete(
    `https://neukart-api.onrender.com/cart/remove/${userId}/${productId}`
  );

const getCartItems = userId =>
  axios.get(`https://neukart-api.onrender.com/cart/${userId}`);

const addToWishlist = (userId, productId) =>
  axios.post(
    `https://neukart-api.onrender.com/wishlist/add/${userId}/${productId}`
  );

const removeFromWishlist = (userId, productId) =>
  axios.delete(
    `https://neukart-api.onrender.com/wishlist/remove/${userId}/${productId}`
  );

const getWishlistItems = userId =>
  axios.get(`https://neukart-api.onrender.com/wishlist/${userId}`);

export {
  getAllProducts,
  login,
  signUp,
  addProduct,
  getProductDetails,
  addToCart,
  removeFromCart,
  getCartItems,
  addToWishlist,
  removeFromWishlist,
  getWishlistItems,
};
