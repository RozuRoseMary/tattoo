import React from "react";
import Input from "../ui/Input";

function Login() {
  return (
    <div className="flex justify-center">
      Login
      <div className=" my-[50px] bg-black rounded-md w-48 h-48 ">
        <Input>Email</Input>
      </div>
    </div>
  );
}

export default Login;
