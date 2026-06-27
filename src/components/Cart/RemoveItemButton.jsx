import React from "react";
import imgRemoveItem from "../../assets/images/icon-remove-item.svg";

const RemoveItemButton = () => {
  return (
    <button className="cursor-pointer my-auto rounded-full p-0.75 border border-rose-400 ml-3">
      <img src={imgRemoveItem} alt="Remove item" />
    </button>
  );
};

export default RemoveItemButton;
