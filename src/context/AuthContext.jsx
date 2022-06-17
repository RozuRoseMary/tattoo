import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../api/auth";
import { getMeApi } from "../api/user";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/LocalStorage";
import { useError } from "./ErrorContext";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const { setError } = useError();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await getMeApi();
          setUser(resMe.data.user);
        }
      } catch (err) {
        removeAccessToken();
        navigate("/home");
      }
    };
    fetchMe();
  }, []);

  const register = async (input) => {
    try {
      const res = await registerApi(input);
      setAccessToken(res.data.token);
      const resMe = await getMeApi();
      setUser(resMe.data.user);
      navigate("/home");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const login = async (input) => {
    try {
      const res = await loginApi(input);
      setAccessToken(res.data.token);
      const resMe = await getMeApi();
      setUser(resMe.data.user);
      navigate("/home");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export { AuthContext, AuthContextProvider, useAuth };
