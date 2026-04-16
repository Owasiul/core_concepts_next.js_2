import React from "react";
import ReviewSkeleton from "../skeleton/ReviewSkeleton";
const ReviewLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 my-5">
      {[...Array(12)].map((_, index) => (
        <ReviewSkeleton key={index} />
      ))}
    </div>
  );
};

export default ReviewLoading;
