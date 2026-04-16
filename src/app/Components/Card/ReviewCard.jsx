import React from "react";

const ReviewCard = ({ review }) => {
  const data = review;

  return (
    <div>
      <div
        key={review.id}
        className="flex flex-col w-96 h-full bg-white rounded-xl shadow-md border border-gray-100 p-6 transition-all hover:shadow-lg"
      >
        {/* Header: Profile & Rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={data.photo}
              alt={data.user}
              className="h-12 w-12 rounded-full object-cover border-2 border-orange-100"
            />
            <div>
              <h3 className="font-bold text-gray-900 leading-none">
                {data.user}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(data.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Dynamic Star Rating */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < data.rating ? "text-yellow-400 fill-current" : "text-gray-200 fill-current"}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Review Body */}
        <div className="grow">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4 hover:line-clamp-none cursor-default transition-all">
            “{data.review}”
          </p>
        </div>

        {/* Footer: Interactions */}
        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500 group cursor-pointer">
            <div className="p-1.5 rounded-full group-hover:bg-red-50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:text-red-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold group-hover:text-red-600">
              {data.likes.length}{" "}
              <span className="font-normal text-gray-400">likes</span>
            </span>
          </div>

          <button className="text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wider">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
