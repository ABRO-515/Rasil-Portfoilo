'use client';

import Gallery from '@/components/imagesGallery/Gallery';
import { MdOutlineInsertLink } from "react-icons/md";

export default function ProjectDetailCard({
  name,
  year,
  image,
  description,
  link,
  tech1, tech2, tech3, tech4,
  keyFeature1, keyFeature2, keyFeature3, keyFeature4,
  challenge
}) {
  return (
    <div className="min-h-screen px-6 md:px-20 py-20 text-black flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <h3 className="uppercase text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center">
          {name}
        </h3>

        {/* Gallery */}
        <div className="w-full">
          <Gallery />

          {/* Demo Button */}
          {link && (
            <div className="mt-6 flex justify-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#524B41] hover:bg-[#282622] text-white text-sm md:text-base rounded-lg shadow transition-all"
              >
                <MdOutlineInsertLink size={20} /> Live Demo
              </a>
            </div>
          )}

          <p className="text-gray-600 text-sm md:text-base mt-4 text-right">Year: {year}</p>
        </div>

        {/* Description and Info */}
        <div className="mt-12 prose prose-lg text-left">
          {/* Description */}
          <p className="mb-6">
            {description ||
              "This project showcases a modern solution to a common user challenge using cutting-edge front-end technologies. It features a highly responsive layout, engaging animations, and an intuitive UI."}
          </p>

          {/* Tech Stack */}
          <h2 className="text-2xl  font-semibold mt-8 mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside">
            <li>{tech1}</li>
            <li>{tech2}</li>
            <li>{tech3}</li>
            <li>{tech4}</li>
          </ul>

          {/* Key Features */}
          <h2 className="text-2xl font-semibold mt-8 mb-2">Key Features</h2>
          <ul className="list-disc list-inside">
            <li>{keyFeature1}</li>
            <li>{keyFeature2}</li>
            <li>{keyFeature3}</li>
            <li>{keyFeature4}</li>
          </ul>

          {/* My Role */}
          <h2 className="text-2xl font-semibold mt-8 mb-2">My Role</h2>
          <p>
            I designed and developed the front-end of this project from scratch. I handled layout structure, animation logic, component integration, and responsive design. I also worked with designers to translate wireframes into pixel-perfect UI.
          </p>

          {/* Challenges & Solutions */}
          <h2 className="text-2xl font-semibold mt-8 mb-2">Challenges & Solutions</h2>
          <p>{challenge}</p>
        </div>
      </div>
    </div>
  );
}
