import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserByIdApi } from "../api/user";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userProfile, setUserProfile] = useState(null);

  const getUserById = async (userId) => {
    const res = await getUserByIdApi(userId);
    setUserProfile(res.data.user);
  };

  return (
    <UserContext.Provider value={{ userProfile, getUserById }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

export { UserContext, UserContextProvider, useUser };
