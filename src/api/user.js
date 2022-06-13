import axios from "../config/axios";

export const getMeApi = () => axios.get("/users/me");

export const getUserByIdApi = (userId) => axios.get("/users/" + userId);

export const updateProfilePic = (pictureFile) =>
  axios.patch("/users/updateProfilePic", pictureFile);

export const updateProfileApi = (input) =>
  axios.patch("/users/updateProfile", input);

//   export const updateProfilePic = (pictureFile) =>
//   axios.patch("/users/updateProfilePic", pictureFile);
