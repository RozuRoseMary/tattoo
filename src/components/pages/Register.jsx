import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../auth/RegisterForm";
import logo from "../imgs/0needle.png";

function Register() {
  return (
    <div className="flex justify-center">
      <div className=" my-[100px] px-[50px] py-[30px] bg-black rounded-md shadow-lg shadow-indigo-500/40">
        <Link to="/home">
          <img src={logo} alt="" className="w-[3.5rem] m-[auto]" />
        </Link>

        <div className="mt-5 flex justify-center flex-wrap ">
          Create Account
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
