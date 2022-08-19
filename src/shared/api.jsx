import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = '';
  config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});
