import axios from "../config/axios";

export const getTransactionByIdApi = (id) =>
  axios.get("/transaction/getOne/" + id);

export const getMyReceivedTransaction = (userId) =>
  axios.get("/transaction/meReceived/" + userId);

export const getMyPaidTransaction = (userId, payment) =>
  axios.get("/transaction/mePaid/" + userId, payment);

export const createTransactionApi = (productId, input) =>
  axios.post("/transaction/" + productId, input);

export const updateTransactionApi = (input) =>
  axios.patch("/transaction/updateTransaction", input);
