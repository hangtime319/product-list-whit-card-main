import React from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import iconOrderConfirmed from "../../assets/images/icon-order-confirmed.svg";

const OrderConfirmationModal = ({ cartItems, startNewOrder }) => {
  const orderTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    // Overlay
    <div className="fixed inset-0 bg-black/50 flex justify-center items-end sm:items-center z-50 animate-fade-in p-0 sm:p-4">
      {/* White Box */}
      <div className="bg-white w-full sm:max-w-md max-h-[90vh] rounded-lg sm:rounded-2xl p-5 sm:p-10 overflow-y-auto animate-slide-in-right sm:animate-fade-in">
        <img className="w-8 h-8 mb-3" src={iconOrderConfirmed} alt="Success" />
        <h2 className="text-orange-950 text-2xl font-bold mb-1">Order Confirmed</h2>
        <p className="text-xs text-[var(--color-rose-500)] mb-5">We hope you enjoy your food!</p>

        {/* Rose Box with list items */}
        <div className="bg-[var(--color-rose-50)] p-3 rounded-lg">
          <ul className="mb-2">
            {cartItems.map((item) => (
              <OrderSummaryItem key={item.name} item={item} />
            ))}
          </ul>

          {/* Order Total */}
          <div className="flex items-center justify-between py-4">
            <span className="text-[var(--color-rose-500)] font-semibold">Order Total</span>
            <span className="text-orange-950 font-bold">${orderTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Button reset */}
        <button className="cursor-pointer mt-4 w-full bg-[var(--color-red)] text-xs leading-tight hover:bg-red-800 transition-colors duration-200 text-white py-4 rounded-full" onClick={startNewOrder}>Start New Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
