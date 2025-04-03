"use client";

import Link from "next/link";
import useHoverImage from "./Hook/useHoverImage";

const awards = [
  { name: "E-Commerce", year: "2025", image: "/projects/e-com.png" , link: "https://exclusive-e-com-rasil.vercel.app/"  },
  { name: "Real-Estate", year: "2025", image: "/projects/real.png" , link: "https://zarghab-real-estate.vercel.app/pages/admin/dashboard/Total%20Plots%20Booked"  },
  { name: "World Atlas", year: "2025", image: "/projects/atlas.png" , link: "https://worldatlas-dusky.vercel.app/"  },
  { name: "VR", year: "2025", image: "/projects/VR.png" , link: "https://virtual-reality-chi.vercel.app/"  },
  { name: "Creative", year: "2025", image: "/projects/cr.png" , link: "https://creative-portfolio-dark.vercel.app/"  },
];

export default function AwardsList() {
  const { hoveredImage, handleMouseEnter, handleMouseLeave, imageRef } = useHoverImage();

  return (
    <div className="mx-16 xl:mx-24 mt-10 px-4 relative hidden lg:block">
      <div className="flex items-center justify-center">
        <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] mb-8">
          SOME Featured Work
        </h3>
      </div>

      {awards.map((award, index) => (
  <Link href={`${award.link}`} >     <div
          key={index}
          className="flex justify-between items-center py-8 border-t border-gray-500 text-black text-lg font-bold relative"
          onMouseEnter={() => handleMouseEnter(award.image)}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-3xl file" >{award.name}</span>
          <span>{award.year}</span>
        </div></Link>
      ))}

      <div className="border-t border-gray-500"></div>

      {/* Hover Image */}
      {hoveredImage && (
        <img
          ref={imageRef}
          src={hoveredImage}
          alt="Hovered Award"
          className="w-56 h-56 object-cover pointer-events-none top-0 left-0 absolute z-[100] opacity-100 rounded-lg shadow-xl border-2 border-white"
          // Removed transform or adjust it to something smaller if needed
          style={{ transform: "translate(-50%, -50%)" }} // Optional: centers the image relative to cursor
        />
      )}
    </div>
  );
}