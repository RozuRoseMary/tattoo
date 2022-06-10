import React, { useEffect, useState } from "react";
import { useProduct } from "../../../context/ProductContext";
import FlashCard from "../../ui/FlashCard";
import Spinner from "../../ui/Spinner";
import ViewAll from "./ViewAll";

function TopFlash() {
  const [loading, setLoading] = useState(false);
  const { allProduct } = useProduct();

  useEffect(() => {
    try {
      setLoading(true);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="py-6 mx-[48px]">
      <ViewAll>Top Flash Tattoo likes</ViewAll>

      <div
        // className="cards-cont flex flex-row justify-between flex-wrap
        className="cards-cont grid grid-cols-4 gap-2 mx-5"
      >
        {allProduct?.map((el) => (
          <FlashCard
            key={el.id}
            id={el.id}
            title={el.title}
            image={el.image}
            price={el.price}
            tattooist={el.Tattooist}
            tattooer={el.Tattooer}
            tattooistId={el.tattooistId}
          />
        ))}
      </div>
    </div>
  );
}

export default TopFlash;
