import axios from 'axios';

const getAllProducts = () => axios.get('http://localhost:4000/api/products/');

const login= loginData =>
  axios.post('http://localhost:4000/api/users/login', loginData);

export { getAllProducts, login };
