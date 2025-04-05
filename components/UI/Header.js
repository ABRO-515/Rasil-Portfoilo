"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Clock from "./Clock"
import { Link as ScrollLink } from 'react-scroll';
import { useEffect } from "react"; // ⬅ Import useEffect
import Link from "next/link";

export default function Header() {


  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }



  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Ensure reset on unmount
    };
  }, [isOpen]); // Runs when isOpen changes


  return (
    <main className="w-full h-full overflow-hidden lg:hidden ">
      {/* Navbar */}
      <div className={` w-full border-b  py-3 z-20 transition-colors duration-300 ${isOpen ? "bg-black text-white" : "bg-[#e6e4e4] text-black"}`}>
        <div className="my-[1px] mx-4">
          <div className={`w-full h-[7.5px] transition-colors duration-300 ${isOpen ? "bg-white" : "bg-black"}`}></div>
          <div className="flex items-center justify-between mt-[3px]">
            <h1 className="neue font-bold text-[1.7rem] tracking-tighter uppercase">R.A</h1>

            {/* Toggle Button: Menu (default) / Close (when sidebar is open) */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoClose size={30} className="transition-colors duration-300" /> : <HiMenuAlt4 size={30} className="transition-colors duration-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar (Slides in from Right) */}
      <div className={`fixed  bg-black z-10  right-0 w-full h-screen  text-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 z-10`}>
        <div className="p-6 flex flex-col h-screen">
          {/* Menu Items */}
          <nav className="mt-2 flex flex-col space-y-5  text-xl font-medium">
            <div className="flex font-light gap-2 items-center" >
              <h3>KHI | PAK</h3>
              <div className="invert-75 text-sm rounded-full ml-3 blink">⚫</div>
              <Clock />
            </div>


            <ScrollLink to="Home" smooth={true} duration={450} onClick={handleMenu} ><li className="list-none hover:text-gray-400" >Home</li></ScrollLink>
            <ScrollLink to="About" smooth={true} duration={450} onClick={handleMenu} ><li className="list-none hover:text-gray-400" >About</li></ScrollLink>
            <ScrollLink to="Projects" smooth={true} duration={450} onClick={handleMenu} ><li className="list-none hover:text-gray-400" >Projects</li></ScrollLink>



            <div className="w-full h-[7.5px] bg-white" >  </div>
            <ScrollLink to="Skills" smooth={true} duration={450} onClick={handleMenu} ><li className="list-none hover:text-gray-400" >Skills</li></ScrollLink>
            <a
              href="/resume.pdf"  // PDF file should be in public folder
              className="hover:text-gray-400"
              download="Rasil-Abro-Resume.pdf"
              target="_blank" rel="noopener noreferrer">Resume</a>

            <ScrollLink to="Now" smooth={true} duration={450} onClick={handleMenu} ><li className="list-none hover:text-gray-400" >Now</li></ScrollLink>
            
            <div className="w-full h-[7.5px] bg-white" >  </div>
            <h2>Socials</h2>
            <div className="flex gap-5" >


              <Link href="https://github.com/ABRO-515" ><div className="bg-white p-2 rounded-full" >
                <FaGithub className="invert" size={24} />
              </div></Link>
              <Link href="https://www.linkedin.com/in/rasil-abro-28183a344" ><div className="bg-white p-2 rounded-full" >
                <FaLinkedinIn className="invert" size={24} />
              </div></Link>
              <Link href="https://api.whatsapp.com/send/?phone=3010127971&text=Hi%21+Rasil+Abro+How+Are+You%3F&type=phone_number&app_absent=0"><div className="bg-white p-2 rounded-full" >
                <IoLogoWhatsapp className="invert" size={24} />
              </div></Link>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}
