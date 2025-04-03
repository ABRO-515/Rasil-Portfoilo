import Image from "next/image";
import Marquee from "react-fast-marquee";

const MARQUEE_IMAGES = [
  { src: "/images/1.png", width: 800, height: 400 },
  { src: "/images/2.png", width: 800, height: 400 },
  { src: "/images/3.png", width: 800, height: 400 },
  { src: "/images/4.png", width: 800, height: 400 },
  { src: "/images/5.png", width: 800, height: 400 },
  { src: "/images/6.png", width: 800, height: 400 },
  { src: "/images/7.png", width: 800, height: 400 },
  { src: "/images/8.png", width: 800, height: 400 },
  { src: "/images/9.png", width: 800, height: 400 }
];
export default function Marque() {



  return (
    <main className=" h-fit" >
      <Marquee pauseOnHover>
        <div className="flex w-full border bg-[#524B41] " >
          {MARQUEE_IMAGES.map((img, i) => (
          
              <Image
              key={i} className="h-[11rem] md:h-[13rem] lg:h-[16rem]  w-full max-w-[20rem] object-contain"
                src={img.src}
                alt={`Marquee item ${i + 1}`}
                width={img.width}
                height={img.height}
                quality={85}
                priority={i < 3} // Preload first 3 images
             
                loading={i > 2 ? 'lazy' : 'eager'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
        
          ))}

        </div>
      </Marquee>
    </main>
  )
}
