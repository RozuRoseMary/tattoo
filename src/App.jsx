import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Chat from "./components/pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="chat" element={<Chat />}></Route>
        <Route index element={<Home />}></Route>
        {/* <Route index element={<Navigate to="home" />}></Route> */}
      </Route>
      <Route path="*" element={<Navigate to="home" />}></Route>
    </Routes>
  );
}

export default App;
