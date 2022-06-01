import React, { useState } from "react";
import Input from "../ui/Input";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <form>
      <Input value={firstName}>First Name</Input>
      <Input value={lastName}>Last Name</Input>
      <Input value={displayName}>Display Name</Input>
      <Input value={phoneNumber}>Phone Number</Input>
      <Input>Email</Input>
      <Input>Username</Input>
      <Input>Password</Input>
      <Input>Confirm Password</Input>

      <div className="m-5 text-gray ">
        <label for="role" className="mr-3">
          Choose a role :{" "}
        </label>
        <select
          id="role"
          name="role"
          className="bg-black border-solid border border-gray rounded p-2"
        >
          <option value="Client">Client</option>
          <option value="Tattooist">Tattooist</option>
          <option value="Tattooer">Tattooer</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button className="btn" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
