
import img1 from '../assets/img1.jpeg';
import video3 from "../assets/video3.mp4";
import ChromaGridUse from '../components/ChromaGridUse.jsx';
import ChromaGrid1Use from '../components/ChromaGrid1Use.jsx'
import TiltedCard from '../components/TiltedCard.jsx';
import TheTeamGroupPhoto from '../assets/TheTeamGroupPhoto.jpeg';

export const TheTeam = () => {
  return (
    <>

    <img src={img1} className="h-[800px] w-full -mt-31" />

<div>
   <h1 className="text-6xl font-bold text-center mt-10  text-[#fc7f02] bg-clip-text mask-b-from-0%">eCell TV</h1>
   <p className="text-center text-lg mt-3 font-bold mb-3">Join eCell to gain real world entrepreneurial exposure, network with industry leaders, </p>
   <p className="text-center  text-gray-300 text-lg mb-10 mt-1 font-bold "> hone problem solving skills, and be part of a driven community turning ideas into impact.
</p>
</div>

<div className="w-full lg:w-3/5 mx-auto ">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border-4 border-dashed border-[#fc7f02] "
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
</div>

<h2 className="text-4xl font-bold text-center mt-30 -mb-10 text-[#fc7f02] mask-b-from-0%">A WORD FROM THE PRESIDENT</h2>

<div className="flex justify-center items-center mt-30 mb-30">
<TiltedCard
  imageSrc={TheTeamGroupPhoto}
  containerHeight="70px"
  containerWidth="700px"
  imageHeight="450px"
  imageWidth="1000px"
  rotateAmplitude={5}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
   <p className="text-[20px] tilted-card-demo-text px-7 py-8 rounded w-[900px] h-[450px] text-justify translate-x-[50px] translate-y-[65px]">

  When I first joined eCell NSUT, I was simply curious about <span className="bg-gradient-to-r from-orange-300 to-orange-800 text-transparent bg-clip-text "> entrepreneurship.</span> 
  Over time, I saw how this community <span className="bg-gradient-to-r from-orange-300 to-orange-800 text-transparent bg-clip-text ">transforms curiosity into capability </span> and ideas into action. Every summit, competition, and late night brainstorming session has shown me the power of people coming together to build <span className="bg-gradient-to-r from-orange-300 to-orange-800 text-transparent bg-clip-text "> something meaningful</span>. eCell isn’t just about startups, it’s about courage, creativity, and connection. I’m excited for us to script the next big chapter together.

</p>

  }
/>
</div>
<div className='mt-140'>
  <div className="container mx-auto mt-30 lg:mb-100 md:mb-10">
    <h2 className="text-6xl font-bold text-center mb-10 mask-b-from-0% ">THE CORE</h2>
    
    <ChromaGridUse 
/>
       
</div>

 <div className="container mx-auto  mb-70  mt-120 ">
    <h2 className="text-6xl font-bold text-center mb-10 mask-b-from-0% mt-50" >DEPARTMENT HEADS</h2>
    
    <ChromaGrid1Use 
/>
       
</div>



</div>
    
    </>
  )
}
