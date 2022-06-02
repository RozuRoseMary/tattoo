import axios from "../config/axios";
import { setAccessToken } from "../services/LocalStorage";

export const registerApi = (newUserData) =>
  axios.post("/auth/register", newUserData);

export const loginApi = (input) => axios.post("/auth/login", input);
