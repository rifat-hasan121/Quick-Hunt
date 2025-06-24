import React from "react";

const candidates = [
  {
    name: "Tiffany H. Mueller",
    title: "Sr. Java Developer",
    location: "Allahabad, UP",
    skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "JavaScript"],
    img: "https://themezhub.net/workoo-live/workoo/assets/img/team-1.jpg",
  },
  {
    name: "Doris A. Christiansen",
    title: "Apps Developer",
    location: "Lucknow, UP",
    skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "JavaScript"],
    img: "https://themezhub.net/workoo-live/workoo/assets/img/author.png",
  },
  {
    name: "Catherine K. Gordon",
    title: "Joomla Developer",
    location: "London, UK",
    skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "JavaScript"],
    img: "https://themezhub.net/workoo-live/workoo/assets/img/team-2.jpg",
  },
  {
    name: "Charles P. Daniels",
    title: "Magento Developer",
    location: "Montreal, Canada",
    skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "JavaScript"],
    img: "https://themezhub.net/workoo-live/workoo/assets/img/team-3.jpg",
  },
  {
    name: "Manuel T. Snider",
    title: "PHP Developer",
    location: "Canada, USA",
    skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "JavaScript"],
    img: "https://themezhub.net/workoo-live/workoo/assets/img/team-4.jpg",
  },
  {
    name: "Shrenivashan Yadav",
    title: "UI/UX Specialist",
    location: "Liverpool, UK",
    skills: ["HTML5", "CSS3", "PHP", "Bootstrap", "JavaScript"],
    img: "https://themezhub.net/workoo-live/workoo/assets/img/team-5.jpg",
  },
];

export default function CandidateCards() {
  return (
    <section className="py-12 px-4 md:px-12 bg-blue-100 dark:bg-zinc-900 dark:text-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold my-6">
          High Qualified <span className="text-blue-600">Candidates</span>
        </h2>
        <p className="tex-[12px] md:text-[18px]">
          Discover top-rated professionals across multiple skill sets to help
          you <br /> bring your projects to life.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-600 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img
                src={candidate.img}
                alt={candidate.name}
                className="w-full h-full object-cover rounded-full border-4 border-white shadow"
              />
              <span className="absolute top-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
            </div>
            <p className="text-gray-600 text-sm">📍 {candidate.location}</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">
              {candidate.name}
            </h3>
            <p className="text-blue-600 text-sm mb-4">{candidate.title}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {candidate.skills.slice(0, 4).map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
              <span className="text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded-full">
                3 More
              </span>
            </div>
            <button className="bg-blue-100 dark:bg-blue-800 dark:text-white text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-200">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
