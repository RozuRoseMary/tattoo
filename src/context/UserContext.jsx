import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserByIdApi } from "../api/user";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState(null);

  // useEffect(() => {
  //   const fetchUserById = async () => {
  //     try {
  //       const res = await getUserByIdApi();
  //       setUserProfile(res.data.user);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     return fetchUserById;
  //   };
  // }, []);

  const getUserById = async (input) => {
    const res = await getUserByIdApi(input);
    setUserProfile(res.data.user);
  };

  return (
    <UserContext.Provider value={{ userProfile, getUserByIdApi }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

export { UserContext, UserContextProvider, useUser };
