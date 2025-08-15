import React from 'react';
import Spline from '@splinetool/react-spline';
import TextType from './TextType';


const HeroSection = () => {
  return (
    <div className="bg-transparent w-full px-0 lg:mt-5">

      <div className="flex flex-col lg:flex-row items-center justify-between h-screen overflow-visible">
        
        {/* LEFT - Spline */}
        <div className="flex justify-center items-center w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full lg:-mt-25  overflow-x-visible">
          <Spline
            scene="https://prod.spline.design/J9wDzo1qyXHNkVSU/scene.splinecode"
            className="scale-[0.9] sm:scale-[0.85] lg:scale-100 overflow-visible lg:translate-x-[60px] sm:translate-x-[-190px]"
          />
        </div>

        {/* RIGHT - Hero Text */}
        <div className="w-full lg:w-1/2 flex flex-col lg:text-left lg:-mt-40  lg:translate-x-[-80px] sm:mb-40 ">
          <h1 className="text-4xl sm:text-4xl lg:text-7xl tracking-wide leading-tight sm:translate-y-[-270px] sm:translate-x-[250px] lg:translate-y-[60px] lg:translate-x-[-20px]">
            <span className="whitespace-nowrap ">Bring the Innovation</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Game On
            </span>
          </h1>
          <TextType 
  text={["eCell NSUT aims to inspire and empower students to think innovatively, embrace risk, and turn entrepreneurial dreams into reality through skill building events, industry exposure, and collaborative opportunities."]}
  typingSpeed={20}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"

  className="mt-4 text-lg text-neutral-400 max-w-2xl sm:invisible lg:visible lg:translate-x-[-20px] lg:translate-y-[60px]"
/>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;
