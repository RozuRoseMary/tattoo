import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { registerApi } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { Form } from "../form/Form";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function RegisterForm() {
  const [role, setRole] = useState("Client");
  const { register } = useAuth();
  const navigate = useNavigate();

  const schema = object({
    firstName: string().required("First name is require."),
    lastName: string().required("Last name is require."),
    displayName: string(),
    phoneNumber: string(),
    email: string().email(),
    username: string().required("Username is require."),
    password: string().required("Password is require."),
    confirmPassword: string().required("Confirm password is require."),
  });

  const lists = [
    { name: "firstName", nameShow: "First Name", type: "text" },
    { name: "lastName", nameShow: "Last Name", type: "text" },
    { name: "phoneNumber", nameShow: "Phone Number", type: "text" },
    { name: "email", nameShow: "Email", type: "text" },
    { name: "username", nameShow: "Username", type: "text" },
    { name: "password", nameShow: "Password", type: "text" },
    { name: "confirmPassword", nameShow: "Confirm Password", type: "text" },
  ];

  const handleRegisterSubmit = ({
    firstName,
    lastName,
    phoneNumber,
    email,
    username,
    password,
    confirmPassword,
  }) => {
    register({
      firstName,
      lastName,
      phoneNumber,
      email,
      username,
      password,
      confirmPassword,
      role,
    });
  };

  return (
    <Form schema={schema}>
      {lists.map((el) => (
        <Input
          key={el.name}
          name={el.name}
          type={el.type}
          nameShow={el.nameShow}
        />
      ))}

      <div className="m-5 text-gray ">
        <label htmlFor="role" className="mr-3">
          Choose a role :
        </label>
        <select
          id="role"
          name="role"
          className="select"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Client">Client</option>
          <option value="Tattooist">Tattooist</option>
          <option value="Tattooer">Tattooer</option>
        </select>
      </div>
      <SubmitButton onClick={handleRegisterSubmit}>Register</SubmitButton>
    </Form>
  );
}

export default RegisterForm;
