import React, { useEffect } from "react";
import { useLoading } from "../../context/LoadingContext";
import { useProduct } from "../../context/ProductContext";
import FlashCard from "../../components/ui/FlashCard";
import Spinner from "../../components/ui/Spinner";

function Products() {
  const { loading, setLoading } = useLoading();
  const { allProductAvailable } = useProduct();

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
      <div className="view-all flex justify-start mx-2">
        <span className="text-big">New Tattoo Flash Available</span>
      </div>

      <div className="cards-cont grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  mx-[0.1rem] breakpoints">
        {allProductAvailable?.map((el) => (
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

export default Products;
