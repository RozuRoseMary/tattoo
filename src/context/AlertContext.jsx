import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AlertContext = createContext();

function AlertContextProvider({ children }) {
  const [alertOutOfModal, setAlertOutOfModal] = useState(false);

  return (
    <AlertContext.Provider value={{ alertOutOfModal, setAlertOutOfModal }}>
      {children}
    </AlertContext.Provider>
  );
}

const useAlert = () => {
  const ctx = useContext(AlertContext);
  return ctx;
};

export { AlertContext, AlertContextProvider, useAlert };
