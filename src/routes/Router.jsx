import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/pages/LoginPage";
import Register from "../components/pages/Register";
import ForgetPass from "../components/pages/ForgetPass";
import ResetPass from "../components/pages/ResetPass";
import Home from "../components/pages/HomePage";
import Product from "../components/pages/products/Product";
import Paid from "../components/Paid";
import ProfilePage from "../components/pages/profiles/ProfilePage";
import Checkout from "../components/pages/checkout/Checkout";
import { useAuth } from "../context/AuthContext";

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />}></Route>
      <>
        <Route path="/" element={<Home />}></Route>

        <Route path="profile/:userId" element={<ProfilePage />}>
          <Route path="products" element={<ProfilePage />}></Route>
          <Route path="booking" element={<ProfilePage />}></Route>
          <Route path="location" element={<ProfilePage />}></Route>
          {user && <Route path="statement" element={<ProfilePage />}></Route>}
        </Route>
        <Route path="product/:id" element={<Product />}></Route>

        <Route
          path="product/:productId/checkout"
          element={<Checkout />}
        ></Route>

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
