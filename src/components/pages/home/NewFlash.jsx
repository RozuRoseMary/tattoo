import React, { useEffect, useState } from "react";
import FlashCard from "../../ui/FlashCard";
import ViewAll from "./ViewAll";
import { getAllProductApi } from "../../../api/product";

function NewFlash() {
  const [allNewProduct, setAllNewProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProductApi();
    };
  }, []);

  return (
    <div className="bg-black-gray py-6">
      <ViewAll>New Flash Tattoo</ViewAll>

      <div className=" flex flex-wrap justify-around">
        {/* props: image, tattName, price, tattooistName */}
        {/* {flashData.map((card) => (
          <FlashCard
            image={card.image}
            tattName={card.tattName}
            price={card.price}
            tattooistName={card.tattooistName}
          /> */}
        ))}
      </div>
    </div>
  );
}

export default NewFlash;
