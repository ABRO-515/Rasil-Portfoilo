'use client';
import { FiCode, FiBook, FiGlobe, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Now() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 md:px-8 lg:px-1    pb-12"
      id="Now"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 bg-[#e6e4e4] justify-center">
        <h2 className="text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] text-center xl:text-[6rem] font-bold file tracking-tight">
          What I'm Doing <span className="text-[#524B41]">Now</span>
        </h2>
        <span className="text-sm text-gray-500 mt-2">(Updated: {lastUpdated})</span>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Work Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#ededed] p-6 rounded-xl border text-black border-[#333]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-full">
              <FiCode className="text-amber-500 text-xl" />
            </div>
            <h3 className="text-xl font-semibold">At Work</h3>
            <span className="text-xs bg-amber-500/20 text-black px-2 py-1 rounded-full ml-auto">
              360 Xpert Solutions
            </span>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-2 text-black">
              <span className="text-amber-500">↳</span>
              <div>
                <span> Building responsive UIs with </span><span className="text-black font-medium">React/Next.js</span>
              </div>
            </li>
            <li className="flex gap-2 text-black">
              <span className="text-amber-500">↳</span>
              <div>
                <span>Learning</span> <span className=" font-medium">state management</span> <span>patterns </span>
              </div>

            </li>
            <li className="flex gap-2 text-black">
              <span className="text-amber-500">↳</span>
              <div>
                <span>  Contributing to </span> <span className=" font-medium">design systems</span>
              </div>

            </li>
          </ul>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#ededed] p-6 rounded-xl border border-[#333]"
        >
          <div className="flex items-center gap-3 mb-4 text-black">
            <div className="p-2 bg-blue-500/10 rounded-full">
              <FiTrendingUp className="text-blue-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold">Skill Development</h3>
          </div>
          <ul className="space-y-3  text-black">
            <li className="flex gap-2 text-black">
              <span className="text-blue-400">▹</span>
              <div>
                <span> Mastering  </span><span className=" font-medium">JavaScript</span>
              </div>

            </li>
            <li className="flex gap-2 text-black">
              <span className="text-blue-400">▹</span>
              <div>
                <span>Experimenting with  </span><span className=" font-medium">Three.js</span>
              </div>
            </li>
            <li className="flex gap-2 text-black" >
              <span className="text-blue-400">▹</span>
              <div>
                <span>Optimizing   </span><span className=" font-medium">Lighthouse scores</span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Learning Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#ededed] p-6 rounded-xl border border-[#333]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/10 rounded-full">
              <FiBook className="text-purple-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold">Learning Focus</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-black mb-1">Next.js 15 Features</h4>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div
                  className="bg-purple-500 h-1.5 rounded-full"
                  style={{ width: '55%' }}
                ></div>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-black mb-1">React.js 19 Features</h4>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div
                  className="bg-purple-500 h-1.5 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personal Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#ededed] p-6 rounded-xl border border-[#333]"
        >
          <div className="flex items-center gap-3 mb-4 text-black">
            <div className="p-2 bg-green-500/10 rounded-full">
              <FiGlobe className="text-green-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold">Beyond Code</h3>
          </div>
          <ul className="space-y-3  text-black">
            <li className="flex gap-2">
              <span className="text-green-400">✦</span>
              Attending tech events and seminars.
            </li>
            <li className="flex gap-2 text-black">
              <span className="text-green-400">✦</span>
              Exploring blockchain technology.
            </li>
            <li className="flex gap-2 text-black">
              <span className="text-green-400">✦</span>
              Reading about tech and entrepreneurship.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
