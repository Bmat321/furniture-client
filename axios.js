import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://furniture-gpsc.onrender.com/api",
  withCredentials: true,
});
