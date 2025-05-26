'use client';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { projects } from "@/app/projects/projectsData";
import { useParams } from 'next/navigation';




export default function Gallery() {
  const params = useParams();
  const slug = params?.slug;

  const project = projects[slug]; // ✅ Moved this after slug is declared
  if (!project) return <div>Project not found</div>;

  const images = [project.img1, project.img2, project.img3, project.img4];
  const [selectedImage, setSelectedImage] = useState(images[0]);


  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-4 py-6">
      {/* Main Preview */}
      <div className="w-full aspect-[4/3] sm:aspect-[3/2]  relative">
        <Image
          src={selectedImage}
          alt="Shoe Preview"
          fill
          className="object-contain rounded-xl transition-all duration-300"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={clsx(
              'relative w-20 h-20 rounded-lg border-2 overflow-hidden transition-all duration-200',
              selectedImage === img
                ? 'border-[#524B41]'
                : 'border-transparent hover:border-gray-400'
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
