import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UserPosted from "./UserPosted";
import Loading from "./Loading";

const PostedTasks = () => {
  const { user2 } = use(AuthContext);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(
      `https://freelance-task-marketplace-server-nine.vercel.app/addUser?email=${user2?.email}`
    )
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [user2.email]);

  return (
    <>
      <div className="w-11/12 mx-auto  py-30 ">
        <div className="overflow-x-auto rounded-lg">
          <table className="table">
            <thead>
              <tr className="text-black dark:text-zinc-300">
                <th>No.</th>
                <th>Category</th>
                <th>Title</th>
                <th>Budget</th>
                <th>Deadline</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Bit</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <UserPosted
                  key={task._id}
                  task={task}
                  index={index}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PostedTasks;
