import React from "react";
import { useLocation } from "react-router-dom";
import Booking from "./Booking";
import Location from "./Location";
import ProductList from "./ProductList";
import Statement from "./Statement";

function FooterProfile() {
  const { pathname } = useLocation();
  const pathSubHeader = pathname.split("/")[3];
  {
    switch (pathSubHeader) {
      case "products":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  mx-5 breakpoints">
            <ProductList />
          </div>
        );
        break;
      case "booking":
        return (
          <div className="">
            <Booking />
          </div>
        );
        break;
      case "location":
        return (
          <div className="">
            <Location />
          </div>
        );
        break;
      case "statement":
        return (
          <div className="">
            <Statement />
          </div>
        );
        break;
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  mx-5 breakpoints">
            <ProductList />
          </div>
        );
    }
  }
}

export default FooterProfile;
