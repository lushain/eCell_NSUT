import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Bring The Innovation <br></br>
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> Game On</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className = "bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                ESummit is LIVE!
            </a>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between max-w-7xl mx-auto px-4">
    
  {/* VIDEO: Always on right for large screens, on top for small screens */}
  <div className="w-full lg:w-1/2 mt-10">
    <video
      autoPlay
      loop
      muted
      className="rounded-lg w-full border border-orange-700 shadow-orange-400 mx-2 my-4"
    >
      <source src={video1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* TEXT CONTAINER: Left side on desktop, under video on mobile */}
  <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
    {/* Heading: always centered */}
    <h2 className="text-3xl sm:text-2xl md:text-xl lg:text-4xl font-bold text-orange-500 mt-4 lg:mt-0 mb-4">
      About Us
    </h2>

    {/* Paragraph: centered, responsive text */}
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-6">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..
    </p>
  </div>
</div>

    </div>
  )
}

export default HeroSection
