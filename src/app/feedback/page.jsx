import React from "react";
import FeedbackCard from "../Components/Card/FeedbackCard";
import Link from "next/link";
export const metadata = {
  title: "feedbacks",
};

const getFeedbacks = async () => {
  const result = await fetch("http://localhost:3000/api/feedback/", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return await result.json();
};

const feedbacks = async () => {
  const allFeedback = await getFeedbacks();
  //   console.log(allFeedback);
  return (
    <div className="w-11/12 mx-auto my-4">
      <h2 className="text-2xl font-bold">
        {allFeedback.length} Feedbacks Found
      </h2>
      <div className="my-4">
        <Link
          className="px-4 py-2 bg-white rounded-3xl text-black font-semibold"
          href={`/feedback/add`}
        >
          ADD Feedback
        </Link>
      </div>
      <div className="p-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-5">
        {allFeedback.map((fd) => (
          <FeedbackCard key={fd._id} fd={fd} />
        ))}
      </div>
    </div>
  );
};

export default feedbacks;
