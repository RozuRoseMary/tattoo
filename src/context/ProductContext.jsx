import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createProductApi,
  deleteProductApi,
  getAllProductApi,
  getAllProductAvailableApi,
  getProductByIdApi,
  getProductByUserIdApi,
  updateProductApi,
} from "../api/product";
import { useError } from "./ErrorContext";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const { setError } = useError();
  const [allProduct, setAllProduct] = useState(null);
  const [allProductAvailable, setAllProductAvailable] = useState(null);
  const [flashProduct, setFlashProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProductApi();
        setAllProduct(res.data.products);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    return fetchProducts;
  }, [flashProduct]);

  useEffect(() => {
    const fetchProductAvailable = async () => {
      try {
        const res = await getAllProductAvailableApi();
        setAllProductAvailable(res.data.products);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    return fetchProductAvailable;
  }, [flashProduct]);

  const fetchProduct = async (id) => {
    try {
      const res = await getProductByIdApi(id);
      setFlashProduct(res.data.product);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const createProduct = async (input) => {
    try {
      await createProductApi(input);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const updateProduct = async (productId, input) => {
    try {
      await updateProductApi(productId, input);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await deleteProductApi(productId);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        allProduct,
        allProductAvailable,
        flashProduct,
        setFlashProduct,
        fetchProduct,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export { ProductContext, ProductContextProvider, useProduct };
