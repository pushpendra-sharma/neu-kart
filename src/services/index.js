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

const addToCart = (userId, productId, token) =>
  axios.post(
    `https://neukart-api.onrender.com/cart/add/${userId}/${productId}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );

const removeFromCart = (userId, productId, token) =>
  axios.delete(
    `https://neukart-api.onrender.com/cart/remove/${userId}/${productId}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

const getCartItems = (userId, token) =>
  axios.get(`https://neukart-api.onrender.com/cart/${userId}`, {
    headers: {
      Authorization: token,
    },
  });

const addToWishlist = (userId, productId, token) =>
  axios.post(
    `https://neukart-api.onrender.com/wishlist/add/${userId}/${productId}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );

const removeFromWishlist = (userId, productId, token) =>
  axios.delete(
    `https://neukart-api.onrender.com/wishlist/remove/${userId}/${productId}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

const getWishlistItems = (userId, token) =>
  axios.get(`https://neukart-api.onrender.com/wishlist/${userId}`, {
    headers: {
      Authorization: token,
    },
  });

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
