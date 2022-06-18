import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import {
  createPaymentApi,
  getAllPaymentUserIdApi,
  getPaymentSellerIdApi,
  getUserByIdApi,
  updatePaymentPicApi,
} from "../api/user";
import { getAccessToken } from "../services/LocalStorage";
import { useError } from "./ErrorContext";
import { useLoading } from "./LoadingContext";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const { setError } = useError();
  const { setLoading } = useLoading();
  const [userProfile, setUserProfile] = useState(null);
  const [myPayments, setMyPayments] = useState(null);
  const [sellerPayments, setSellerPayments] = useState(null);

  useEffect(() => {
    const getAllPaymentUserId = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          setLoading(true);
          const res = await getAllPaymentUserIdApi();
          setMyPayments(res.data.payments);
        }
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    return getAllPaymentUserId;
  }, []);

  const createPayment = async (input) => {
    try {
      await createPaymentApi(input);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userProfile,
        myPayments,
        sellerPayments,
        setSellerPayments,
        createPayment,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

export { UserContext, UserContextProvider, useUser };
