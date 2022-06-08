import React from "react";
import { useLocation } from "react-router-dom";
import FlashCard from "../../../ui/FlashCard";
import ProductList from "./ProductList";

function ProductProfile() {
  const { pathname } = useLocation();
  const pathSubHeader = pathname.split("/")[3];

  {
    if (pathSubHeader === "products") {
      return <ProductList />;
    }
  }
  // return <></>;
}

export default ProductProfile;
