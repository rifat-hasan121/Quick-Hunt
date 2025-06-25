import React from "react";
import { useLoaderData } from "react-router";
import BrowseTaskSingle from "./BrowseTaskSingle";

const BrowseTasks = () => {
  const users = useLoaderData();

  return (
    <div className="w-11/12 mx-auto py-28 text-center dark:text-white min-h-screen">
      <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold my-12">
        Browse All <span className="text-primary">Tasks</span>
      </h3>
      <p className="mb-12 text-[12px] md:text-[18px]">
        Explore a wide range of freelance tasks across different categories
        including design, development, marketing, and more. <br />Find the perfect
        opportunity that matches your skills and interests.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        {users.map((data) => (
          <BrowseTaskSingle key={data._id} data={data}></BrowseTaskSingle>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
