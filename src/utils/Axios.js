import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: true,
  responseType: "json",
  timeout: 7000
});

export default client;
