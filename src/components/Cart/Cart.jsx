import React from "react";
import EmptyCartState from "./EmptyCartState";
import CartItem from "./CartItem";
import ConfirmOrderButton from "./ConfirmOrderButton";
import imgCarbonNeutral from "../../assets/images/icon-carbon-neutral.svg";

const Cart = ({ cartItems, handleRemoveItem, openModal }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const orderTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <h3 className="font-bold text-(--color-red)">Your Cart ({totalQuantity})</h3>
      {cartItems.length === 0 ? (
        <div key="empty" className="animate-fade-in">
          <EmptyCartState />
        </div>
      ) : (
        <div key="full" className="animate-fade-in">
          <ul className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <CartItem key={item.name} item={item} handleRemoveItem={handleRemoveItem} />
            ))}
          </ul>

          <div className="mt-5 border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-(--color-rose-500)">Order Total</span>
              <span className="text-xl font-bold text-orange-950">${orderTotal.toFixed(2)}</span>
            </div>

            <div className="mt-4 bg-rose-50 rounded-lg p-3 flex items-center justify-center gap-3 mb-6">
              <img src={imgCarbonNeutral} alt="Carbon-neutral delivery" className="w-5 h-5" />
              <div className="text-sm text-orange-950">
                This is a <span className="font-bold">carbon-neutral</span> delivery
              </div>
            </div>

            <ConfirmOrderButton onClick={openModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
