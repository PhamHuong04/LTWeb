import axios from "axios";

const API = axios.create({
  method: "get",
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

export default API;
