import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { getApiUrl } from "./get-urls";

// Define interface for your API error response (adjust according to your backend)
interface ApiErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

// Create configured Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: getApiUrl(),
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true, // If using cookies/auth
  timeout: 10000, // 10 seconds
});

// Request interceptor (add auth token if exists)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Or from your auth context
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor (handle errors globally)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    // Handle specific status codes
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized (redirect to login)
          break;
        case 403:
          // Handle forbidden
          break;
        case 404:
          // Handle not found
          break;
        // Add more cases as needed
      }

      // Extract error message from response
      const errorMessage = error.response.data?.message || "An error occurred";
      console.error(`API Error: ${errorMessage}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("API Error: No response received");
    } else {
      // Something happened in setting up the request
      console.error("API Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
