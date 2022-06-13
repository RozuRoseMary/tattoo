import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import BlackContainer from "../../ui/BlackContainer";
import { useProduct } from "../../../context/ProductContext";
import { useAuth } from "../../../context/AuthContext";
import { getProductByIdApi } from "../../../api/product";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

function Product() {
  const { user } = useAuth();
  const { flashProduct, setFlashProduct } = useProduct();
  const { pathname } = useLocation();
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await getProductByIdApi(productId);
        setFlashProduct(res.data.product);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  let isUser;
  if (
    user?.id === flashProduct?.tattooerId ||
    user?.id === flashProduct?.tattooistId
  ) {
    isUser = true;
  } else isUser = false;

  if (loading) return <Spinner />;

  return (
    <>
      {
        <>
          <div className="flex justify-center py-[50px] h-16 ">
            {isUser && (
              <div className="flex justify-around  items-center flex-wrap w-9/12">
                <UpdateProduct />
                <DeleteProduct />
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <div className="my-[50px] px-[50px] py-14 bg-black rounded-md shadow-lg ">
              <div className="max-w-[500px]">
                <div className="top flex">
                  <img
                    src={flashProduct?.image}
                    alt=""
                    className="w-[20rem] mr-10"
                  />

                  <div className="product-detail">
                    <p className="text-big">{flashProduct?.title}</p>
                    <p className="text-price text-big my-5">
                      THB
                      {" " + flashProduct?.price}
                    </p>

                    <Link
                      to={
                        "/profile/" +
                        (flashProduct?.tattooistId ||
                          flashProduct?.tattooerId) +
                        "/products"
                      }
                      className="text-username my-5 block"
                    >
                      @
                      {flashProduct?.tattooistId
                        ? flashProduct?.Tattooist?.displayName ||
                          flashProduct?.Tattooist?.firstName +
                            " " +
                            flashProduct?.Tattooist?.lastName
                        : flashProduct?.Tattooer?.displayName ||
                          flashProduct?.Tattooer?.firstName +
                            " " +
                            flashProduct?.Tattooer?.lastName}
                    </Link>
                    {isUser ? (
                      <div></div>
                    ) : (
                      <Link to="/checkout">
                        <i className="my-5 fa-solid fa-cart-plus text-light-pink text-big"></i>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="w-[auto] h-[0.08rem] my-5 bg-light-gray"></div>

                <div className="description">
                  <p className="text-gray text-big">More detail</p>
                  <p className="text-detail">
                    {flashProduct?.description ||
                      "This tattoo does not have any detail."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default Product;
