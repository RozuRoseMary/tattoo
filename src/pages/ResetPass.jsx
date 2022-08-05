import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";

function ResetPass() {
  return (
    <div>
      {" "}
      <div>
        <div className="flex justify-center">
          <div className=" my-[100px] px-[50px] py-[30px] bg-black rounded-md shadow-lg shadow-indigo-500/40">
            <div className="flex justify-center">Forget password?</div>

            <Input>Password</Input>
            <Input>Confirm Password</Input>

            <div className="flex justify-center">
              <Link to="/home">
                <button className="btn">Reset Password</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;