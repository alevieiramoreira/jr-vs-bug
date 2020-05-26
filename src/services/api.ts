import axios from 'axios';

// const token = localStorage.getItem('@JrVsBug:token');

const api = axios.create({
  baseURL: 'https://masterdev1.herokuapp.com/',
  headers: {
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXN0ZXJkZXYiLCJzdWIiOiJnYW1lLzExIiwiaWQiOjExLCJleHAiOjE1OTA1MzgyNTl9.8bHSorkcIuI8f_8zNZBFSL_NcTScE_fWb-QOr6NIaV4',
  },

});

export default api;
