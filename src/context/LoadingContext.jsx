import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LoadingContext = createContext();

function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

const useLoading = () => {
  const ctx = useContext(LoadingContext);
  return ctx;
};

export { LoadingContextProvider, useLoading };
