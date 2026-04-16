import React from "react";

const ReviewSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col h-full bg-white rounded-xl border border-gray-100 p-6 animate-pulse shadow-sm">
        {/* Header Skeleton */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Profile Circle */}
            <div className="h-12 w-12 rounded-full bg-gray-200"></div>
            <div className="space-y-2">
              {/* Name Bar */}
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              {/* Date Bar */}
              <div className="h-3 w-16 bg-gray-100 rounded"></div>
            </div>
          </div>

          {/* Stars Skeleton */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>

        {/* Body Skeleton (Multi-line text) */}
        <div className="grow space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>

        {/* Footer Skeleton */}
        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="h-6 w-20 bg-gray-100 rounded-full"></div>
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
