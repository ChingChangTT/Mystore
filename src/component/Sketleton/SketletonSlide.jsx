import React from "react";

const Skeletonslide = () => {
  return (
    <div className="w-4/5 m-auto mt-24">
      {/* Skeleton Loader for Hero Section */}
      <div className="relative max-w-full glide-02 mb-8">
        <div className="overflow-hidden h-lvh" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap relative flex w-full overflow-hidden p-0">
            {Array.from({ length: 1 }).map((_, index) => (
              <li key={index} className="w-full h-lvh bg-gray-300 animate-pulse">
                  <img
                  src=" https://i.pinimg.com/564x/f7/c0/ef/f7c0ef2078b38902d6f095906d7ca13e.jpg"
                  alt="Loading"
                  className="w-full h-full object-cover bg-gray-300"
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              className="p-4 group items-center"
              aria-label={`goto slide ${index + 1}`}
            >
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </button>
          ))}
        </div>
      </div>
      {/* Skeleton Loader for Marquee */}
      <div className="h-16 bg-gray-300 animate-pulse mb-8"></div>
      {/* Skeleton Loader for Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 animate-pulse p-4 rounded-lg"
          >
            <div className="bg-gray-200 h-40 mb-4"></div>
            <div className="bg-gray-200 h-6 mb-2"></div>
            <div className="bg-gray-200 h-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeletonslide;
