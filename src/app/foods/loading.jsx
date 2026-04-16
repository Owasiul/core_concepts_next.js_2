import React from "react";
import CardSkeleton from "../skeleton/CardSkeleton";

const Loading = () => {
  return (
    <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 items-center mx-auto py-4">
      {[...Array(8)].map((_, index) => (
        <CardSkeleton key={index}></CardSkeleton>
      ))}
    </div>
  );
};

export default Loading;
