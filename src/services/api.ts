import axios from 'axios';

const api = axios.create({
  baseURL: 'https://masterdev1.herokuapp.com/',
});

export default api;
