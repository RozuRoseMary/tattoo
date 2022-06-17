import React, { createContext, useContext, useState } from "react";
import { createTransactionApi, updateTransactionApi } from "../api/transaction";
import { useError } from "./ErrorContext";

const TransactionContext = createContext();

function TransactionContextProvider({ children }) {
  const { setError } = useError();
  const [statements, setStatements] = useState(null);
  const [statement, setStatement] = useState(null);
  const [payment, setPayment] = useState(null);

  const createTransaction = async (productId, payment) => {
    try {
      await createTransactionApi(productId, payment, updateTransaction);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const updateTransaction = async (input) => {
    try {
      await updateTransactionApi(input);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        statements,
        setStatements,
        statement,
        setStatement,
        payment,
        setPayment,
        createTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

const useTransaction = () => {
  const ctx = useContext(TransactionContext);
  return ctx;
};

export { TransactionContextProvider, TransactionContext, useTransaction };
