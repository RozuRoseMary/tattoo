import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import logo from "../imgs/0needle.png";

function LoginPage() {
  return (
    <div className="flex justify-center h-[100vh] ">
      <div className="grid content-between  max-w-[50vw] my-[100px] px-[50px] py-[30px] bg-black rounded-md shadow-lg shadow-indigo-500/40">
        <div className="mt-8">
          <Link to="/home">
            <img src={logo} alt="" className="w-[3.5rem] m-[auto]" />
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
