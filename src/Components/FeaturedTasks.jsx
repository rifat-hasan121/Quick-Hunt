import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import { Typewriter } from "react-simple-typewriter";

const FeaturedTasks = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch("https://freelance-task-marketplace-server-nine.vercel.app/featured")
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto py-12 text-center dark:text-white">
      <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold my-6">
        Featured{" "}
        <span className="text-primary">
          Task
        </span>
      </h3>
      <p className="text-[12px] md:text-[18px] mb-4">
        Explore top tasks with approaching deadlines — handpicked for quality
        and urgency. Find your <br />
        next opportunity fast.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {task.map((tasks) => (
          <SingleTask key={tasks._id} tasks={tasks}></SingleTask>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTasks;
