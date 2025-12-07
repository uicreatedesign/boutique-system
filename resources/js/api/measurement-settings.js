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

export const getCategories = () => api.get('/measurement-categories');
export const createCategory = (data) => api.post('/measurement-categories', data);
export const updateCategory = (id, data) => api.put(`/measurement-categories/${id}`, data);
export const deleteCategory = (id) => api.delete(`/measurement-categories/${id}`);

export const getFields = (params) => api.get('/measurement-fields', { params });
export const createField = (data) => api.post('/measurement-fields', data);
export const updateField = (id, data) => api.put(`/measurement-fields/${id}`, data);
export const deleteField = (id) => api.delete(`/measurement-fields/${id}`);
