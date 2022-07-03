import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/0needle.png";
import Button from "../ui/Button";
import Input from "../ui/Input";

function Login() {
  return (
    <div className="flex justify-center">
      <div className=" my-[100px] px-[50px] py-[30px] bg-black rounded-md shadow-lg shadow-indigo-500/40">
        <Link to="/home">
          <img src={logo} alt="" className="w-[3.5rem] m-[auto]" />
        </Link>

        <Input>Email</Input>
        <Input>Password</Input>

        <Link to="/forget_password">
          <p className="mr-3 flex justify-end text-[0.75rem] text-gray underline hover:text-white">
            Forget Password
          </p>
        </Link>

        <div className="flex justify-center">
          <Link to="/home">
            <Button>Log in</Button>
          </Link>
        </div>

        <Link to="/register">
          <p className="flex justify-center  text-gray underline hover:text-white ">
            Register
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
