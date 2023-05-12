import axios from 'axios';

const BASE_URL = 'https://neukart-api.up.railway.app/';

export const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});
