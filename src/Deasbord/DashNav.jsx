import { User2 } from 'lucide-react';
import React, { use, useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import SwicthTheme from '../Components/SwicthTheme';
import { IoNotifications } from 'react-icons/io5';
import { NotificationContext } from '../Provider/NotificationContext';
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip';

const DashNav = () => {
    const { user2 } = use(AuthContext);
    const { notificationCount, resetNotification } =
        useContext(NotificationContext);
    const [openDropdown, setOpenDropdown] = useState(false);
      const dropdownRef = useRef(null);
   
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
    
    return (
      <div>
        <nav className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold flex items-center gap-2">
              Welcome{" "}
              <span className="text-primary"> {user2?.displayName}</span>
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <SwicthTheme></SwicthTheme>
            <div>
              <div className="relative">
                <Link to="posted-tasks">
                  <button onClick={resetNotification} className="text-2xl">
                    <IoNotifications size={35} style={{ color: "#9227fb" }} />
                  </button>
                </Link>

                {notificationCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {notificationCount}
                  </span>
                )}
              </div>
            </div>
            <div>
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
                        to="/"
                        onClick={() => setOpenDropdown(false)}
                        className="block text-xl md: text-blue-600 hover:underline"
                      >
                         Go to Home
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
};

export default DashNav;