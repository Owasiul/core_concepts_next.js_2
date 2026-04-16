"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";

const Search = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = (data) => {
    const params = new URLSearchParams(searchParams.toString());
    if (data.query?.trim()) {
      params.set("search", data.query.trim());
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="flex items-center w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-2"
      >
        <input
          type="text"
          {...register("query")}
          placeholder="Search..."
          className="grow px-3 py-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="cursor-pointer ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
