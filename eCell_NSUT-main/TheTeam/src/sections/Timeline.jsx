import React, { useState } from 'react';

const TimelineHeader = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=UnifrakturCook:wght@700&family=Great+Vibes&display=swap');

          .font-cinzel { font-family: 'Cinzel', serif; }
          .font-unifraktur { font-family: 'UnifrakturCook', cursive; }
          .font-great-vibes { font-family: 'Great Vibes', cursive; }
        `}
      </style>

      <header className="bg-white py-10">
        <div className="flex justify-center items-center gap-4 md:gap-8 px-4">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png"
            alt="Emblem of India"
            className="h-16 md:h-24 w-auto object-contain"
          />

          <div className="text-center">
            
            <h1 className="flex items-center justify-center text-3xl md:text-8xl text-black my-1">
              <span className="font-unifraktur mr-1 text-4xl">
                <span className="font-serif text-xl md:text-2xl ">E</span>
                -Summit
              </span>
              <span className="font-great-vibes text-[2rem] md:text-[3rem] ml-1">
                -25
              </span>
            </h1>
            <div className="w-full max-w-md mx-auto h-px bg-[#9CA3AF] mt-2"></div>
            <p className="font-cinzel text-md md:text-lg text-[#4B5563] tracking-widest mt-3">
              Timeline
            </p>
          </div>

         
        </div>
      </header>
    </>
  );
};

const Timeline = () => {
  const [hoveredYear, setHoveredYear] = useState(null);

  const timelineData = [
    {
      year: 2019,
      date: 'February 10-12',
      header1: 'The Genesis Edition',
      header2: 'Inaugural Speaker Sessions',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      bwImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&grayscale&sat=-100'
    },
    {
      year: 2020,
      date: 'March 5-7',
      header1: 'Scaling New Heights',
      header2: 'Expanded Competitions',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      bwImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&grayscale&sat=-100'
    },
    {
      year: 2021,
      date: 'April 15-17',
      header1: 'The Virtual Pivot',
      header2: 'First Fully-Online Summit',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      bwImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&grayscale&sat=-100'
    },
    {
      year: 2022,
      date: 'March 20-22',
      header1: 'Hybrid Horizons',
      header2: 'Combining Online & Offline',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      bwImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&grayscale&sat=-100'
    },
    {
      year: 2023,
      date: 'April 2-4',
      header1: 'Decade of Disruption',
      header2: 'Focus on Deep Tech & AI',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop',
      bwImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&grayscale&sat=-100'
    },
    {
      year: 2024,
      date: 'March 15-17',
      header1: 'Innovate, Integrate, Inspire',
      header2: 'Policy-making Conclave',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      bwImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&grayscale&sat=-100'
    }
  ];

  const event2025 = {
    year: 2025,
    date: 'August 22-24',
    header1: 'Startup Pitch Battles',
    header2: 'Case Study Challenges',
    header3: 'Crisis Management Simulations',
    header4: 'Talks by Renowned Industry Leaders',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    ],
    bwImages: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&grayscale&sat=-100',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&grayscale&sat=-100',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&grayscale&sat=-100'
    ]
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-serif text-gray-800">
      <TimelineHeader />

      <main className="max-w-7xl mx-auto p-8">
        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {timelineData.map((item) => (
            <div
              key={item.year}
              className="relative h-64 bg-gray-900 border border-gray-400 shadow-lg cursor-pointer transition-all duration-300 ease-out overflow-hidden hover:shadow-2xl"
              onMouseEnter={() => setHoveredYear(item.year)}
              onMouseLeave={() => setHoveredYear(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${hoveredYear === item.year ? item.image : item.bwImage})`,
                  opacity: hoveredYear === item.year ? 1 : 0.7,
                  filter: hoveredYear !== item.year ? 'grayscale(100%)' : 'none',
                }}
              />
              <div className="absolute inset-0 bg-black/60 transition-all duration-300 hover:bg-black/70" />
              <div className="absolute inset-0 p-6 flex flex-col justify-center text-center z-10">
                <p className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{item.year}</p>
                <p className="text-md text-gray-300 mb-4 drop-shadow-md italic">{item.date}</p>
                <div className={`transition-opacity duration-300 ${hoveredYear === item.year ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="space-y-1 animate-fadeIn">
                    <p className="text-gray-100 text-sm font-semibold drop-shadow-md">{item.header1}</p>
                    <p className="text-gray-100 text-sm font-semibold drop-shadow-md">{item.header2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 2025 Big Tile with Images */}
          <div
            className="relative h-80 bg-gray-900 border border-gray-400 shadow-lg cursor-pointer transition-all duration-300 ease-out overflow-hidden hover:shadow-2xl md:col-span-2 lg:col-span-3"
            onMouseEnter={() => setHoveredYear(2025)}
            onMouseLeave={() => setHoveredYear(null)}
          >
            <div className="absolute inset-0 flex">
              {event2025.images.map((img, index) => (
                <div
                  key={index}
                  className="flex-1 bg-cover bg-center transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${hoveredYear === 2025 ? event2025.images.at(index) : event2025.bwImages.at(index)})`,
                    opacity: hoveredYear === 2025 ? 1 : 0.7,
                    filter: hoveredYear !== 2025 ? 'grayscale(100%)' : 'none',
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-black/60 transition-all duration-300 hover:bg-black/70" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-center z-10">
              <p className="text-7xl font-bold text-white mb-3 drop-shadow-lg">{event2025.year}</p>
              <p className="text-2xl text-gray-300 mb-6 drop-shadow-md italic">{event2025.date}</p>
              <div className={`transition-opacity duration-300 ${hoveredYear === 2025 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="space-y-2 animate-fadeIn">
                  <p className="text-gray-100 text-lg font-semibold tracking-wide drop-shadow-md">{event2025.header1}</p>
                  <p className="text-gray-100 text-lg font-semibold tracking-wide drop-shadow-md">{event2025.header2}</p>
                  <p className="text-gray-100 text-lg font-semibold tracking-wide drop-shadow-md">{event2025.header3}</p>
                  <p className="text-gray-100 text-lg font-semibold tracking-wide drop-shadow-md">{event2025.header4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className='text-gray-200 text-4xl text-center'>
        _______________________________________________________________________________________________
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
       
    </div>
  );
};

export default Timeline;