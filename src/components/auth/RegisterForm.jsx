import React, { useState } from "react";
import { object, string } from "yup";
import { useAuth } from "../../context/AuthContext";
import { Form } from "../form/Form";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function RegisterForm() {
  const [role, setRole] = useState("Client");
  const { register } = useAuth();

  const schema = object({
    firstName: string().required("First name is require."),
    lastName: string().required("Last name is require."),
    displayName: string(),
    phoneNumber: string().required("Phone number is require."),
    email: string().email(),
    username: string().required("Username is require."),
    password: string().required("Password is require."),
    confirmPassword: string().required("Confirm password is require."),
  });

  const lists = [
    {
      name: "firstName",
      nameShow: "First Name (require)",
      type: "text",
    },
    {
      name: "lastName",
      nameShow: "Last Name (require)",
      type: "text",
    },
    {
      name: "displayName",
      nameShow: "Display Name",
      type: "text",
    },
    {
      name: "phoneNumber",
      nameShow: "Phone Number (require)",
      type: "text",
    },
    { name: "email", nameShow: "Email", type: "text" },
    {
      name: "username",
      nameShow: "Username (require)",
      type: "text",
    },
    { name: "password", nameShow: "Password (require)", type: "password" },
    {
      name: "confirmPassword",
      nameShow: "Confirm Password (require)",
      type: "password",
    },
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
          require={el.require}
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
