import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  
  return (
    <>
      {/* added commit */}
      <div className="text-center py-12 w-11/12 mx-auto dark:text-white">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold my-6">
          Your Task, <span className="text-primary">Our Talent</span>
        </h3>
        <p className="text-[14px] md:text-[18px] opacity-60 my-6">
          Our platform helps you find skilled freelancers for any task —
          quickly, <br />
          reliably, and within your budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center md:">
          <div className="bg-white dark:bg-zinc-600 dark:text-white p-10 rounded-2xl shadow-blue-300 dark:shadow-zinc-900 shadow-2xl ">
            <img
              src="https://i.ibb.co.com/hF4s400p/success-doctor.png"
              alt="success doctors"
            />
            <h3 className="text-5xl md:text-6xl font-extrabold my-4 -ml-20 md:-ml-8">
              <CountUp end={199} />+
            </h3>
            <h2 className="text-xl -ml-18 md:text-2xl font-semibold opacity-60">
              Total Freelancers
            </h2>
          </div>
          <div className="bg-white dark:bg-zinc-600 dark:text-white p-10 rounded-2xl shadow-blue-300 dark:shadow-zinc-900 shadow-2xl ">
            <img
              src="https://i.ibb.co.com/gL9Dx6XV/success-review.png"
              alt="success review"
            />
            <h3 className="text-5xl md:text-6xl -ml-20 font-extrabold my-4  md:-ml-8">
              <CountUp end={467} />+
            </h3>
            <h2 className="text-xl md:text-2xl -ml-18 md:ml-0 font-semibold opacity-60">
              Total Task Reviews
            </h2>
          </div>
          <div className="bg-white dark:bg-zinc-600 dark:text-white p-10 rounded-2xl shadow-blue-300 dark:shadow-zinc-900 shadow-2xl ">
            <img
              src="https://i.ibb.co.com/B5G0fkG6/success-patients.png"
              alt="success patients"
            />
            <h3 className="text-5xl md:text-6xl -ml-20 font-extrabold my-4 md:-ml-8">
              <CountUp end={1900} />+
            </h3>
            <h2 className="text-xl md:text-2xl -ml-28 md:ml-0  font-semibold opacity-60">
              Total Completed Tasks
            </h2>
          </div>
          <div className="bg-white dark:bg-zinc-600 dark:text-white p-10 rounded-2xl shadow-blue-300 dark:shadow-zinc-900 shadow-2xl ">
            <img
              src="https://i.ibb.co.com/Rk2Fbzdr/success-staffs.png"
              alt="success staffs"
            />
            <h3 className="text-5xl md:text-6xl -ml-20 font-extrabold my-4 md:-ml-8">
              <CountUp end={300} />+
            </h3>
            <h2 className="text-xl md:text-2xl -ml-18 md:ml-0  font-semibold opacity-60">
              Total Clients
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
