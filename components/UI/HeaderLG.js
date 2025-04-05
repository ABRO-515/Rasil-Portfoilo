"use client"
import { Link as ScrollLink } from 'react-scroll';
export default function HeaderLG() {
  return (
    <main className="w-full h-full" >
      <div className="bg-black lg:flex hidden px-16 my-3 py-3 items-center  text-white mx-16 rounded-full justify-between" >
        <h1 className="file text-2xl  text-white" >R.A</h1>
        <ul className='flex gap-4 ' >
       
            <ScrollLink to="Home" smooth={true} duration={450} ><li className="list-none file  hover:text-gray-400 text-white cursor-pointer" >Home</li></ScrollLink>
            <ScrollLink to="About" smooth={true} duration={450}  ><li className="list-none file hover:text-gray-400 text-white cursor-pointer" >About</li></ScrollLink>
            <ScrollLink to="Projects" smooth={true} duration={450}  ><li className="list-none file hover:text-gray-400 text-white cursor-pointer" >Projects</li></ScrollLink>
            <ScrollLink to="Skills" smooth={true} duration={450}  ><li className="list-none file hover:text-gray-400 text-white cursor-pointer" >Skills</li></ScrollLink>
            <a
              href="/resume.pdf"  // PDF file should be in public folder
              className="hover:text-gray-400 file cursor-pointer"
              download="Rasil-Abro-Resume.pdf"
              target="_blank" rel="noopener noreferrer">Resume</a>

            <ScrollLink to="Now" smooth={true} duration={450} ><li className="list-none file hover:text-gray-400 cursor-pointer" >Now</li></ScrollLink>
        </ul>
      </div>
    </main>
  )
}
