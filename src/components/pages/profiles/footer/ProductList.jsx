import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductByUserIdApi } from "../../../../api/product";
import { useProduct } from "../../../../context/ProductContext";
import FlashCard from "../../../ui/FlashCard";
import Spinner from "../../../ui/Spinner";

function ProductList() {
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
        console.log(err);
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
        <div className="flex justify-center mt-14 text-big">
          This user has no product.
        </div>
      )}
    </>
  );
}

export default ProductList;
