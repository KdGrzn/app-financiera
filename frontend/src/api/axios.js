import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL || 'https://gestion-financiera-personal-mi90.onrender.com'}/api`,
});

export default api;