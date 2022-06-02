import axios from "../config/axios";

export const getMeApi = () => axios.get("/users/me");
