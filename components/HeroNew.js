import Image from "next/image";
import Marque from "./UI/Marque";
import { FaConnectdevelop } from "react-icons/fa";

export default function HeroNew() {
  return (
    <main className="w-full text-black min-h-[50vh] lg:h-fit bg-[#e6e4e4]" id="Home"  >
       <Marque/>
         <div className="flex flex-col mx-3 " >
         <h1 className="file uppercase my-8 xl:my-0 font-medium text-[3.8rem] tracking-tighter text-center  md:text-[8rem] lg:text-[10.2rem] xl:text-[13.9rem] 2xl:text-[15rem]" >RAsil Abro</h1>

         <h3 className="uppercase my-8 font-medium  w-[8rem] md:w-[10.8rem]  text-left ml-6 lg:ml-10 xl:ml-[7vw] 2xl:ml-24 mt-5 text-xs" >Welcome to my portfolio! I love building responsive and user-friendly web interfaces while honing my skills in modern web technologies.</h3>
         <div className="flex justify-end mr-8 my-8  xl:my-0 " >

         <FaConnectdevelop  className='animate-spin-y text-9xl xl:text-[15rem] text-[#44403c] '  />
         </div>
         </div>

         {/* Image */}
          
   
    
    </main>
  )
}
