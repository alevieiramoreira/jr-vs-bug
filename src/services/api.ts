import axios from 'axios';

const token = localStorage.getItem('@JrVsBug:token');

const api = axios.create({
  baseURL: 'http://demo0547275.mockable.io/',
  headers: {
    token,
  },
});

export default api;
