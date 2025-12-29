import axios from "axios";

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000
});

http.interceptors.response.use(
    r => r,
    err => {
        return Promise.reject(err);
    }
);