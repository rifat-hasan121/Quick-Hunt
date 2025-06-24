import React, { useEffect, useState } from "react";
import { FaHeart, FaPenNib, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const UserPosted = ({ task, index, tasks, setTasks }) => {
  const { _id } = task;

  const [count, setCount] = useState(0);
  const countKey = `like-count-${_id}`;

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem(countKey)) || 0;
    setCount(storedCount);
  }, [countKey]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://freelance-task-marketplace-server-nine.vercel.app/tasks/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingTasks = tasks.filter((tas) => tas._id !== _id);
              setTasks(remainingTasks);
            }
          });
      }
    });
  };

  return (
    <tr className="bg-blue-100 dark:bg-zinc-700">
      <th>{index + 1}</th>
      <td>{task.category}</td>
      <td>{task.title}</td>
      <td>{task.budget}</td>
      <td>{task.deadline}</td>
      <td>
        <Link to={`/update-data/${_id}`}>
          <button className="cursor-pointer">
            <FaPenNib size={28} />
          </button>
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="cursor-pointer">
          <MdDelete size={28} />
        </button>
      </td>
      <td className="flex items-center gap-2">
        <FaHeart size={28} style={{ color: "red" }} />
        <span>{count}</span>
      </td>
    </tr>
  );
};

export default UserPosted;
