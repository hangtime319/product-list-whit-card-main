import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, cartItems, setCartItems, handleAddToCart, handleIncrement, handleDecrement }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((singleProduct) => (
        <ProductCard key={singleProduct.name} product={singleProduct} cartItems={cartItems} setCartItems={setCartItems} handleAddToCart={handleAddToCart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      ))}
    </div>
  );
};

export default ProductList;
