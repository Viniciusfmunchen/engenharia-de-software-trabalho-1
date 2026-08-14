import axios from 'axios';

export const sgpApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
  },
});
