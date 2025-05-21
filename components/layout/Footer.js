"use client"
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
          <ScrollLink to="Home" smooth={true} duration={450} ><h3 className="cursor-pointer text-xl neue font-bold">R.A</h3></ScrollLink>
          
            <p className="text-gray-300">
              Front-End Developer creating modern web experiences with React, Next.js, and TailwindCSS.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ABRO-515" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rasil-abro-28183a344" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=3010127971&text=Hi%21+Rasil+Abro+How+Are+You%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors">
                <IoLogoWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <ScrollLink to="Home" smooth={true} duration={450} ><li className="list-none   hover:text-white text-gray-300 cursor-pointer" >Home</li></ScrollLink>
              <ScrollLink to="About" smooth={true} duration={450}  ><li className="list-none  hover:text-white text-gray-300 cursor-pointer" >About</li></ScrollLink>
              <ScrollLink to="Projects" smooth={true} duration={450}  ><li className="list-none  hover:text-white text-gray-300 cursor-pointer" >Projects</li></ScrollLink>
              <ScrollLink to="Skills" smooth={true} duration={450}  ><li className="list-none  hover:text-white text-gray-300 cursor-pointer" >Skills</li></ScrollLink>
            </ul>
          </div>

          {/* Contact/Resume Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Get In Touch</h3>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <FaEnvelope size={18} />
              <a href="mailto:rasilabro515@gmail.com">rasilabro515@gmail.com</a>
            </div>
            <button
              className="flex items-center cursor-pointer space-x-2 bg-[#524B41] hover:bg-[#282622] text-white px-4 py-2 rounded-md transition-colors"
              onClick={() => {
                // PDF download logic here
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Rasil-Abro-Resume.pdf';
                link.click();
              }}
            >
              <FaFileDownload size={18} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} R.A. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}