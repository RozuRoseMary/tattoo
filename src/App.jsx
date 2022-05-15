import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgetPass from "./components/pages/ForgetPass";
import ResetPass from "./components/pages/ResetPass";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import Chat from "./components/pages/Chat";
import Product from "./components/ui/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />}></Route>
        <Route path="forget_password" element={<ForgetPass />}></Route>
        <Route path="reset_password" element={<ResetPass />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="chat" element={<Chat />}></Route>
        <Route path="product" element={<Product />}></Route>

        <Route index element={<Home />}></Route>
        {/* <Route index element={<Navigate to="home" />}></Route> */}
      </Route>
      <Route path="*" element={<Navigate to="home" />}></Route>
    </Routes>
  );
}

export default App;
