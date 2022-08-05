import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import logo from "../assets/imgs/0needle.png";

function LoginPage() {
  return (
    <div className="flex justify-center h-[100%] ">
      <div className="grid content-between  w-[20rem] h-[32rem] my-5 px-[50px] py-[0.5rem] bg-black rounded-md shadow-lg shadow-indigo-500/40">
        <div className="mt-8">
          <Link to="/home">
            <img src={logo} alt="logo" className="w-[3.5rem] m-[auto]" />
          </Link>
        </div>
        <span className="text-header flex justify-center ">Login</span>

        <LoginForm />

        <div className="flex justify-center mb-8">
          <Link to="/register">
            <p className=" text-gray underline hover:text-white ">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
