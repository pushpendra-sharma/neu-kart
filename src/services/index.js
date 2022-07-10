import axios from 'axios';

const getAllProducts = () => axios.get('http://localhost:4000/api/products/');

export { getAllProducts };
