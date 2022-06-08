import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { useAuth } from "../../context/AuthContext";
import { Form } from "../form/Form";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const schema = object({
    username: string().required("Username is required"),
    password: string().required("Password is required"),
  });

  const handleLoginSubmit = async ({ username, password }) => {
    await login({ username, password });
    navigate("/home");
  };

  return (
    <Form schema={schema}>
      <Input name="username" type="text" nameShow="Username" />
      <Input name="password" type="text" nameShow="Password" />

      <div className="">
        <Link to="/forget_password">
          <p className="mr-1 flex justify-end text-[0.75rem] text-gray underline hover:text-white">
            Forget Password
          </p>
        </Link>
      </div>

      <SubmitButton onClick={handleLoginSubmit}>Login</SubmitButton>
    </Form>
  );
}

export default LoginForm;
