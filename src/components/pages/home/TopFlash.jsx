import React, { useEffect, useState } from "react";
import { useLoading } from "../../../context/LoadingContext";
import { useProduct } from "../../../context/ProductContext";
import FlashCard from "../../ui/FlashCard";
import Spinner from "../../ui/Spinner";
import ViewAll from "./ViewAll";

function TopFlash() {
  const { loading, setLoading } = useLoading();
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
        className="cards-cont grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  mx-5 breakpoints"
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
