import { useNavigate } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";
import { useDispatch } from "react-redux";
import { orderActions } from "../redux/store";

import React from "react";

const OrderCard = ({ item }) => {
  const { cancelOrder } = orderActions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToPreviewBook = (id) => {
    navigate(`/preview/${id}`);
  };

  const handleCancelOrder = (id) => {
    dispatch(cancelOrder(id));
  };

  return (
    <div className=" text-white p-6  w-[600px] bg-slate-100 dark:bg-[#1f1b24] dark:hover:bg-[#121015] rounded-2xl hover:shadow-lg">
      <div className="text-lg">
        <span className="font-bold">Comanda numărul:</span> {item.id}
      </div>
      <div className="text-md my-2 bg-[#2a2a2a] p-4 rounded-2xl">
        Adresa: {item.address.addressLine}, {item.address.city},{" "}
        {item.address.county}, {item.address.country}
      </div>
      <div className="text-lg mt-4 font-bold">Listă cărți:</div>
      {item.orderProducts.map((product) => {
        return (
          <div
            key={product.id}
            onClick={() => goToPreviewBook(product.bookId)}
            className="text-md hover:bg-black my-2 bg-slate-800 p-4 rounded-2xl flex flex-row justify-between items-center"
          >
            <div>Book: {product.bookId}</div>
            <div className="text-xs">Quantity: {product.quantity}</div>
          </div>
        );
      })}

      <div className="mt-8 flex flx-row justify-between items-center">
        <div className="text-md my-2 bg-[#2a2a2a] p-4 rounded-2xl w-fit">
          Total: {item.total} lei
        </div>
        <div className="flex flex-row gap-2 items-center justify-start">
          {item.status === "New" && (
            <ActionButton
              onAction={() => handleCancelOrder(item.id)}
              text={"🗑️"}
            />
          )}
          <div className="text-md my-2 bg-[#2a2a2a] p-4 rounded-2xl w-fit">
            Status: {item.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
