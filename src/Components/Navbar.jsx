import React, { use,  } from "react";
import { Link, NavLink } from "react-router";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import SwicthTheme from "./SwicthTheme";

const Navbar = () => {
  const { user2, logout, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }
  

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success(`${user2.displayName} log out Successfully!`);
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-task">Add Task</NavLink>
      </li>
      <li>
        <NavLink to="/browse-tasks">Browse Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/posted-tasks">My Posted Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-transparent dark:text-white backdrop-blur-xl fixed top-0 right-0 left-0 z-50">
      <div className="navbar w-full sm:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow text-xl bg-base-200"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img
                className="w-12 sm:w-14 md:w-16"
                src="https://i.ibb.co/s92q6F6Z/images-removebg-preview.png"
                alt=""
              />
              <a className=" hidden sm:text-xl md:flex text-2xl font-bold">
                Quick<span className="text-blue-600">Hustle</span>
              </a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[20px] font-bold">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <div>
      <SwicthTheme></SwicthTheme>
        </div>
          <div className="avatar hidden md:flex">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                id="my-anchor-element"
                src={`${
                  user2
                    ? user2.photoURL
                    : "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                }`}
              />
              <Tooltip
                anchorSelect="#my-anchor-element"
                content={`${user2?.displayName} ${user2?.photoURL}`}
              />
            </div>
          </div>

          {user2 ? (
            <a
              onClick={handleLogout}
              className="btn border-none bg-blue-600 text-white"
            >
              Logout
            </a>
          ) : (
            <Link
              to="/login"
              className="btn border-none bg-blue-600 text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
