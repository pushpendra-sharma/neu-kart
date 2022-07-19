import axios from 'axios';

const getAllProducts = () => axios.get('https://neukart-api.herokuapp.com/api/products/');

const login = loginData =>
  axios.post('https://neukart-api.herokuapp.com/api/users/login', loginData);

export { getAllProducts, login };
