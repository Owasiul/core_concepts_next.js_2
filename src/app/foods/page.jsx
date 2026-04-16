import React, { Suspense } from "react";
import RecipeCard from "../Components/Card/Card";
import Cart from "./Cart/Cart";
import Search from "../Components/Search/Search";
import Loading from "./loading";

export const metadata = {
  title: "All Foods",
};

const getFoodsData = async (search) => {
  const data = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } },
  );
  const res = await data.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.foods || [];
};
const FoodPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const api = await getFoodsData(search);
  return (
    <div className="px-4 w-full mx-auto my-3">
      <p className="text-4xl text-white font-semibold mx-4">
        Total: <span className="font-bold text-yellow-400">{api.length}</span>{" "}
        Data Found
      </p>
      <div className="my-4">
        <Suspense fallback={<Loading></Loading>}>
          <Search></Search>
        </Suspense>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 items-center mx-auto py-4">
          {api.map((foodData) => {
            return (
              <RecipeCard key={foodData.id} foodData={foodData}></RecipeCard>
            );
          })}
        </div>
        <div className="border-2 w-[300px] rounded-xl py-4 px-2">
          <h2 className="text-xl font-bold text-white pb-1 border-b-2 border-white">
            {" "}
            Cart Items
          </h2>
          <div className="">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
