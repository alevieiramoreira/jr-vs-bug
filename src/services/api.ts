import axios from 'axios';

const token = localStorage.getItem('@JrVsBug:token');

const api = axios.create({
  baseURL: 'https://masterdev1.herokuapp.com/',
  headers: {
    token,
  },
});

export default api;
