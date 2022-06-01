import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import ForgetPass from "../components/pages/ForgetPass";
import ResetPass from "../components/pages/ResetPass";
import Profile from "../components/pages/profiles/Profile";
import Home from "../components/pages/Home";
import Product from "../components/products/Product";
import Checkout from "../components/Checkout";
import Payment from "../components/Payment";
import Paid from "../components/Paid";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="forget_password" element={<ForgetPass />}></Route>
      <Route path="reset_password" element={<ResetPass />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="profile" element={<Profile />}>
        <Route path="products" element={<Profile />}></Route>
        <Route path="posts" element={<Profile />}></Route>
        <Route path="booking" element={<Profile />}></Route>
        <Route path="location" element={<Profile />}></Route>
      </Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="product" element={<Product />}></Route>
      {/* checkout ? ..... */}
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="payment" element={<Payment />}></Route>
      <Route path="paid" element={<Paid />}></Route>
      {/* <Route index element={<Home />}></Route> */}
      <Route path="*" element={<Navigate to="home" />}></Route>
    </Routes>
  );
}

export default Router;
