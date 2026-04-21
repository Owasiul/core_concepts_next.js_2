import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddtoCartButton from "../Buttons/AddtoCartButton";

const RecipeCard = ({ foodData }) => {
  // console.log(foodData);
  const { title, foodImg, price, category, id } = foodData;

  return (
    <div className="lg:max-w-96 w-full mx-auto overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden group">
        <Image
          fill
          src={foodImg}
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-800 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-extrabold text-gray-900">
            ${(price / 100).toFixed(2)}
          </span>
          <Link href={`/foods/${id}`}>
            <button className="text-sm font-medium text-gray-500 hover:text-orange-600 transition-colors">
              View Details
            </button>
          </Link>
        </div>

        {/* Add to Cart Button */}
        <AddtoCartButton foodData={foodData}></AddtoCartButton>
      </div>
    </div>
  );
};

export default RecipeCard;
