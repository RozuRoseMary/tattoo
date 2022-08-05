import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductByIdApi } from "../../api/product";
import { useError } from "../../context/ErrorContext";
import { useLoading } from "../../context/LoadingContext";

function CheckoutProduct() {
  const { setError } = useError();
  const { setLoading } = useLoading();
  // const { product, setFlashProduct } = useProduct();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await getProductByIdApi(productId);
        setProduct(res.data.product);
      } catch (err) {
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div className="p-10">
      <div className="top">
        <div className="top_left">
          <span className="fa-solid fa-cart-plus mr-3"></span>
          <span>Confirm Your Purchase</span>
          <div className="flex">
            <div className="my-5 rounded-sm bg-white w-64 h-56 overflow-hidden">
              <img src={product?.image} className="" alt="" />
            </div>
            <div className="mx-10 my-5">
              <p className="text-price">THB {product?.price}</p>
              <Link
                to={
                  "/profile/" +
                  (product?.tattooistId || product?.tattooerId) +
                  "/products"
                }
              >
                <p className="text-username">
                  @
                  {product?.tattooistId
                    ? product?.Tattooist?.displayName ||
                      product?.Tattooist?.firstName +
                        " " +
                        product?.Tattooist?.lastName
                    : product?.Tattooer?.displayName ||
                      product?.Tattooer?.firstName +
                        " " +
                        product?.Tattooer?.lastName}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="top_right"></div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
