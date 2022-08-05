import React from "react";
import GoogleMapContainer from "../../../components/googleMap/GoogleMapContainer";

function Location() {
  return (
    <div className="w-[80vw] h-[100vh] flex flex-col mr-[auto] ml-[auto]">
      <GoogleMapContainer />
    </div>
  );
}

export default Location;
