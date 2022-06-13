import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import { useProduct } from "../../context/ProductContext";
import InputFile from "../ui/InputFile";
import Modal from "../ui/Modal";

function UpdateProduct() {
  const { flashProduct, updateProduct } = useProduct();
  const { loading, setLoading } = useLoading();
  const { productId } = useParams();
  // const product = allProduct?.find((el) => el.id == productId);

  const [changePrice, setChangePrice] = useState(true);
  const [imageProduct, setImageProduct] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDes, setProductDes] = useState("");

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImageProduct(e.target.files[0]);
    }
  };

  const saveUpdate = async (id, image, title, price, description) => {
    setLoading(true);

    const formData = new FormData();
    formData.set("image", imageProduct);
    formData.append("title", productTitle);
    formData.append("price", productPrice);
    formData.append("description", productDes);

    await updateProduct(+productId, formData);
    window.location.reload();
  };

  const cancelUpdate = () => {};

  return (
    <>
      <div className="flex justify-center align-middle ">
        <Modal
          position="flex justify-end"
          icon="fa-solid fa-pen-to-square"
          title="Edit Product"
          onSave={saveUpdate}
          onCancel={cancelUpdate}
        >
          <div className="">
            <InputFile onChange={(e) => handleImage(e)} src={imageProduct} />

            <div className="flex items-center">
              <label htmlFor="productTitle" className="mr-5">
                Title:
              </label>
              <input
                type="text"
                id="productTitle"
                placeholder={flashProduct?.title}
                className="input"
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="productPrice" className="mr-5 w-20 ">
                Price (฿):
              </label>

              <span
                className="text-pink mr-5 cursor-pointer"
                type="btn"
                onClick={() => {
                  setChangePrice(!changePrice);
                  setProductPrice(0);
                }}
              >
                Current Price: THB {flashProduct?.price}
                <i class=" ml-3 fa-solid fa-pen-clip"></i>
              </span>
              <input
                type="number"
                id="productPrice"
                className={
                  changePrice
                    ? "w-50 bg-black placeholder-gray border-solid border border-black rounded p-2 text-black"
                    : "w-50 bg-black placeholder-gray border-solid border border-gray rounded p-2 "
                }
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                min="0"
                disabled={changePrice && "disabled"}
              />

              {/* {changePrice ? (
                <span className="text-gray">
                  Current Price: {flashProduct?.price}
                </span>
              ) : (
                <input
                  type="number"
                  id="productPrice"
                  className="input "
                  value={price}
                  onChange={(e) => setProductPrice(e.target.value)}
                  min="0"
                  disabled={changePrice && "disabled"}
                />
              )}
              <div
                type="button"
                onClick={() => setChangePrice(!changePrice)}
                className={"btn w-[20%] flex justify-items-end"}
              >
                Change Price
              </div> */}
            </div>

            <div className="flex my-5">
              <label htmlFor="productDes" className="mr-5">
                Description:
              </label>
              <textarea
                id="productDes"
                className="bg-black text-gray border-gray rounded p-2 "
                cols="62"
                rows="10"
                placeholder={flashProduct?.description}
                value={productDes}
                onChange={(e) => setProductDes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default UpdateProduct;
