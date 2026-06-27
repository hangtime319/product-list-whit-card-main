import React from "react";
import imgEmptyCart from "../../assets/images/illustration-empty-cart.svg";

const EmptyCartState = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <img src={imgEmptyCart} alt="Empty cart" />
      <p className="text-sm text-rose-500 font-medium text-center">Your added items will appear here</p>
    </div>
  );
};

export default EmptyCartState;
