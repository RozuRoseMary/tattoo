import axios from "../config/axios";

export const getAllProductApi = () => axios.get("/products/getAllProduct");

export const getAllProductAvailableApi = () =>
  axios.get("/products/getAllProductAvailable");

export const getProductByUserIdApi = (userId) =>
  axios.get("/products/" + userId);

export const getProductByIdApi = (productId) =>
  axios.get("/products/oneProduct/" + productId);

export const createProductApi = (input) => axios.post("/products", input);

export const updateProductApi = (productId, input) =>
  axios.patch("/products/" + productId, input);

export const deleteProductApi = (productId) =>
  axios.delete("/products/" + productId);
