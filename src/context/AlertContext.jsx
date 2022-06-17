import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AlertContext = createContext();

function AlertContextProvider({ children }) {
  const [alertInModal, setAlertInModal] = useState(null);

  return (
    <AlertContext.Provider value={{ alertInModal, setAlertInModal }}>
      {children}
    </AlertContext.Provider>
  );
}

const useAlert = () => {
  const ctx = useContext(AlertContext);
  return ctx;
};

export { AlertContext, AlertContextProvider, useAlert };
