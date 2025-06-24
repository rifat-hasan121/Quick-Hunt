import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const SeeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const singleUser = data.find((item) => item._id === id);
  const { _id, title, description, userName, category, deadline } = singleUser;

  const storageKey = `liked-${_id}`;
  const countKey = `like-count-${_id}`;

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedLiked = localStorage.getItem(storageKey) === "true";
    const storedCount = parseInt(localStorage.getItem(countKey)) || 0;
    setLiked(storedLiked);
    setCount(storedCount);
  }, [_id]);

  const handleClick = () => {
    const newLiked = !liked;
    const newCount = newLiked ? count + 1 : count - 1;

    setLiked(newLiked);
    setCount(newCount);

    localStorage.setItem(storageKey, newLiked.toString());
    localStorage.setItem(countKey, newCount.toString());
  };

  return (
    <div className="py-30">
      <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-xl shadow-md dark:bg-gray-800">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
            {category}
          </span>
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
            {userName}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          {title}
        </h2>

        <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed text-center mb-6">
          {description}
        </p>

        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleClick}
              className="cursor-pointer text-red-600"
            >
              {liked ? <FaHeart size={28} /> : <FaRegHeart size={28} />}
            </button>
            <span className="text-lg">{count}</span>
          </div>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            Deadline: {deadline}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
