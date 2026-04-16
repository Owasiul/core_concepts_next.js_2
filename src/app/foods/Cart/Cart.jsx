"use client";

import { CartContext } from "@/app/context/CartContext";
import React, { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="py-2 px-1">
      <h1 className="text-lg ">{cart.length} items added</h1>
      <div className="mt-3">
        {cart.map((data) => {
          console.log(data);
          return (
            <div
              key={data.id}
              className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 my-3"
            >
              <div className="flex items-center gap-4">
                {/* Image Container */}
                <div className="relative h-20 w-20 shrink-0">
                  <img
                    src={data.foodImg}
                    alt={data.title}
                    className="h-20 w-20 object-cover rounded-xl"
                  />
                </div>

                {/* Info Section */}
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">
                    {data.category}
                  </span>
                  <h3 className="text-slate-800 font-bold text-lg leading-tight">
                    {data.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium mt-1">
                    ${data.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
