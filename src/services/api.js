// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://qrcode-vrh2.onrender.com/api', // Your backend API base URL
});

export default api;
