import React from "react";
import FeedBackForm from "@/app/Components/form/FeedBackForm";
const AddFeedbacks = () => {
  return (
    <div className="w-11/12 mx-auto my-3">
      <h1 className="text-3xl font-bold my-2">Here you can add Feedback</h1>

      <FeedBackForm />
    </div>
  );
};

export default AddFeedbacks;
