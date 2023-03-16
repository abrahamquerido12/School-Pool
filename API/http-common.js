import axios from 'axios';

const API = axios.create({
  // baseURL: 'https://54.209.230.242.nip.io',
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default API;
