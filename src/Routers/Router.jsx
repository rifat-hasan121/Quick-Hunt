import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import HomeLayouts from "../Components/Layouts/HomeLayouts";
import AddTask from "../Components/AddTask";
import BrowseTasks from "../Components/BrowseTasks";
import PostedTasks from "../Components/PostedTasks";
import Home from "../Components/Home";
import SeeDetails from "../Components/SeeDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import UpdateData from "../Components/UpdateData";
import DashboardLayout from "../Deasbord/DashboardLayout";
import Overview from "../Deasbord/OverView";
import HomeDash from "../Deasbord/HomeDash";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/browse-tasks",
        loader: () =>
          fetch(
            "https://freelance-task-marketplace-server-nine.vercel.app/addUser"
          ),
        Component: BrowseTasks,
      },
      {
        path: `/see-details/:id`,
        loader: () =>
          fetch(
            "https://freelance-task-marketplace-server-nine.vercel.app/addUser"
          ),
        element: (
          <PrivetRoute>
            <SeeDetails></SeeDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Overview },

      {
        path: "posted-tasks",
        element: <PostedTasks></PostedTasks>,
      },

      {
        path: "add-task",
        element: <AddTask></AddTask>,
      },

      {
        path: "all-items",
        loader: () =>
          fetch(
            "https://freelance-task-marketplace-server-nine.vercel.app/addUser"
          ),
        Component: BrowseTasks,
      },

      {
        path: `update-data/:id`,
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-nine.vercel.app/addUser/${params.id}`
          ),
        element: <UpdateData></UpdateData>,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
