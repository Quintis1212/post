import axios from "axios";
//set base URL for less code ...
const instance = axios.create({
  baseURL: "https://bloggy-api.herokuapp.com",
  headers: { "Content-Type": "application/json" },
});

export default instance;
