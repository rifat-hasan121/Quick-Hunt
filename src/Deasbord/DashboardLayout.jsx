
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, Outlet } from "react-router";
import Overview from "./OverView";
import DashNav from "./DashNav";


const DashboardLayout = () => {

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-100 dark:bg-gray-700 dark:text-gray-200 text-gray-900 shadow-md transition-all duration-300">
        <h2 className="text-2xl md:text-4xl font-bold my-12 px-4">Dashboard</h2>
        <div className="grid grid-cols-1 justify-center items-center gap-4 mt-6 my-12 px-4 text-lg font-bold">
          <NavLink
            className="transition duration-300 hover:bg-blue-200 py-4 px-3 rounded-sm"
            to="/dashboard"
            end
          >
            Overview
          </NavLink>
  
          <NavLink
            className="transition duration-300 hover:bg-blue-200 py-4 px-3 rounded-sm"
            to="posted-tasks"
          >
            My Items
          </NavLink>
          <NavLink
            className="transition duration-300 hover:bg-blue-200 py-4 px-3 rounded-sm"
            to="add-task"
          >
            Add Item
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-all duration-300">
        <DashNav />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
