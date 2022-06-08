import axios from "../config/axios";

export const getMeApi = () => axios.get("/users/me");
export const getUserByIdApi = (userId) => axios.get("/users/" + userId);
// export const getUserByIdApi = (userId) => axios.get("/users/" + userId);
