import React, { useEffect, useState } from "react";
import FlashCard from "../../ui/FlashCard";
import ViewAll from "./ViewAll";
import productImg from "../../imgs/phoenix.jpg";
import { getAllProductApi } from "../../../api/product";

function NewFlash() {
  const [allNewProduct, setAllNewProduct] = useState([]);

  const flashData = [
    {
      image: productImg,
      tattName: "phoenix",
      price: 13000,
      tattooistName: "fn_blue",
    },
    {
      image: productImg,
      tattName: "phoenix",
      price: 1000,
      tattooistName: "dragon",
    },
    {
      image: productImg,
      tattName: "phoenix",
      price: 2000,
      tattooistName: "iiiii",
    },
  ];

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

        {flashData.map((card) => (
          <FlashCard
            image={card.image}
            tattName={card.tattName}
            price={card.price}
            tattooistName={card.tattooistName}
          />
        ))}
      </div>
    </div>
  );
}

export default NewFlash;
