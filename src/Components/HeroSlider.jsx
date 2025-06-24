import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const typewriter = {
  words: ["sure goal!", " make Dreams!", "make Impact!"],
  loop: true,
  cursor: true,
  typeSpeed: 70,
  deleteSpeed: 50,
  delaySpeed: 1000,
};
const typewriter2 = {
  words: [
    " in Your City!",
    "Jobs in Your City!",
    "Opportunities in Your City!",
  ],
  loop: true,
  cursor: true,
  typeSpeed: 70,
  deleteSpeed: 50,
  delaySpeed: 1000,
};
const typewriter3 = {
  words: ["your goal.", "Achieve your goal.", "Chase your goal."],
  loop: true,
  cursor: true,
  typeSpeed: 70,
  deleteSpeed: 50,
  delaySpeed: 1000,
};


const slides = [
  {
    title: "Find your job & make",
    highlight: <Typewriter {...typewriter} />,
    description:
      "Explore exciting career opportunities and uncover hobbies you’ll love. Whether you're a painter, collector, crafter, or just curious, HobbyHub connects you with communities, resources, and endless inspiration to fuel your passion.",
    image:
      "https://i.ibb.co/cm63Vgs/infographic-pictures-for-freelancers-vector-design-template-with-place-for-your-text-2-BNJ5-W1.jpg",
  },
  {
    title: "Hire Experts Freelancers ",
    highlight: <Typewriter {...typewriter2} />,
    description:
      "Connect with skilled local freelancers for any project—fast, reliable, and right around the corner. From designers to developers, find the talent you need to get the job done.",

    image:
      "https://i.ibb.co/HfG6419Z/workplace-vector-banner-illustration-vector-freelancer-workplace-flat-design-2-FKG61-H.jpg",
  },
  {
    title: "Find your dream job & make ",
    highlight: <Typewriter {...typewriter3} />,
    description:
      "Join the world’s leading job platform and take the first step toward your ideal career. Discover opportunities that match your passion and skills.",
    image:
      "https://i.ibb.co/hxWMVkt2/web-and-graphic-design-process-and-web-development-concept-background-banners-set-in-flat-style-top.jpg",
  },
];

export default function HobbySlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 10 seconds = 10000 milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]); // Optional: you can remove [index] if you want a fixed interval

  return (
    <div className=" bg-blue-100 dark:bg-zinc-900 px-4 py-10 min-h-screen flex items-center justify-center ">
      <div className="relative w-full max-w-7xl">
        {/* Slider Container */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-zinc-700 dark:text-white p-6 md:p-10 rounded-xl shadow-md transition-all">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {slides[index].title}
              <span className="block text-primary mt-2">
                — {slides[index].highlight}
              </span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              {slides[index].description}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-5 py-2 rounded font-semibold text-sm">
                Explore Hobbies
              </button>
              <button className="border border-primary text-primary px-5 py-2 rounded font-semibold text-sm hover:text-white hover:bg-primary duration-300 transition-all">
                Join the Community
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <img
              src={slides[index].image}
              alt="Slide"
              className="w-full h-[250px] sm:h-[300px] md:h-[320px] object-cover rounded-xl shadow"
            />
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 md:left-0 bg-black text-white rounded-full p-2"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 md:right-0 bg-black text-white rounded-full p-2"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
