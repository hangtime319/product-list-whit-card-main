import React from "react";
import AddToCartToggle from "./AddToCartToggle";

const ProductCard = ({ product, cartItems, handleAddToCart, handleIncrement, handleDecrement }) => {
  const desktopUrl = new URL(product.image.desktop, import.meta.url).href;
  const tabletUrl = new URL(product.image.tablet, import.meta.url).href;
  const mobileUrl = new URL(product.image.mobile, import.meta.url).href;

  const isProductInCart = cartItems.some((item) => item.name === product.name);

  return (
    <article className="relative w-full rounded-lg overflow-hidden">
      <div className="relative">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopUrl} />
          <source media="(min-width: 768px)" srcSet={tabletUrl} />
          <img className={`rounded-lg object-cover border-2 ${isProductInCart ? "border-(--color-red)" : "border-transparent"}`} src={desktopUrl} alt={product.name} />
        </picture>
        <div className="absolute inset-x-0 bottom-[-1em] flex justify-center px-4">
          <AddToCartToggle product={product} cartItems={cartItems} handleAddToCart={handleAddToCart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-8">
        <p className="text-sm text-rose-500 font-light">{product.category}</p>
        <h3 className="font-semibold text-sm text-rose-900">{product.name}</h3>
        <p className="font-bold text-(--color-red)">${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
};

export default ProductCard;
