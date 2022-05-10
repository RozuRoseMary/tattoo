import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Chat from "./components/pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="chat" element={<Chat />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
