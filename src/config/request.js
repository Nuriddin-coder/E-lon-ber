import axios from "axios";
import { loadState } from "../lib/local-storage";
import Cookies from "js-cookie";

const request = axios.create({ baseURL: import.meta.env.VITE_URL });
const token = Cookies.get("token");

const PostData = (config) => {
  setTimeout(() => {
    if (
      config.url !== "/login" &&
      config.url !== "/register" &&
      config.method == "post"
    ) {
      axios
        .post("http://localhost:8080/all", JSON.parse(config.data), {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data);
    }
  }, 500);

  return;
};

request.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    PostData(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return (window.location.pathname = "/");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };
