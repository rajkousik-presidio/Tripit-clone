import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://c1d7-2406-7400-bb-705f-1d6c-8f37-79bb-3ff1.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

export default axiosInstance;
