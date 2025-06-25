import React from "react";

const updates = [
  {
    author: "Shilpa Sheri",
    title: "Why people choose listio for own properties",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    tags: ["Health", "Business"],
    image: "https://themezhub.net/workoo-live/workoo/assets/img/b-1.jpg",
  },
  {
    author: "Shaurya",
    title: "List of benifits and impressive listio services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    tags: ["Banking", "Stylish"],
    image: "https://themezhub.net/workoo-live/workoo/assets/img/b-2.jpg",
  },
  {
    author: "Admin K.",
    title: "What people says about listio properties",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    tags: ["Fashion", "Wedding"],
    image: "https://themezhub.net/workoo-live/workoo/assets/img/b-3.jpg",
  },
];

const LatestUpdates = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-blue-50 dark:bg-zinc-800 dark:text-white ">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold my-12">
          Latest Updates & <span className="text-primary"> News</span>
        </h3>
        <p className="text-[12px] md:text-[18px] mb-12">
          Stay informed with the latest trends, insights, and stories from our
          community of freelancers and clients. Discover <br />
          expert tips, industry news, and platform updates—all in one place.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {updates.map((item, index) => (
          <div
            data-aos="fade-down"
            key={index}
            className="bg-white dark:bg-zinc-600 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 dark:text-zinc-200 mb-1">
                By {item.author}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-zinc-300 mb-4">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 text-xs rounded-full ${
                      tag === "Health"
                        ? "bg-blue-100 text-blue-600"
                        : tag === "Business"
                        ? "bg-purple-100 text-purple-600"
                        : tag === "Banking"
                        ? "bg-rose-100 text-rose-600"
                        : tag === "Stylish"
                        ? "bg-green-100 text-green-600"
                        : tag === "Fashion"
                        ? "bg-orange-100 text-orange-600"
                        : tag === "Wedding"
                        ? "bg-lime-100 text-lime-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestUpdates;
