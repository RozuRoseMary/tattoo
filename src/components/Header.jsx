import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      {/* uesr */}
      <Link to="/home">HOME</Link>
      <Link to="/chat">CHAT</Link>
    </nav>
  );
}
export default Header;
