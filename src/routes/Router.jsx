import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/pages/LoginPage";
import Register from "../components/pages/Register";
import ForgetPass from "../components/pages/ForgetPass";
import ResetPass from "../components/pages/ResetPass";
import Profile from "../components/pages/profiles/Profile";
import Home from "../components/pages/HomePage";
import Product from "../components/products/Product";
import Checkout from "../components/Checkout";
import Payment from "../components/Payment";
import Paid from "../components/Paid";
import { useAuth } from "../context/AuthContext";
import HeaderLayout from "../layouts/HeaderLayout";

function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      {user ? (
        <>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<HeaderLayout />}>
            <Route path="home" element={<Home />}></Route>

            <Route path="profile" element={<Profile />}>
              <Route path="products" element={<Profile />}></Route>
              <Route path="posts" element={<Profile />}></Route>
              <Route path="booking" element={<Profile />}></Route>
              <Route path="location" element={<Profile />}></Route>
            </Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="payment" element={<Payment />}></Route>
            <Route path="paid" element={<Paid />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="home" />}></Route>
        </>
      ) : (
        <>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="forget_password" element={<ForgetPass />}></Route>
          <Route path="reset_password" element={<ResetPass />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="*" element={<Home />}></Route>
        </>
      )}
    </Routes>
  );
}

export default Router;
