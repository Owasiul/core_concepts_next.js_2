"use client";
import React from "react";
import Navlink from "./Navlink";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = () => {
    return (
      <div className="flex flex-row gap-5 text-stone-800">
        <li>
          <button className="text-stone-600 font-bold border shadow px-4 py-2 rounded-full hover:bg-lime-200 duration-200 transition-all cursor-pointer">
            {" "}
            <Link prefetch={false} href={`/foods`}>
              {" "}
              Food{" "}
            </Link>{" "}
          </button>
        </li>
        <li>
          <button className="text-stone-600 font-bold border shadow px-4 py-2 rounded-full hover:bg-lime-200 duration-200 transition-all cursor-pointer">
            {" "}
            <Link href={`/reviews`}> Review </Link>{" "}
          </button>
        </li>
      </div>
    );
  };
  return (
    <header className="bg-white">
      <nav className="flex flex-row justify-between items-center px-4 py-1">
        {/* image part */}
        <Navlink href={`/`}>
          {/* <img src="" alt=""  /> */}
          <Image
            width={100}
            height={150}
            src="/Logo.png"
            className="object-contain"
            alt="logo"
          />
        </Navlink>
        <ul>{navItems()}</ul>
      </nav>
    </header>
  );
};

export default Header;
