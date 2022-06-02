import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import logo from "../imgs/0needle.png";
import Button from "../ui/Button";
import Input from "../ui/Input";

function LoginPage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[50vw] my-[100px] px-[50px] py-[30px] bg-black rounded-md shadow-lg shadow-indigo-500/40">
        <Link to="/home">
          <img src={logo} alt="" className="w-[3.5rem] m-[auto]" />
        </Link>

        <LoginForm />

        <div className="flex justify-between">
          <Link to="/register">
            <p className=" text-gray underline hover:text-white ">Register</p>
          </Link>
          <Link to="/forget_password">
            <p className=" text-gray underline hover:text-white">
              Forget Password
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
