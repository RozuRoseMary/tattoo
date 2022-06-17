import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProduct } from "../../../context/ProductContext";
import { useLoading } from "../../../context/LoadingContext";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import { useError } from "../../../context/ErrorContext";

function DeleteProduct() {
  const { setError } = useError();
  const { loading, setLoading } = useLoading();
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const productId = +pathname.split("/")[2];

  const handleCancel = () => {};

  const handleDelete = async () => {
    try {
      window.location.reload();
      setLoading(true);
      await deleteProduct(productId);
      handleCancel();
      navigate("/home");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <Modal
      icon="fa-solid fa-trash-can"
      btnTitle="DELETE ITEM"
      title="Delete Item"
      onSave={handleDelete}
      onCancel={handleCancel}
      id="DeleteToggle"
      btnStyle="px-6 py-2.5  text-white  font-medium  text-xs leading-tight  uppercase  rounded shadow-md  hover:bg-deeper-blue hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-red hover:bg-dark-red focus:bg-dark-red focus:bg-dark-red"
      btnToggle="delete"
    >
      Are you sure you want to delete this item?
    </Modal>
  );
}

export default DeleteProduct;
