import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InputFile from "../../components/ui/InputFile";
import Modal from "../../components/ui/Modal";
import { useAuth } from "../../context/AuthContext";
import { useProduct } from "../../context/ProductContext";
import { useLoading } from "../../context/LoadingContext";
import Spinner from "../../components/ui/Spinner";

function AddItem() {
  const { user } = useAuth();
  const { createProduct } = useProduct();
  const { loading, setLoading } = useLoading();
  const { userId } = useParams();
  const isUserLogin = user.id == userId;

  const [imageProduct, setImageProduct] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDes, setProductDes] = useState("");

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImageProduct(e.target.files[0]);
    }
  };

  const handleCancel = () => {
    setImageProduct(null);
    setProductTitle("");
    setProductPrice(0);
    setProductDes("");
  };

  const handleAddItem = async ({ image, title, price, description }) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", imageProduct);
      formData.append("title", productTitle);
      formData.append("price", productPrice);
      formData.append("description", productDes);

      await createProduct(formData);

      if (
        !formData.get("image") &&
        formData.get("title") &&
        formData.get("price") !== 0
      ) {
        handleCancel();
      }

      window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="flex justify-center align-middle ">
      {isUserLogin && (
        <Modal
          id="add-item"
          btnStyle={" btn-as-text "}
          btnSize="text-1rem"
          icon="fa-solid fa-circle-plus"
          title="Add Item"
          onSave={handleAddItem}
          onCancel={handleCancel}
        >
          <InputFile onChange={(e) => handleImage(e)} src={imageProduct} />

          <div className="flex items-center">
            <label htmlFor="productTitle" className="mr-5">
              Title:
            </label>
            <input
              type="text"
              id="productTitle"
              placeholder="Title"
              className="input"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="productPrice" className="mr-5 w-20 ">
              Price (฿):
            </label>
            <input
              type="number"
              id="productPrice"
              className="input"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              min="0"
            />
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
              placeholder="Description"
              onChange={(e) => setProductDes(e.target.value)}
            ></textarea>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default AddItem;
