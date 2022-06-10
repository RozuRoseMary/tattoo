import React from "react";
import { useFormContext } from "react-hook-form";

const SubmitButton = ({ onClick, children, disabled = false, style }) => {
  const { handleSubmit, reset } = useFormContext();
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="col-start-1 col-end-3">
        <button
          type="submit"
          className="btn"
          onClick={handleSubmit((data) => {
            onClick(data, reset);
          })}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
