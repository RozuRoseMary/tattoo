import axios from "../config/axios";

export const registerApi = (newUserData) =>
  axios.post("/auth/register", newUserData);

export const loginApi = (input) => axios.post("/auth/login", input);
