import React from "react";
import FeaturedTasks from "./FeaturedTasks";
import SingleJobs from "./SingleJobs";
import PopularJobs from "./PopularJobs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import HobbySlider from "./HeroSlider";
import Counter from "./Counter";
import LatestUpdates from "./LatestUpdates ";
import CandidateCards from "./CandidateCards";

const Home = () => {
  
  return (
    <>
      <div>
        <HobbySlider></HobbySlider>
      </div>
      {/* featured task */}
      <FeaturedTasks></FeaturedTasks>
      {/* jobs */}
      <SingleJobs></SingleJobs>
      {/* Popular jobs */}
      <PopularJobs></PopularJobs>
      {/* CandidateCards */}
      <CandidateCards></CandidateCards>
      {/* Updated News */}
      <LatestUpdates></LatestUpdates>
      {/* counter */}
      <Counter></Counter>
    </>
  );
};

export default Home;
