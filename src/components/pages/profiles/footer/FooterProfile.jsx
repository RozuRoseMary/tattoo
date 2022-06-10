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
        <div className="flex justify-between flex-wrap">
          <ProductList />
        </div>
      );
    }
  }
}

export default FooterProfile;
