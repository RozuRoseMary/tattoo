import React, { useState, useMemo } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Spinner from "../ui/Spinner";
import { useRef } from "react";

// type LatLngLiteral = google.maps.LatLngLiteral;

function GoogleMapContainer() {
  const mapRef = useRef();

  const google = window.google ? window.google : {};

  const myLatLng = { lat: -25.363, lng: 131.044 };

  // console.log(window?.google.maps);
  // console.log(window?.google?.maps?.MapMouseEvent?.latLng);
  // console.log(window?.google?.maps?.MapMouseEvent);
  // console.log(window?.google?.maps?.InfoWindow);

  console.log(google.maps);

  // let infoWindow = new google.maps.InfoWindow({
  //   content: "Click the map to get Lat/Lng!",
  //   position: myLatLng,
  // });

  const [location, setLocation] = useState({
    lat: 10,
    lng: 10,
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  const center = useMemo(() => location, []);
  const options = useMemo(
    () => ({
      mapTypeControl: false,
      clickableIcons: false,
    }),
    []
  );

  if (!isLoaded) return <Spinner />;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
      options={options}
      onClick={(e) => {
        console.log("e.x", e.pixel.x, "e.y", e.pixel.y);
        console.log("e.x", e.wb.x, "e.y", e.wb.y);
        console.log(e);
      }}
    >
      <div className="w-[100%] h-[100vh]"></div>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default GoogleMapContainer;
