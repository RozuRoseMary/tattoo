import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BlackContainer from "../ui/BlackContainer";
import productImg from "../imgs/phoenix.jpg";
import { useProduct } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import Spinner from "../ui/Spinner";
import Modal from "../ui/Modal";
import UpdateProduct from "./UpdateProduct";

function Product() {
  const { user } = useAuth();
  const { allProduct } = useProduct();
  const { pathname } = useLocation();
  const product = allProduct[+pathname?.split("/")[2] - 1];
  const [loading, setLoading] = useState(false);
  const [sellerEdit, setSellerEdit] = useState(false);

  const {
    id,
    title,
    image,
    price,
    description,
    like,
    Tattooist: tattooist,
    Tattooer: tattooer,
    tattooistId,
    tattooerId,
  } = product;

  useEffect(() => {
    try {
      setLoading(true);
      if (user.id === tattooistId || user.id === tattooerId) {
        setSellerEdit(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [pathname]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="py-[50px] h-16 text-center">
        {sellerEdit && <UpdateProduct />}
      </div>
      <div className="flex justify-center">
        <div className="my-[50px] px-[50px] py-14 bg-black rounded-md shadow-lg ">
          <div className="max-w-[500px]">
            <div className="top flex">
              <img src={image} alt="" className="w-[20rem] mr-10" />

              <div className="product-detail">
                <p className="text-big">{title}</p>
                <p className="text-price text-big my-5">
                  THB
                  {price}
                </p>
                <Link
                  to={"/profile/" + (tattooistId || tattooerId) + "/products"}
                  className="text-username my-5 block"
                >
                  @
                  {tattooistId
                    ? tattooist?.displayName ||
                      tattooist?.firstName + " " + tattooist?.lastName
                    : tattooer?.displayName ||
                      tattooer?.firstName + " " + tattooer?.lastName}
                </Link>
                <Link to="/checkout">
                  <i className="my-5 fa-solid fa-cart-plus text-light-pink text-big"></i>
                </Link>
              </div>
            </div>

            <div className="w-[auto] h-[0.08rem] my-5 bg-light-gray"></div>

            <div className="description">
              <p className="text-gray text-big">More detail</p>
              <p className="text-detail">
                {description || "This tattoo does not have contain"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
