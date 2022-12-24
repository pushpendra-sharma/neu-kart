import axios from 'axios';

let token = sessionStorage.getItem('token');

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
  axios.post(`http://localhost:4000/api/cart/add/${userId}/${productId}`, {
    headers: {
      Authorization: token,
    },
  });

const removeFromCart = (userId, productId) =>
  axios.delete(`http://localhost:4000/api/cart/remove/${userId}/${productId}`, {
    headers: {
      Authorization: token,
    },
  });

const getCartItems = userId =>
  axios.get(`http://localhost:4000/api/cart/${userId}`, {
    headers: {
      Authorization: token,
    },
  });

const addToWishlist = (userId, productId) =>
  axios.post(`http://localhost:4000/api/wishlist/add/${userId}/${productId}`, {
    headers: {
      Authorization: token,
    },
  });

const removeFromWishlist = (userId, productId) =>
  axios.delete(
    `http://localhost:4000/api/wishlist/remove/${userId}/${productId}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

const getWishlistItems = userId =>
  axios.get(`http://localhost:4000/api/wishlist/${userId}`, {
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
