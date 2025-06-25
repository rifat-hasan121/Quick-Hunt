import React, { useContext, useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import SwicthTheme from "./SwicthTheme";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user2, logout, loading } = useContext(AuthContext);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return <Loading />;

  const handleLogout = () => {
    logout()
      .then(() =>
        toast.success(`${user2.displayName} logged out successfully!`)
      )
      .catch((error) => toast.error(`${error}`));
  };

  const links = (
    <>
      <li data-aos="fade-down">
        <NavLink to="/">Home</NavLink>
      </li>
      <li data-aos="fade-down">
        <NavLink to="/browse-tasks">Browse Tasks</NavLink>
      </li>
      <li data-aos="fade-down">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`${
        navbarScrolled ? "bg-transparent" : "bg-white"
      } dark:text-white backdrop-blur-xl fixed top-0 right-0 left-0 z-50 py-4 transition-colors duration-500`}
    >
      <div className="navbar w-full sm:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
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
            <div data-aos="fade-right" className="flex items-center">
              <img
                className="w-12 sm:w-14 md:w-16"
                src="https://i.ibb.co/s92q6F6Z/images-removebg-preview.png"
                alt="Logo"
              />
              <span className="hidden sm:text-xl md:flex text-2xl font-bold">
                Quick<span className="text-blue-600">Hustle</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[20px] font-bold">
            {links}
          </ul>
        </div>

        <div className="navbar-end space-x-4">
          <div data-aos="fade-left">
            <SwicthTheme />
          </div>

          {user2 && (
            <div className="relative hidden md:flex" ref={dropdownRef}>
              <div
                onClick={() => setOpenDropdown(!openDropdown)}
                data-aos="fade-left"
                className="cursor-pointer ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2"
              >
                <img
                  id="my-anchor-element"
                  src={
                    user2?.photoURL ||
                    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  }
                  alt="avatar"
                />
                <Tooltip
                  anchorSelect="#my-anchor-element"
                  content={`${user2?.displayName}`}
                />
              </div>

              {openDropdown && (
                <div className="absolute right-0 top-12 mt-2 w-48 bg-white dark:bg-zinc-800 shadow-lg rounded-xl z-50 p-3">
                  <p className="text-xl mb-2 font-medium text-gray-700 dark:text-gray-100">
                     {user2?.displayName}
                  </p>
                  <Link
                    to="/dashboard"
                    onClick={() => setOpenDropdown(false)}
                    className="block text-blue-600 hover:underline text-xl"
                  >
                    Go to Dashboard
                  </Link>
                </div>
              )}
            </div>
          )}

          {user2 ? (
            <button
              data-aos="fade-left"
              onClick={handleLogout}
              className="btn border-none bg-blue-600 text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              data-aos="fade-left"
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
