import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import Modal from "../ui/Modal";

function UpdateProduct() {
  const { allProduct, updateProduct } = useProduct();
  // const [image, setImage] = useState(null);
  const { pathname } = useLocation();
  const product = allProduct[+pathname.split("/")[2] - 1];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePicture = () => {};

  const saveUpdate = async (productId, { title, description }) => {
    await updateProduct(productId, { title, description });
  };

  const cancelUpdate = () => {};

  return (
    <Modal
      position="flex justify-end"
      icon="fa-solid fa-pen-to-square"
      title="Edit Product"
      onSave={saveUpdate}
      onCancel={cancelUpdate}
    >
      <div className="">
        <input
          type="file"
          id="file"
          className="hidden"
          onChange={(e) => handlePicture(e)}
        />
        <label for="file" className="btn cursor-pointer">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
          Choose File
        </label>

        <div className="">
          <span>Title</span>
          <input
            type="text"
            placeholder={product.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="">
          <span>More Detail</span>
          <textarea
            className="input-textarea block"
            placeholder={
              product.description || "This user does not have contain yet."
            }
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
    </Modal>
  );
}

export default UpdateProduct;
