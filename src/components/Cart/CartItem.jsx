import React from "react";
import ConfirmOrderButton from "./ConfirmOrderButton";
import RemoveItemButton from "./RemoveItemButton";

const CartItem = ({ item, handleRemoveItem }) => {
  const itemTotal = item.price * item.quantity;
  return (
    <li className="py-3 flex items-start gap-y-3 animate-slide-in-right">
      <div className="shrink-0"></div>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-sm font-medium text-orange-950">{item.name}</h4>
            <p className="text-xs text-(--color-rose-500) mt-2">
              <span className="text-(--color-red) font-semibold mr-2">{item.quantity}x</span> @ ${item.price.toFixed(2)} <span className="ml-1 text-(--color-rose-500) font-bold">${itemTotal.toFixed(2)}</span>
            </p>
          </div>
          <div onClick={() => handleRemoveItem(item.name)}>
            <RemoveItemButton />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
