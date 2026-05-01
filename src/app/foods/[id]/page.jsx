import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const { details = {} } = await res.json();
  // console.log(details);
  return {
    title: details.title,
  };
}

const getFoodDetails = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.details;
};

export function generateStaticParams() {
  return [{ id: "53071" }, { id: "52873" }, { id: "53054" }, { id: "53078" }];
}

const PageDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getFoodDetails(id);

  if (!food.title) {
    redirect("/foods");
    // return (
    //   <div className="flex justify-center items-center min-h-screen">
    //     <h1 className="text-xl text-purple-700 font-bold">
    //      ! No Food Data Found
    //     </h1>
    //   </div>
    // );
  }

  // Convert YouTube URL to Embed format
  const embedUrl = food.video?.replace("watch?v=", "embed/");

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Food Image */}
        <div className="relative h-80 w-full overflow-hidden group rounded-xl">
          <Image
            fill
            src={food.foodImg}
            alt={`Photo of ${food.title}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            loading="lazy"
          />
        </div>
        {/* Food Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white">{food.title}</h1>
            <div className="flex gap-2 mt-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {food.category}
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                {food.area}
              </span>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <p className="text-white text-sm uppercase tracking-wider font-semibold">
              Price
            </p>
            <p className="text-3xl font-bold text-green-600">${food.price}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">Preparation Video</h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
              <iframe
                src={embedUrl}
                title={food.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
