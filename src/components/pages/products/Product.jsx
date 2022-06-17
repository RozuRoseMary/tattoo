import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../../../context/ProductContext";
import { useAuth } from "../../../context/AuthContext";
import Spinner from "../../ui/Spinner";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";
import TopAlert from "../../ui/Alert";
import { useLoading } from "../../../context/LoadingContext";
import { useError } from "../../../context/ErrorContext";

function Product() {
  const { setError } = useError();
  const { user } = useAuth();
  const { flashProduct, fetchProduct } = useProduct();
  const { id } = useParams();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    try {
      setLoading(true);
      fetchProduct(id);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  let isUser;
  if (
    user?.id === flashProduct?.tattooerId ||
    user?.id === flashProduct?.tattooistId
  ) {
    isUser = true;
  } else isUser = false;

  let available;
  if (flashProduct?.status === "AVAILABLE") {
    available = true;
  } else available = false;

  if (loading) return <Spinner />;

  return (
    <>
      {
        <>
          <div className="flex justify-center pt-[2rem]   h-[20%] ">
            {available || (
              <TopAlert
                icon={"fa-solid fa-sack-xmark "}
                title={"Sold Out"}
                content={"Product was sold out. You can not buy this product."}
                styleHeader={"text-red"}
              />
            )}
            {!available ||
              (isUser && (
                <div className="flex justify-around items-center flex-wrap w-9/12">
                  <UpdateProduct />
                  <DeleteProduct />
                </div>
              ))}
          </div>
          <div className="flex justify-center ">
            <div className="w-[50rem] my-[50px] px-[50px] py-14 bg-black rounded-md shadow-lg ">
              <div className="">
                <div className="top flex">
                  <img
                    src={flashProduct?.image}
                    alt={flashProduct?.title}
                    className={`w-[20rem] mr-10 relative ${
                      available || " blur-sm"
                    } `}
                  />

                  <div className="ml-10">
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
                    {!available || isUser ? (
                      <div></div>
                    ) : (
                      <Link to={"/product/" + flashProduct?.id + "/checkout"}>
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
