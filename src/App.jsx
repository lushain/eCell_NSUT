import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Stats from './components/Stats';
import ChromaSection from "./components/ChromaSection";
import CarGrid from "./components/CarGrid";

const App = () => {
  return (
   <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    </div>
    <div className = "bg-gray-950 py-1 px-6 my-12">
     <div>
      <Stats />
    </div>
    </div>
    <div className="lg:mt-36  mx-15">
      <CarGrid />
    </div>
    
   </>
  )
}

export default App
