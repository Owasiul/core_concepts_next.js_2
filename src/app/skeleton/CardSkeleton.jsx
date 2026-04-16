import React from "react";

const CardSkeleton = () => {
  return (
    <div>
      <div className="lg:max-w-96 w-full mx-auto overflow-hidden rounded-2xl bg-white shadow-md animate-pulse">
        {/* Image Skeleton */}
        <div className="h-56 w-full bg-gray-200"></div>

        {/* Content Skeleton */}
        <div className="p-5">
          {/* Title Skeleton */}
          <div className="mb-4 h-6 w-3/4 rounded-lg bg-gray-200"></div>

          <div className="flex items-center justify-between mb-6">
            {/* Price Skeleton */}
            <div className="h-8 w-20 rounded-lg bg-gray-200"></div>
            {/* Small Button Skeleton */}
            <div className="h-4 w-16 rounded-lg bg-gray-200"></div>
          </div>

          {/* Main Button Skeleton */}
          <div className="h-12 w-full rounded-xl bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
