
import eSummitLogo from '../assets/Esummit-logo.svg';
import emblem from '../assets/Emblem.png';


const Hero = () => {
  

  
  return (
    <section className="py-10 bg-transparent  ">

   
    
      <div className="grid grid-cols-2 
      xs:gap-10 
      sm:gap-20 sm:ml-25
      md:gap-28 md:ml-50
      lg:ml-43 lg:gap-165 lg:-mt-5">
        
          <div><img 
            src={emblem} 
            alt="Emblem of India" 
            className="h-32 lg:h-48" 
          /></div>
          
          
          <div>
          <img 
            src={emblem} 
            alt="Emblem of India" 
            className="h-32 lg:h-48" 
          /></div>
        </div>
      
      <div>
        <img 
          src={eSummitLogo} 
          alt="eSummit Logo" 
          className="mx-auto lg:mt-10 lg:h-96 
          md:h-48 translate-y-[-320px] translate-x-[60px]" 
        />
      </div>

       <div className="-mt-105 bg-[#808080] h-[0.5px] w-7/8 ml-21"> 
        
      </div>
      <div className="mt-1 bg-[#808080] h-[2px] w-11/12 ml-13"> 
      
    </div>
    

          
    </section>
  );
};

export default Hero;