import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductByUserIdApi } from "../../../api/product";
import { useError } from "../../../context/ErrorContext";
import FlashCard from "../../../components/ui/FlashCard";
import Spinner from "../../../components/ui/Spinner";

function ProductList() {
  const { setError } = useError();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getProductByUserIdApi(path);
        setProducts(res.data.products);
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      {products.length > 0 ? (
        products?.map((el) => (
          <FlashCard
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            image={el.image}
            like={el.like}
            tattooist={el.Tattooist}
            tattooer={el.Tattooer}
            tattooistId={el.tattooistId}
          />
        ))
      ) : (
        <></>
        // <div className="flex justify-center mt-14 text-big mr-[50%] ml-[50%]">
        //   No product to display.
        // </div>
      )}
    </>
  );
}

export default ProductList;
