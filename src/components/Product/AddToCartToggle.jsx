import React from "react";
import svgCart from "../../assets/images/icon-add-to-cart.svg";

const AddToCartToggle = ({ product, cartItems, handleAddToCart, handleIncrement, handleDecrement }) => {
  const cartItem = cartItems.find((item) => item.name === product.name);
  const quantity = cartItem ? cartItem.quantity : 0;

  if (quantity === 0) {
    return (
      <button onClick={() => handleAddToCart(product)} className="flex items-center gap-2 bg-white text-rose-900 hover:text-(--color-red) hover:border-(--color-red) text-xs py-2 px-4 rounded-full font-bold border border-rose-300 shadow-sm cursor-pointer transition-colors duration-200">
        <img className="w-4 h-4" src={svgCart} alt="Cart Icon" />
        Add to Cart
      </button>
    );
  }

  return (
    <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 flex items-center justify-between bg-red-600 text-white px-4 py-1.5 rounded-full w-36 shadow-sm">
      <button onClick={() => handleDecrement(product.name)} className="w-4 h-4 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors cursor-pointer" aria-label="Decrease quantity">
        -
      </button>
      <span className="font-semibold">{quantity}</span>
      <button onClick={() => handleIncrement(product.name)} className="w-4 h-4 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors cursor-pointer" aria-label="Increase quantity">
        +
      </button>
    </div>
  );
};

export default AddToCartToggle;
