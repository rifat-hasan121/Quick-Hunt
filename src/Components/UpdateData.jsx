import React, { use } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateData = () => {
  const { _id, title, category, deadline, description, budget } =
    useLoaderData();
  const { user2 } = use(AuthContext);
  const handleFormUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    // send updated data in database

    fetch(
      `https://freelance-task-marketplace-server-nine.vercel.app/addUser/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          Swal.fire({
            title: "Update Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div>
      <div className="py-28 bg-[url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTMwLmpwZw.jpg)] dark:bg-[url(https://1.bp.blogspot.com/-k3rtzfw-l4I/YU0SLCYg3BI/AAAAAAAABuw/Tq4H0_oSUg8NrGJAOyefbwP81v9EXrMmwCLcBGAsYHQ/s0/Screenshot%2B%2528797%2529.jpg)] dark:text-white bg-cover bg-center bg-no-repeat">
        <form
          onSubmit={handleFormUpdate}
          class="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 rounded-2xl shadow-md space-y-6 bg-transparent backdrop-blur-xl "
        >
          <h2 class="text-2xl font-semibold text-center text-gray-800 dark:text-white">
            Add a New Task
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <!-- Task Title --> */}
            <div>
              <label class="block mb-1 font-medium text-gray-700">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Enter task title"
                class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* <!-- Category --> */}
            <div>
              <label class="block mb-1 font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                defaultValue={category}
                class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option>Web Development</option>
                <option>Design</option>
                <option>Writing</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* <!-- Deadline --> */}
            <div>
              <label class="block mb-1 font-medium text-gray-700">
                Deadline
              </label>
              <input
                type="date"
                defaultValue={deadline}
                name="deadline"
                class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* <!-- Budget --> */}
            <div>
              <label class="block mb-1 font-medium text-gray-700">
                Budget ($)
              </label>
              <input
                type="number"
                name="budget"
                defaultValue={budget}
                placeholder="Enter budget"
                min="0"
                class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* <!-- User Email (Read Only) --> */}
            <div>
              <label class="block mb-1 font-medium text-gray-700">
                User Email
              </label>
              <input
                type="email"
                value={user2?.email}
                readonly
                class="w-full px-4 py-2 bg-gray-100 border rounded-xl shadow-sm cursor-not-allowed"
              />
            </div>

            {/* <!-- User Name (Read Only) --> */}
            <div>
              <label class="block mb-1 font-medium text-gray-700">
                User Name
              </label>
              <input
                type="text"
                value={user2?.displayName}
                readonly
                class="w-full px-4 py-2 bg-gray-100 border rounded-xl shadow-sm cursor-not-allowed"
              />
            </div>
          </div>

          {/* <!-- Description --> */}
          <div>
            <label class="block mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows="4"
              name="description"
              defaultValue={description}
              placeholder="Describe the task"
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* <!-- Add Button --> */}
          <div class="text-center">
            <button
              type="submit"
              class="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl cursor-pointer hover:bg-blue-700 transition duration-200"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
