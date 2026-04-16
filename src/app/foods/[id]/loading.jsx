import React from "react";

const Loading = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <div className="bg-gray-200 rounded-2xl h-100 w-full"></div>

        {/* Info Skeleton */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 rounded-full w-20"></div>
              <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            </div>
          </div>

          <div className="border-t border-b py-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-8 bg-gray-200 rounded w-24"></div>
          </div>

          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded w-40"></div>
            <div className="aspect-video bg-gray-200 rounded-xl w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
