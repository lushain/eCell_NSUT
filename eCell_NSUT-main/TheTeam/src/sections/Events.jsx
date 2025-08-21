import { CheckCheck } from 'lucide-react';
import React, { useState } from 'react';

// Data for all 8 events
const eventData = [
  {
    name: 'RunNeeti',
    title: 'RunNeeti: The IPL Auction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastro dolore eu fugiat nulla pariatur. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    features: [
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    ],
    image: 'https://images.unsplash.com/photo-1579586337278-35d19d693582?q=80&w=2070',
  },
  {
    name: 'Bazaar BreakOut',
    title: 'Bazaar BreakOut: Market Challenge',
    description:
      'A dynamic market simulation where teams strategize to launch a new product. Participants will face real-world challenges including budget constraints, competitive analysis, and marketing campaigns to capture the largest market share.',
    features: [
      'Develop a comprehensive business plan.',
      'Pitch your product to a panel of mock investors.',
      'Navigate unexpected market shifts and crises.',
    ],
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e2775df?q=80&w=2070',
  },
  {
    name: 'KaryaNeeti',
    title: 'KaryaNeeti: The Policy Maker',
    description:
      'Step into the shoes of a policymaker in this intense simulation. Address pressing socio-economic issues by drafting and debating policies. Your goal is to create a sustainable and equitable framework that fosters national growth.',
    features: ['Analyze complex socio-economic data.', 'Draft and present a comprehensive policy proposal.'],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
  },
  {
    name: 'Startup Sabha',
    title: 'Startup Sabha: The Pitch Battle',
    description:
      'The ultimate showdown for aspiring entrepreneurs. Pitch your groundbreaking startup idea to a panel of venture capitalists and industry titans. This is your chance to secure mentorship, funding, and the recognition you deserve.',
    features: ['Refine and perfect your startup pitch.', 'Receive direct feedback from industry experts.'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
  },
  {
    name: 'Dharma of Duels',
    title: 'Dharma of Duels: A Case Study',
    description:
      'A case study competition that challenges your analytical and problem-solving skills. Dive deep into real-world business scenarios, dissect complex issues, and present innovative solutions to a panel of esteemed judges.',
    features: ['Analyze real-world business cases.', 'Develop and present innovative solutions.'],
    image: 'https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=2069',
  },
  {
    name: 'Chankayan Gambit',
    title: 'Chankayan Gambit: Strategic Challenge',
    description:
      'A test of strategic foresight and diplomacy. Inspired by the ancient tactician Chanakya, this event requires participants to navigate complex geopolitical and business landscapes, making alliances and decisions that have far-reaching consequences.',
    features: ['Navigate complex strategic scenarios.', 'Form alliances and negotiate terms.'],
    image: 'https://images.unsplash.com/photo-1542626991-a24188442412?q=80&w=2070',
  },
  {
    name: 'F1 Fiesta',
    title: 'F1 Fiesta: The Racing Simulation',
    description:
      "Experience the high-octane world of Formula 1. This simulation event tests your ability to manage a racing team, from car setup and pit stop strategy to driver management. Make split-second decisions to lead your team to the podium.",
    features: ["Manage your team's budget and resources.", 'Develop a winning race strategy.'],
    image: 'https://images.unsplash.com/photo-1552674392-0e4b8a221151?q=80&w=1974',
  },
  {
    name: 'ReThink',
    title: 'ReThink: The Innovation Challenge',
    description:
      "A brainstorming and ideation event designed to solve some of the world's most pressing problems. Teams will collaborate to generate out-of-the-box solutions and present a roadmap for implementation. It's time to challenge the status quo.",
    features: ['Tackle a real-world grand challenge.', 'Collaborate in a fast-paced creative environment.'],
    image: 'https://images.unsplash.com/photo-1531538606176-4ab03f24de3f?q=80&w=1974',
  },
];

// Gold check icon
const CheckIcon = () => (
  <CheckCheck className="w-5 h-5 text-brand-yellow mr-2" />
);

const Events = () => {
  const [activeEventName, setActiveEventName] = useState('RunNeeti');
  const activeEventData =
    eventData.find((event) => event.name === activeEventName) || eventData[0];

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
    <section className="py-16 bg-white">
      <h2 className="font-unifraktur text-center text-5xl md:text-6xl tracking-tight mb-8">
        Events
      </h2>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[260px,1fr]">
          {/* Left: event list */}
          <aside className="w-full">
            <div className="border border-gray-300 rounded p-1">
              <ul className="space-y-1">
                {eventData.map((event) => {
                  const selected = activeEventName === event.name;
                  return (
                    <li key={event.name}>
                      <div
                        className={
                          selected
                            ? 'border border-black rounded'
                            : 'border-l-2 border-gray-300 pl-2'
                        }
                      >
                        <button
                          onClick={() => setActiveEventName(event.name)}
                          className="w-full text-left p-3 text-base"
                        >
                          <span className="font-semibold">{event.name}</span>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Right: content card */}
          <article className="w-full">
            <div className="border border-gray-200 rounded p-6">
              <div className="grid gap-8 lg:grid-cols-5 items-start">
                {/* Text */}
                <div className="lg:col-span-3">
                  <h3 className="text-3xl font-bold text-black">
                    {activeEventData.title}
                  </h3>
                  <p className="mt-2 text-gray-700 italic">
                    {activeEventData.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {activeEventData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-800">{feature}</span>
                      </li>
                    ))}
                  </ul>

                 
                </div>

                {/* Image */}
                <div className="lg:col-span-2">
                  <img
                    src={activeEventData.image}
                    alt={activeEventData.title}
                    className="w-full h-auto rounded border border-gray-200 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="pt-8 flex justify-center">
                    <button className="rounded border-2 border-black px-8 py-2.5 font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-black hover:text-white">
                      Get Started
                    </button>
                  </div>
            </div>
          </article>
           
        </div>
      </div>
       <div className='text-gray-200 text-4xl text-center'>
        _______________________________________________________________________________________________
      </div>
    </section>
    </>
  );
};

export default Events;
