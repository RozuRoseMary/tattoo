import React from "react";
import BlackContainer from "../ui/BlackContainer";
import BuyerProfile from "./buyer/BuyerProfile";
import TattooerProfile from "./tattooer/TattooerProfile";
import TattooistProfile from "./tattooist/TattooistProfile";

function Profile() {
  return (
    <>
      <BlackContainer>
        <BuyerProfile />
      </BlackContainer>
      <hr />
      <BlackContainer>
        <TattooerProfile />
      </BlackContainer>
      <hr />
      <BlackContainer>
        <TattooistProfile />
      </BlackContainer>
    </>
  );
}

export default Profile;
