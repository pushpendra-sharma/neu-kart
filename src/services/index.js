import axios from 'axios';

const getAllProducts = () =>
  axios.get('https://neukart-api.herokuapp.com/products/');

const addProduct = item =>
  axios.get('https://neukart-api.herokuapp.com/products/addProduct', item);

const getProductDetails = id =>
  axios.get(`https://neukart-api.herokuapp.com/products/${id}`);

const login = loginData =>
  axios.post('https://neukart-api.herokuapp.com/users/login', loginData);

const signUp = data =>
  axios.post('https://neukart-api.herokuapp.com/users/', data);

const addToCart = (userId, productId) =>
  axios.post(
    `https://neukart-api.herokuapp.com/cart/add/${userId}/${productId}`
  );

const removeFromCart = (userId, productId) =>
  axios.delete(
    `https://neukart-api.herokuapp.com/cart/remove/${userId}/${productId}`
  );

const getCartItems = userId =>
  axios.get(`https://neukart-api.herokuapp.com/cart/${userId}`);

const addToWishlist = (userId, productId) =>
  axios.post(
    `https://neukart-api.herokuapp.com/wishlist/add/${userId}/${productId}`
  );

const removeFromWishlist = (userId, productId) =>
  axios.delete(
    `https://neukart-api.herokuapp.com/wishlist/remove/${userId}/${productId}`
  );

const getWishlistItems = userId =>
  axios.get(`https://neukart-api.herokuapp.com/wishlist/${userId}`);

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
