import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/LoginPage";
import Register from "../pages/Register";
import ForgetPass from "../pages/ForgetPass";
import ResetPass from "../pages/ResetPass";
import Home from "../pages/HomePage";
import Product from "../pages/products/Product";
import Paid from "../components/Paid";
import ProfilePage from "../pages/profiles/ProfilePage";
import Checkout from "../pages/checkout/Checkout";
import { useAuth } from "../context/AuthContext";
import ChatPages from "../pages/ChatPages";

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />}></Route>
      <>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<ChatPages />}></Route>
        <Route path="profile/:userId" element={<ProfilePage />}>
          <Route path="products" element={<ProfilePage />} />
          <Route path="location" element={<ProfilePage />}></Route>
          <Route path="statement" element={<ProfilePage />}></Route>
        </Route>
        <Route path="product/:id" element={<Product />}></Route>
        {user && (
          <Route
            path="product/:productId/checkout"
            element={<Checkout />}
          ></Route>
        )}
        <Route path="paid" element={<Paid />}></Route>
      </>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="forget_password" element={<ForgetPass />}></Route>
      <Route path="reset_password" element={<ResetPass />}></Route>
    </Routes>
  );
}

export default Router;
