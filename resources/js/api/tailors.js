import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

api.interceptors.request.use((config) => {
  const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  if (token) {
    config.headers['X-CSRF-TOKEN'] = token;
  }
  return config;
});

export const getTailors = (params) => api.get('/tailors', { params });
export const createTailor = (data) => api.post('/tailors', data);
export const updateTailor = (id, data) => api.put(`/tailors/${id}`, data);
export const deleteTailor = (id) => api.delete(`/tailors/${id}`);
export const getTailor = (id) => api.get(`/tailors/${id}`);
