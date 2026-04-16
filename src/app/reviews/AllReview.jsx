"use client";
import React, { useEffect, useState } from "react";
import ReviewCard from "../Components/Card/ReviewCard";
import ReviewLoading from "./ReviewLoading";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div className="w-11/12 mx-auto mt-2">
      {/* head */}
      <div className="header">
        <h1 className="text-4xl font-bold">
          Total <span className="text-orange-600">{reviews.length}</span>{" "}
          Reviews Found
        </h1>
      </div>
      {/* body */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 my-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
