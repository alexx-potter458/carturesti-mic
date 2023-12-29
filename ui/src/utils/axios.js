import axios from "axios";

const axiosApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "http://user-management-api:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosApi;
