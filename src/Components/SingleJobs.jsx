import React, { useEffect, useState } from 'react';
import TopFeaturedJob from './TopFeaturedJob';

const SingleJobs = () => {
    const [job, setJob] = useState([]);
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(result => {
                setJob(result);
        })
    },[])
    return (
      <div className="dark:bg-zinc-900 bg-blue-100">
        <div className="w-11/12 mx-auto text-center py-12 dark:text-zinc-200 ">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold my-6">
            Top Featured <span className="text-primary">Jobs</span>
          </h3>
          <p className='text-[12px] md:text-[18px]'>
            Explore the most in-demand freelance jobs handpicked just for you.
            Find your next opportunity and <br /> start working with top clients
            today!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {job.map((data) => (
              <TopFeaturedJob key={data.id} data={data}></TopFeaturedJob>
            ))}
          </div>
          <div className="pt-12 flex justify-center items-center">
            <button className="btn bg-green-200 text-green-800 shadow-2xl hover:bg-secondary hover:text-white duration-600">
              Browse More Jobs
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingleJobs;