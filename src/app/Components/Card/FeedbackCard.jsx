"use client";
import React from "react";

const FeedbackCard = ({ fd }) => {
  const { date, message } = fd;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-2xl p-5 max-w-sm flex flex-col gap-3 hover:border-gray-300 transition-colors duration-200">
        <p className="text-sm text-gray-800 leading-relaxed">{message}</p>
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">{formattedDate}</span>
          <div className="flex gap-2">
            <button
              //   onClick={onUpdate}
              className="text-xs font-medium px-3 py-1.5 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors duration-150"
            >
              Update
            </button>
            <button
              //   onClick={onDelete}
              className="text-xs font-medium px-3 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors duration-150"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
