import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";

function ForgetPass() {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" my-[100px] px-[50px] py-[30px] bg-black rounded-md shadow-lg shadow-indigo-500/40">
          <div className="flex justify-center">Forget password?</div>

          <Input>Email</Input>

          <div className="flex justify-center">
            <Link to="/reset_password">
              <button className="btn">Send email</button>
            </Link>
          </div>

          <Link to="/login">
            <p className="flex justify-center  text-gray underline hover:text-white ">
              Back to Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
