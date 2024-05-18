import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

// @ts-ignore
instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");

  return config;
});

export default instance;
