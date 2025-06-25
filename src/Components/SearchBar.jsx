import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center py-6 px-4">
      <div className="bg-white rounded-full shadow-lg py-4 flex flex-col md:flex-row items-stretch w-full max-w-3xl overflow-hidden">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for..."
          className="input input-bordered rounded-none ml-2 bg-white rounded-l-full md:rounded-l-full w-full md:w-1/2 focus:outline-none"
        />

        {/* Dropdown */}
        <select className="select border-l-2 border-l-gray-200 bg-white rounded-none w-full md:w-1/3 focus:outline-none">
          <option>Services</option>
          <option>Jobs</option>
          <option>Courses</option>
        </select>

        {/* Search Button */}
        <button className="btn border-none bg-[#7b8cff] rounded-none rounded-r-full w-full md:w-auto hover:bg-[#6775d8]">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
