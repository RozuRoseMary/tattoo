import React from "react";
import { Link } from "react-router-dom";
import UpdateTransaction from "./UpdateTransaction";

function TableStatement({ header, body, paidReceived }) {
  return (
    <div className="flex flex-col text-gray">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              {/* //* HEADER */}
              <thead className=" border-b ">
                <tr>
                  {header.map((el) => (
                    <th
                      scope="col"
                      className="text-sm font-medium text-dark-mint px-6 py-4 text-left"
                    >
                      {el}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* //* BODY */}
              <tbody>
                {body?.map((el, idx) => {
                  return (
                    <tr
                      key={el.id}
                      className={
                        idx % 2 !== 0 ? "text-mint border-r" : "  text-gray"
                      }
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                        {el.id}
                      </td>
                      {paidReceived === "PAID" ? (
                        <>
                          <Link to={`/profile/` + el?.sellerId}>
                            <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                              {el.Product.Tattooist?.displayName ||
                                el.Product.Tattooer?.displayName}
                            </td>
                          </Link>

                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            {el.Product.Tattooist?.firstName ||
                              el.Product.Tattooer?.firstName}
                          </td>
                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            {el.Product.Tattooist?.lastName ||
                              el.Product.Tattooer?.lastName}
                          </td>
                        </>
                      ) : (
                        <>
                          <Link to={`/profile/` + el?.clientId}>
                            <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                              {el.ClientTransaction?.displayName}
                            </td>
                          </Link>
                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            {el.ClientTransaction?.firstName}
                          </td>
                          <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            {el.ClientTransaction?.lastName}
                          </td>
                        </>
                      )}

                      <Link to={`/product/` + el?.productId}>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          {el.Product.title}
                        </td>
                      </Link>

                      <td
                        className={`text-sm font-light px-6 py-4 whitespace-nowrap  ${
                          el.status === "PENDING" && " text-pink"
                        }`}
                      >
                        {el.status}
                      </td>

                      <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                        {el.Product.price}
                      </td>
                      {paidReceived === "RECEIVED" && (
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                          <UpdateTransaction el={el}></UpdateTransaction>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableStatement;
