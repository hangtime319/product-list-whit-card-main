import React, { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import ProductList from "./components/Product/ProductList";
import Cart from "./components/Cart/Cart";
import OrderConfirmationModal from "./components/Modal/OrderConfirmationModal";

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  // Modal control
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const handleIncrement = (productName) => {
    const updatedCart = cartItems.map((item) => {
      if (item.name === productName) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecrement = (productName) => {
    const existingItem = cartItems.find((item) => item.name === productName);

    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.name !== productName));
    } else {
      const updatedCart = cartItems.map((item) => (item.name === productName ? { ...item, quantity: item.quantity - 1 } : item));
      setCartItems(updatedCart);
    }
  };

  const handleRemoveItem = (productName) => {
    setCartItems(cartItems.filter((item) => item.name !== productName));
  };

  const startNewOrder = () => {
    setCartItems([]); // Clean items
    setIsModalOpen(false); // Hide modal
  };

  return (
    <main className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 p-6 sm:p-8 min-h-screen">
      <section className="flex-1">
        <h1 className="font-bold text-2xl text-rose-900 mb-4">Desserts</h1>
        <ProductList products={data} cartItems={cartItems} setCartItems={setCartItems} handleAddToCart={handleAddToCart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      </section>
      <aside className="w-full lg:w-96 bg-white p-6 rounded-xl h-fit">
        <Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem} openModal={() => setIsModalOpen(true)} />
      </aside>

      {isModalOpen && <OrderConfirmationModal cartItems={cartItems} startNewOrder={startNewOrder} />}
    </main>
  );
};

export default App;
