import React from 'react';
import SearchBar from './SearchBar';
import Lottie from 'lottie-react';
import animation from '/public/hero-anitamtion'; // Adjust the path as necessary

const Hero = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-[url(https://i.ibb.co/My2zWRyj/hero.jpg)] bg-cover min-h-screen text-center p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24">
        <div className="w-2xl">
          <h3
            data-aos="zoom-out-right"
            className="text-2xl sm:text-3xl md:text-7xl text-white font-extrabold"
          >
            Join us & Explore <br /> Thousands of Jobs
          </h3>
          <p
            data-aos="zoom-out-right"
            className="text-sm sm:text-base md:text-2xl text-white mt-8"
          >
            Work with talented people at the most affordable price
            <br /> to get the most out of your time and cost
          </p>
          <div data-aos="zoom-out-right" className="my-8">
            <SearchBar></SearchBar>
          </div>
        </div>
        <div className="w-2xl">
          <Lottie animationData={animation}/>
        </div>
      </div>
    );
};

export default Hero;