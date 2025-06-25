import React, { use, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { NotificationContext } from "../Provider/NotificationContext";

const AddTask = () => {
  const { user2 } = use(AuthContext);

const { incrementNotification } = useContext(NotificationContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const budget = form.budget.value;

    // Create a task object
    const task = {
      title,
      category,
      description,
      deadline,
      budget,
      userEmail: user2?.email,
      userName: user2?.displayName,
    };


    

    // send data to the server
    fetch("https://freelance-task-marketplace-server-nine.vercel.app/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Success:", data);
          Swal.fire({
            title: `${task.title} add successfully!`,
            icon: "success",
            draggable: true,
          });
          // Reset the form
          form.reset();
          // fetch success এর ভিতরে এটা call করো:
          if (data.insertedId) {
            incrementNotification(); // ✅ নোটিফিকেশন বাড়াও
            Swal.fire({
              title: `${task.title} added successfully!`,
              icon: "success",
            });
            form.reset();
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="py-28 flex flex-col-reverse md:flex-row items-center justify-center gap-8">
      <div>
        {" "}
        <form
          onSubmit={handleFormSubmit}
          class="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent backdrop-blur-2xl dark:bg-transparent dark:backdrop-blur-2xl rounded-2xl shadow-md space-y-6 dark:text-gray-400"
        >
          <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">
            Add a New <span className="text-primary">Task</span>
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
              Add Task
            </button>
          </div>
        </form>
      </div>

      <div>
        <img
          className="w-full h-[400px] md:h-[500px] rounded-2xl"
          src="https://i.ibb.co/9k1yzxcf/Location-tracking-rafiki.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AddTask;
