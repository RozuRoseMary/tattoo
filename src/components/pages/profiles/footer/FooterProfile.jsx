import React from "react";
import { useLocation } from "react-router-dom";
import FlashCard from "../../../ui/FlashCard";
import ProductList from "./ProductList";

function FooterProfile() {
  const { pathname } = useLocation();
  const pathSubHeader = pathname.split("/")[3];

  {
    if (pathSubHeader === "products") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  mx-5 breakpoints">
          <ProductList />
        </div>
      );
    }
  }
}

export default FooterProfile;
