import React from 'react';

const PopularSingleJob = ({ data }) => {
    const { icon, title, jobsFound } = data;
    
    return (
       <div className=" text-center">
               <div className="">
                 <div class="relative bg-white dark:bg-zinc-700 rounded-xl shadow-md text-center mx-auto  py-6 mt-12">
                
       
                   {/* <!-- Company Logo --> */}
                   <img
                     src={icon}
                     alt="Company Logo"
                     class="w-16 h-16 mx-auto mb-4"
                   />
       
                   {/* <!-- Job Title --> */}
                   <h3 class="text-lg font-semibold text-slate-800 dark:text-white">
                    {title}
                    </h3>
                    <p className='text-[14px] text-slate-400 dark:text-white my-4'>{jobsFound} jobs found</p>
       
                
       
               
                 </div>
               </div>
             </div>
    );
};

export default PopularSingleJob;