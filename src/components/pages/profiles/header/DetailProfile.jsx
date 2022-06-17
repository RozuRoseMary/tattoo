import React from "react";
import { useState } from "react";
import Input from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import { useLoading } from "../../../../context/LoadingContext";
import Spinner from "../../../ui/Spinner";
import { updateProfileApi } from "../../../../api/user";
import { useError } from "../../../../context/ErrorContext";

function DetailProfile({ edit, getUser, setAboutMe }) {
  const { setError } = useError();
  const { loading, setLoading } = useLoading();

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSave = async () => {
    try {
      await updateProfileApi({ firstName, lastName, phoneNumber, email });

      if (firstName || lastName || phoneNumber || email) {
        setLoading(true);
        window.location.reload();
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div>
      <Modal
        id={"profileDetail"}
        btnToggle="save"
        btnStyle={"btn ml-10"}
        btnSize={"w-[30%]"}
        btnTitle={"Profile Detail"}
        title={"Profile Detail"}
        onSave={handleSave}
      >
        <p className="text-pink mb-[1rem]">
          This information will show to your client when client check out your
          product.
        </p>
        <Input
          label={"First Name :"}
          onChange={(e) => setFirstName(e.target.value)}
        >
          {getUser?.firstName}
        </Input>
        <Input
          label={"Last Name :"}
          onChange={(e) => setLastName(e.target.value)}
        >
          {getUser?.lastName}
        </Input>

        {/* // * PHONE NUMBER */}
        <Input
          type="text"
          label={"Phone Number :"}
          onChange={(e) => setPhoneNumber(e.target.value)}
        >
          {getUser?.phoneNumber}
        </Input>
        <p className="text-gray my-[1.5rem]">EX: 0xx-xxx-xxxx</p>

        <Input label={"Email :"} onChange={(e) => setEmail(e.target.value)}>
          {getUser?.email}
        </Input>
      </Modal>
    </div>
  );
}

export default DetailProfile;
