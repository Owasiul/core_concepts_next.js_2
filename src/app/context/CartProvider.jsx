"use client"
import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const handleAdd2Cart = (item) => {
    setCart([item, ...cart]);
  };

  const cartInfo = {
    handleAdd2Cart,
    cart
  }

  return (
    <CartContext.Provider value={cartInfo}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
