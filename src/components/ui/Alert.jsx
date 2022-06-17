import React from "react";

function Alert({ icon, title, styleHeader, onCLick }) {
  return (
    <div class="flex space-x-2 justify-center fixed right-10 bottom-10 z-50">
      <div
        class="bg-red shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
        id="static-example"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-mdb-autohide="false"
      >
        <div class=" bg-red flex justify-between items-center py-2 px-3 bg-clip-padding border border-gray-200 rounded-lg">
          <div className="flex items-center">
            {icon && <p className={icon + "animate-bounce mr-5"}></p>}
            <p class="font-bold text-white">{title}</p>
          </div>
          <div class="flex items-center">
            <button
              type="button"
              class=" btn-close box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
              data-mdb-dismiss="toast"
              aria-label="Close"
              onClick={onCLick}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
