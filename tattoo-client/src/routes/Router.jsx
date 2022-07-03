import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import ForgetPass from "../components/pages/ForgetPass";
import ResetPass from "../components/pages/ResetPass";
import Profile from "../components/pages/Profile";
import Home from "../components/pages/Home";
import Chat from "../components/pages/Chat";
import Product from "../components/products/Product";
import Checkout from "../components/Checkout";
import ConfirmPayment from "../components/ConfirmPayment";
import Paid from "../components/Paid";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="forget_password" element={<ForgetPass />}></Route>
      <Route path="reset_password" element={<ResetPass />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="chat" element={<Chat />}></Route>
      <Route path="product" element={<Product />}></Route>
      {/* checkout ? ..... */}
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="confirm_payment" element={<ConfirmPayment />}></Route>
      <Route path="paid" element={<Paid />}></Route>
      {/* <Route index element={<Home />}></Route> */}
      <Route path="*" element={<Navigate to="home" />}></Route>
    </Routes>
  );
}

export default Router;
