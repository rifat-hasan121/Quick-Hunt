
import React from "react";
import { Link } from "react-router";

const BrowseTaskSingle = ({ data }) => {
  const { _id, title, category, budget,} = data;

  return (
    <div className="bg-white dark:bg-zinc-700 dark:text-zinc-200  border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
      {/* Top badges */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
          {category}
        </span>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
          Budget: ${budget}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-black dark:text-white text-center mb-4">
        {title}
      </h2>

      {/* Button */}
      <div className="">
        <Link to={`/see-details/${_id}`}>
          <button className="bg-blue-300 w-full hover:bg-blue-400 font-semibold px-5 py-2 rounded-full transition">
            See Details
          </button>
        </Link>
      </div>

     
    </div>
  );
};

export default BrowseTaskSingle;
