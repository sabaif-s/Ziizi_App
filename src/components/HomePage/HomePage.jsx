import React,{useState,useEffect} from 'react';
import { use } from 'react';

const  HomePage = () => {
    const [showJobs,setShowJobs]=useState("first");
    const [reRun,setReRun]=useState(0);
    const [firstImageLoaded,setFirstImageLoaded]=useState(false);
    const [secondImageLoaded,setSecondImageLoaded]=useState(false);
    const [imageLoaded,setImageLoaded]=useState(false);
    useEffect(() => {
        if (showJobs === "first" || reRun > 0) {
          const states = ["first", "second", "third"]; // Define the sequence of states
          let index = 1;
    
          const interval = setInterval(() => {
            setShowJobs(states[index]);
            index++;
    
            if (index >= states.length) {
              clearInterval(interval);
              setReRun((prev) => prev + 1); // Increment reRun after completing the sequence
            }
          }, 3000);
    
          return () => clearInterval(interval); // Cleanup on re-render
        }
      }, [reRun]); // Only re-run when `reRun` changes
    
    useEffect(()=>{
       if(firstImageLoad && secondImageLoad){
        setImageLoaded(true);
       }
    },[firstImageLoaded,secondImageLoaded]);
    const firstImageLoad=()=>{
        setFirstImageLoaded(true);
    }
    const secondImageLoad=()=>{
        setSecondImageLoaded(true);
    }
     
    return (
        <div className={` ${imageLoaded ? "":"hidden"} w-full overflow-x-hidden bg-white relative mt-16 flex flex-col justify-between items-center`} style={{height:'calc(100vh - 160px)'}} >
            <div className='w-full h-full bg-gray-300 flex flex-row justify-start gap-x-2' style={{marginLeft:"220px"}} >
               <div className='w-1/2 bg-white  flex flex-col gap-y-8' >
               <div className="w-full flex items-center gap-x-4 py-4 bg-gray-100">
  {/* Text Section */}
  <span className="text-2xl font-bold text-gray-800">
    HELLO
  </span>

  {/* Divider */}
  <div className="flex-1 border-b-2 border-gray-800"></div>
</div>
                <div className='w-full text-center flex justify-start items-center' >
                    <span className='text-5xl relative z-10 font-bold animate-colorChange' >I AM ZIIZII HUSEEN</span>
                    <span className='absolute z-0 left-4 text-8xl opacity-50 text-gray-300 font-bold tracking-widest' >ZIIZII</span>
                    <div className='absolute left-2 border-4 border-l-0 border-gray-300 p-2' >
                       <span className='text-8xl opacity-0'>Z</span>
                    </div>
                </div>
                <div className="py-6 relative text-xl font-mono text-black overflow-hidden whitespace-nowrap bg-gray-100 flex justify-center items-center">
                    <div className={` ${showJobs != "" ? "animate-typing":""} overflow-hidden`} >
                    <span className="text-lg text-center block overflow-x-hidden border-r-2 border-black font-bold text-gray-800 tracking-wide animate-blink">
   {showJobs == "first" ? "BLOGGER":""} {showJobs == "second" ? "Youtube":""} {showJobs == "third" ? "Content Creator":""} <span className={`${showJobs != "" ? "":"hidden"}`} > &bull; </span> 
  </span>
                    </div>
 
</div>
<div className="flex gap-x-4">
  {/* Join Us Button */}
  <div>
    <button className="px-6 py-2 bg-gradient-to-r from-blue-800 to-blue-200 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      JOIN US
    </button>
  </div>

  {/* Play Button */}
  <div>
    <button className="px-6 py-2 bg-gray-200 bg-opacity-0 border-2 border-cyan-500 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
      PLAY
    </button>
  </div>
</div>
               </div>
               <div className='w-1/2 bg-white flex justify-start items-center' >
                  <div className='w-2/3 bg-gray-400 animate-slideDown bg-opacity-20 h-72 flex items-center justify-center rounded-full' >
                        <img src="/Ziizi_App/ziizii2.jpg" onLoad={firstImageLoad} className='w-72 h-72 object-cover rounded-full' alt="" />
                  </div>
               </div>
            </div>
            <div className='w-full bg-red-300 flex flex-row justify-start gap-x-2' style={{marginLeft:"220px"}} >
               <div className='w-1/2 bg-gray-700 flex justify-center' >
                   <div className='w-72 animate-slideRight h-full flex justify-center  bg-gray-200 rounded-full' >
                     <img src="/Ziizi_App/ziizi.jpg" onLoad={secondImageLoad} className='rounded-full w-64 h-full' alt="" />
                   </div>
               </div>
               <div className='bg-white pr-32 overflow-hidden w-1/2 pl- flex justify-start items-center ' >
               <div className=' h-full flex items-center overflow-hidden px-6' >
               <span className="text-lg pl-6 animate-slideLeft text-center word-break overflow-x-hidden font-bold text-gray-800 tracking-wide">
               Transform your life with [Ziizii Vlog]. Our blog offers tips, advice, and inspiration to help you unlock your potential and achieve your goals. Explore topics like productivity, mindfulness, and self-growth to create a better you!
  </span>

               </div>
  
               </div>
            </div>
            </div>
    );
};

export default  HomePage;