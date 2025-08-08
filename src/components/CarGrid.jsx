import React from 'react';

const cards = [
  {
    id: 1,
    title: "Noteworthy tech acquisitions 2021",
    description:
      "Biggest enterprise tech acquisitions of 2021 in reverse chronological order.",
    url: "#",
  },
  {
    id: 2,
    title: "Next Gen AI Tools",
    description:
      "Discover the new AI tools that are transforming the tech landscape in 2025.",
    url: "#",
  },
  {
    id: 3,
    title: "Cloud Migration Trends",
    description:
      "Companies are shifting to cloud-native infrastructures faster than ever.",
    url: "#",
  },
  {
    id: 4,
    title: "Cybersecurity Insights",
    description:
      "Learn how cybersecurity is evolving to keep up with threats in 2025.",
    url: "#",
  },
];

const CardGrid = () => {
  return (
    <section className="p-6 bg-transparent">
      <h2 className="text-3xl font-bold text-white mb-6 ml-12">Our Initiatives</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-transparent">
      {cards.map(({ id, title, description, url }) => (
        <div
          key={id}
          className="flex flex-col justify-between h-full p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <a href={url}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-300">{description}</p>
          </div>

          <a
            href={url}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
    </section>
  );
};

export default CardGrid;
