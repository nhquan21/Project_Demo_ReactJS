import axios, { type AxiosRequestHeaders, type AxiosResponse } from 'axios';
import type { ApiResponse } from '../types/api';
import { getUserStorage } from '../utils/auth';
import { jwtDecode } from 'jwt-decode';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

interface JwtPayload {
  exp: number;
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};
/* ===== Request Interceptor ===== */
axiosClient.interceptors.request.use(
  (config) => {
    const user = getUserStorage();

    if (user) {
      if (isTokenExpired(user.token)) {
        localStorage.removeItem("access_token");
        window.location.href = "/signIn";
        return Promise.reject("Token expired");
      }
      config.headers = config.headers as AxiosRequestHeaders;
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ===== Response Interceptor ===== */
axiosClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      localStorage.removeItem("access_token");
      window.location.href = "/signIn";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
