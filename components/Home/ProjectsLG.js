"use client";

import Link from "next/link";
import useHoverImage from "../Hook/useHoverImage";


const awards = [
  {
    name: "E-Commerce",
    year: "2025",
    image: "/projects/e-com.png",
    slug: "exclusive-ecom",
  },
  {
    name: "Real-Estate",
    year: "2025",
    image: "/projects/real.png",
    slug: "zarghab-real-estate",
  },
  {
    name: "EZY Logistics",
    year: "2025",
    image: "/projects/EZY.png",
    slug: "ezy-logistics",
  },
  {
    name: "3D Book",
    year: "2025",
    image: "/projects/VR.png",
    slug: "book-slider",
  },
  {
    name: "Creative",
    year: "2025",
    image: "/projects/cr.png",
    slug: "creative-portfolio",
  },
];

export default function ProjectsLG() {
  const { hoveredImage, handleMouseEnter, handleMouseLeave, imageRef } =
    useHoverImage();

  return (
    <div className="mx-16 xl:mx-24 mt-10 px-4 relative hidden lg:block">
      <div className="flex items-center justify-center">
        <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] mb-8">
          SOME Featured Work
        </h3>
      </div>

      {awards.map((award, index) => (
        <Link href={`/projects/${award.slug}`} key={index}>
          <div
            className="flex justify-between items-center py-8 border-t border-gray-500 text-black text-lg font-bold relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(award.image)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-3xl file">{award.name}</span>
            <span>{award.year}</span>
          </div>
        </Link>
      ))}

      <div className="border-t border-gray-500"></div>

      {/* Hover Image */}
      {hoveredImage && (
        <img
          ref={imageRef}
          src={hoveredImage}
          alt="Hovered Award"
          className="w-56 h-56 object-cover pointer-events-none top-0 left-0 absolute z-[100] opacity-100 rounded-lg shadow-xl border-2 border-white"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      )}
    </div>
  );
}
