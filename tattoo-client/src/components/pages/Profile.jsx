import React from "react";
import BlackContainer from "../ui/BlackContainer";
import BuyerProfile from "./buyer/BuyerProfile";
import TattooerProfile from "./tattooer/TattooerProfile";
import TattooistProfile from "./tattooist/TattooistProfile";

function Profile() {
  return (
    <>
      <BuyerProfile />

      <hr />

      <TattooerProfile />

      <hr />

      <TattooistProfile />
    </>
  );
}

export default Profile;
