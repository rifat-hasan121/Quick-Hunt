import React from "react";

const SingleTask = ({ tasks }) => {
  const { title,  deadline, budget, description, userName } = tasks;


  return (
    <div
      data-aos="fade-up"
      className="bg-white dark:bg-zinc-700  rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-600 mb-1">{title}</h2>
        <p>
          <span className="font-medium">💰 Budget:</span> ${budget}
        </p>
      </div>

      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{description}</p>
      <div className="text-sm text-gray-600 dark:text-zinc-200 mb-2">
        <p>
          <span className="font-medium">🗓 Deadline:</span> {deadline}
        </p>
      </div>

      <p className="text-xs text-gray-400 text-right italic">
        Posted by: <span className="text-gray-600 font-medium">{userName}</span>
      </p>
    </div>
  );
};

export default SingleTask;
