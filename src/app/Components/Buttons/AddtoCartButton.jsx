"use client";
import { CartContext } from "@/app/context/CartContext";
import React, { useContext, useState } from "react";

const AddtoCartButton = ({ foodData }) => {
  const [inCart, setInCart] = useState(false);
  const { handleAdd2Cart } = useContext(CartContext);
  const add2Cart = () => {
    handleAdd2Cart(foodData);
    setInCart(true);
  };

  return (
    <button
      onClick={add2Cart}
      disabled={inCart}
      className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 active:scale-[0.98] shadow-md hover:shadow-orange-200 disabled:bg-gray-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddtoCartButton;
