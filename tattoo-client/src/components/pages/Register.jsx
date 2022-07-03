import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/0needle.png";
import Button from "../ui/Button";
import Input from "../ui/Input";

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

        <div className="flex">
          <div className="">
            <Input>First Name</Input>
            <Input>Last Name</Input>
            <Input>Birth Date</Input>
            <Input>Display Name</Input>
          </div>
          <div className=""></div>

          <div className="mx-12 mt-6 w-[0.1rem] h-[15rem] bg-gray"></div>

          <div className="">
            <Input>Phone Number</Input>
            <Input>Email</Input>
            <Input>Password</Input>
            <Input>Confirm Password</Input>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/login">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
