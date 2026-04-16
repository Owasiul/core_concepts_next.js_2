"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
  const location = usePathname;
  return (
    <div>
      <Link
        href={href}
        className={`${location === href && "bg-violet-200 px-4 py-2 rounded-xl "}`}
      >
        {" "}
        {children}{" "}
      </Link>
    </div>
  );
};

export default Navlink;
