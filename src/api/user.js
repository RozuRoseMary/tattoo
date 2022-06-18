import axios from "../config/axios";

export const getMeApi = () => axios.get("/users/me");

export const getUserByIdApi = (userId) => axios.get("/users/" + userId);

export const updateProfilePic = (pictureFile) =>
  axios.patch("/users/updateProfilePic", pictureFile);

export const updateProfileApi = (input) =>
  axios.patch("/users/updateProfile", input);

//  * PAYMENT
export const createPaymentApi = (input) => axios.post("/users/payment", input);

export const deletePaymentApi = (id) => axios.delete("/users/payment/" + id);

export const getAllPaymentUserIdApi = () => axios.get("/users/getMe/payments");

export const getPaymentSellerIdApi = (productId) =>
  axios.get("/users/paymentSellerId/" + productId);

// TODO delete
