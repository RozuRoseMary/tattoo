import React from "react";
import { useError } from "../../context/ErrorContext";
import { useLoading } from "../../context/LoadingContext";
import Alert from "./Alert";
import Spinner from "./Spinner";

function Modal({
  children,
  id,
  btnStyle,
  btnSize,
  btnSubmit,
  btnTitle,
  position,
  icon,
  title,
  onSave,
  onCancel,
  btnToggle,
}) {
  const { error, setError } = useError();
  const { loading } = useLoading();

  // if (loading) return <Spinner />;

  return (
    <div>
      <button
        id={id}
        type="button"
        className={
          btnStyle ||
          "my-5 px-6 py-2.5  bg-deep-blue   text-white  font-medium  text-xs leading-tight  uppercase  rounded shadow-md  hover:bg-deeper-blue hover:shadow-lg    focus:shadow-lg focus:outline-none focus:ring-0  active:bg-deeper-blue active:shadow-lg transition duration-150 ease-in-out"
        }
        data-bs-toggle="modal"
        data-bs-target={btnToggle ? "#" + btnToggle : "#exampleModal"}
      >
        <span className={btnSize ? btnSize : " text-[1.2rem]"}>
          {icon && <i className={icon}></i>}
          {btnTitle && <span> {btnTitle}</span>}
        </span>
      </button>

      <div
        className="modal fade fixed mb-5 top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id={btnToggle || "exampleModal"}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-black bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray rounded-t-md">
              {loading && <Spinner />}

              <h5
                className="text-big font-medium leading-normal text-gray"
                id="exampleModalLabel"
              >
                {title}
              </h5>

              <button
                type="button"
                className="text-big btn-close ml-2 box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4 ">{children}</div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray rounded-b-md">
              {error && (
                <Alert
                  title={error}
                  icon=" fa-solid fa-circle-exclamation "
                  onCLick={() => setError(false)}
                />
              )}

              <button
                type="button"
                className="px-6 py-2.5 bg-deep-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-deeper-blue hover:shadow-lg focus:bg-deeper-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-deeper-blue active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
                onClick={onCancel}
              >
                Close
              </button>

              {onSave && (
                <button
                  type="button"
                  className="px-6 py-2.5 bg-pink  text-white  font-medium  text-xs  leading-tight uppercase  rounded  shadow-md hover:bg-dark-pink hover:shadow-lg  focus:bg-dark-pink focus:shadow-lg focus:outline-none focus:ring-0 active:bg-dark-pink active:shadow-lg transition  duration-150  ease-in-out  ml-5"
                  onClick={onSave}
                >
                  {btnToggle || "Save changes"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
