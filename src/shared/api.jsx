import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../cookie";

export const api = axios.create({
  // baseURL: "http://3.39.177.14/api/",
  baseURL: "/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = getCookie("token");
  config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});
