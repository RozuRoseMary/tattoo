import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllProductApi, updateProductApi } from "../api/product";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");

  const [allProduct, setAllProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getAllProductApi();
        setAllProduct(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    return fetchProduct;
  }, []);

  const updateProduct = async (productId, input) => {
    const res = await updateProductApi(productId, input);
    console.log(res.data.product);
  };

  return (
    <ProductContext.Provider
      value={{ allProduct, updateProduct, setDescription }}
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
