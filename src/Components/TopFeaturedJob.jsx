import React from 'react';
import { MdHeartBroken } from "react-icons/md";

const TopFeaturedJob = ({ data }) => {
  const { logo, role, company, type } = data;
    return (
      <div className=" text-center">
        <div className="">
          <div class="relative bg-white dark:bg-zinc-800 rounded-xl shadow-md text-center mx-auto  py-6 mt-12">
            <div className="flex justify-between px-4">
              <h2>
                <MdHeartBroken size={30} style={{ color: "red" }} />
              </h2>
              {/* <!-- Full Time Badge --> */}
              <h2 class="  bg-green-500 text-white text-xs font-semibold px-3 rounded-full mb-4">
               {type}
              </h2>
            </div>

            {/* <!-- Company Logo --> */}
            <img
              src={logo}
              alt="Company Logo"
              class="w-16 h-16 mx-auto mb-4"
            />

            {/* <!-- Job Title --> */}
            <h3 class="text-lg font-semibold text-slate-800 dark:text-white ">
             {role}
            </h3>

            {/* <!-- Company Name --> */}
            <p class="text-sm text-gray-500 dark:text-white  mb-3">
              {company}
            </p>

            {/* <!-- View Job Button --> */}
            <button class="mt-2 px-6 py-2 bg-gray-100 dark:bg-blue-900 dark:text-white hover:bg-gray-200 text-sm font-medium text-slate-700 rounded-full transition">
              View Job
            </button>
          </div>
        </div>
      </div>
    );
};

export default TopFeaturedJob;