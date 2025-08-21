
import eSummitLogo from '../assets/Official.jpg';
import emblemLogo from '../assets/Emblem.jpg';

const Hero = () => {
   const DateOrnament = () => (
    <div className="w-48 h-2 mx-auto md:mx-0 md:ml-auto bg-gray-300 rounded-full" >
    </div>
  );

  
  return (
    <section className="py-20 bg-white">
      
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-8 md:space-x-16 mb-20">
          <img 
            src={emblemLogo} 
            alt="Emblem of India" 
            className="h-32 md:h-48" 
          />
          <img 
            src={eSummitLogo} 
            alt="E-Summit '25 Official Logo" 
            className="max-w-xl md:max-w-4xl h-24 md:h-32"
          />
          <img 
            src={emblemLogo} 
            alt="Emblem of India" 
            className="h-32 md:h-48" 
          />
        </div>
         <div className='text-gray-200 text-4xl text-center'>
        _______________________________________________________________________________________________
      </div>
      <br/>
        {/* Info and Dates Section */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-start">
          {/* Left Column: Description */}
          <div className="text-gray-700 space-y-4 border-t-2 border-red-600 pt-3">
            <h3 className="text-red-600 font-bold text-xs tracking-wider">BECAUSE HUSTLES DESERVE HEADLINES :</h3>
            <p className="text-base leading-relaxed">
              Get ready for the grandest edition yet of our annual E-Summit, the flagship event of E-CELL NSUT. This year, we explore the dynamic journey of the Indian economy through the ages, blending tradition with innovation. With a thrilling lineup of competitions including auctions, case study challenges, startup pitch battles, brand strategy games, and crisis management simulations, the summit promises an unmatched platform for learning, strategy, creativity and networking.
            </p>
            <p className="text-base leading-relaxed">
              Join a vibrant crowd of over 25,000 participants, from aspiring entrepreneurs to seasoned professionals. Be inspired by renowned industry leaders and entrepreneurs during our speaker sessions, sharing insights that matter in today's fast-changing economic landscape.
            </p>
            <p className="text-base leading-relaxed">
              Whether you're a budding founder, a finance enthusiast, or a strategy genius, this year's E-Summit is your launchpad. Bigger, bolder, and more impactful — this is not just an event, it's a movement. Are you ready to witness the future of finance?
            </p>
          </div>

          {/* Right Column: Dates */}
          <div className="text-center md:text-right space-y-6">
            <DateOrnament />
            <div className="font-serif text-5xl md:text-6xl text-black space-y-2">
              <h2>22 August'2025</h2>
              <h2>23 August'2025</h2>
              <h2>24 August'2025</h2>
            </div>
            <DateOrnament />
          </div>
        </div>
      </div>
      <div className='text-gray-200 text-4xl text-center'>
        _______________________________________________________________________________________________
      </div>

    </section>
  );
};

export default Hero;