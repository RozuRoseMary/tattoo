import React, { createContext, useContext } from "react";
import { getProductByUserIdApi } from "../api/product";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const fetchProduct = async () => {
    try {
      const res = await getProductByUserIdApi(4);
      console.log(res.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  // fetchProduct();

  return (
    <ProductContext.Provider value={{ fetchProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export { ProductContext, ProductContextProvider, useProduct };
