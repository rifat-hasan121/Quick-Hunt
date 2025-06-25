import React, { useEffect, useState } from 'react';
import PopularSingleJob from './PopularSingleJob';

const PopularJobs = () => {
    const [job, setJob] = useState([]);
        useEffect(() => {
            fetch('/popularJobs.json')
                .then(res => res.json())
                .then(result => {
                    setJob(result);
            })
        },[])
    return (
      <div className="bg-blue-50 dark:bg-zinc-800 text-zinc-800 dark:text-white">
        <div className="w-11/12 mx-auto text-center py-12 ">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold my-12">
            Popular Jobs <span className="text-primary">Category</span>
          </h3>
          <p className='tex-[12px] md:text-[18px] mb-12'>
            Discover the most popular job categories among freelancers. From
            design to development, find your <br />
            area of expertise and start applying today!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {job.map((data) => (
              <PopularSingleJob data={data} key={data.id}></PopularSingleJob>
            ))}
          </div>
        </div>
      </div>
    );
};

export default PopularJobs;