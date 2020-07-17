import axios from "axios";
window.axios = axios;
export default ({ app, store, redirect }) => {
  axios.defaults.baseURL = "http://127.0.0.1:8000/api";

  let token = sessionStorage.getItem("authToken");
  axios.defaults.headers = {};
  axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers["Accept"] = "application/json";
  axios.defaults.headers["Content-Type"] = "application/json";
  if (token) {
    axios.defaults.headers.authorization = `Bearer ${token}`;
  }
};
