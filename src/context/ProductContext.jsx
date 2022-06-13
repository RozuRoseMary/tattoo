import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createProductApi,
  deleteProductApi,
  getAllProductApi,
  getProductByIdApi,
  updateProductApi,
} from "../api/product";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [allProduct, setAllProduct] = useState(null);
  const [flashProduct, setFlashProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProductApi();
        setAllProduct(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    return fetchProducts;
  }, [flashProduct]);

  const createProduct = async (input) => {
    try {
      await createProductApi(input);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProduct = async (productId, input) => {
    try {
      await updateProductApi(productId, input);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await deleteProductApi(productId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        allProduct,
        flashProduct,
        setFlashProduct,
        // getProductById,
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
