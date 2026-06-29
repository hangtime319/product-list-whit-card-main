import React from "react";
import { getImageUrl } from "../../utils/imageAssets";

const OrderSummaryItem = ({ item }) => {
  const itemTotal = item.price * item.quantity;
  const thumbnailUrl = getImageUrl(item.image.thumbnail);
  return (
    <li className="flex items-center justify-between border-b border-(--color-rose-100) py-4">
      <div className="flex items-center gap-4">
        <img className="rounded-lg object-cover size-12" src={thumbnailUrl} alt={item.name} />
        <div>
          <h4 className="text-sm font-semibold text-orange-950 truncate">{item.name}</h4>
          <div className="flex gap-2 mt-2">
            <span className="text-sm text-(--color-red) font-bold">{item.quantity}x</span>
            <span className="text-(--color-rose-500)">@ ${item.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <span className="text-sm text-orange-950 font-semibold">${itemTotal.toFixed(2)}</span>
    </li>
  );
};

export default OrderSummaryItem;
