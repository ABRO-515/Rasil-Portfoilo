import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Projects() {



const awards = [
  { name: "Verizon", year: "2024" },
  { name: "Awwwards", year: "2023" },
  { name: "Awwwards", year: "2022" },
  { name: "Mindsparkle Mag", year: "2021" },
  { name: "Orpetron", year: "2020" },
];

    const obj = [
        {
            title: "E-Commerce",
            image: "/projects/e-com.png",
            sr: "01",
            link:"https://exclusive-e-com-rasil.vercel.app/"
        },
        {
            title: "Real Estate",
            image: "/projects/real.png",
            sr: "02",
            link:"https://zarghab-real-estate.vercel.app/pages/admin/dashboard/Total%20Plots%20Booked"

        },
        {
            title: "World Atlas",
            image: "/projects/atlas.png",
            sr: "03",
            link:"https://worldatlas-dusky.vercel.app/"
        }
    ]
    return (
        <main className="w-full h-full my-8 bg-[#e6e4e4]" id="Projects" >
            <div className="lg:hidden" >
            <div className="flex items-center justify-center" >
                <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] mb-8" >SOME  Featured Work</h3>
            </div>


            {/* Card  */}
            {obj.map((item, index) => (
                <div key={index} className="flex lg:px-6 mb-24 gap-3 sm:gap-12 mx-5 lg:mx-5 md:items-start items-center justify-center md:gap-24 xl:gap-8rem lg:gap-44   border-t-[#652626]" >
                    <div className="flex flex-col ml-3 md:ml-0 gap-3 " >
                        <h4 className="w-fit " >[ {item.sr} ]</h4>
                        <h2 className="font-semibold w-fit sm:text-[1.3rem]" >{item.title}</h2>
                   <Link href={`${item.link}`} > <div className="bg-white h-fit hover:bg-black cursor-pointer hover:text-white  w-fit p-3 rounded-full border" >

                            <FaArrowRightLong />
                        </div> </Link>

                        <span className="w-fit md:hidden mt-36" >
                            [ Year ] <br /> 2024
                        </span>
                    </div>


                    {/* Image */}   

                    <Link href={`${item.link}`} >  <Image
                        src={`${item.image}`}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="w-full  h-[21rem] lg:mr-16 md:mr-12 xl:mr-32 max-w-[16rem] lg:h-[25rem] lg:max-w-[18rem]"
                    /></Link>
                    <span className="w-fit hidden md:block" >
                        [ Year ] <br /> 2024
                    </span>
                </div>
            ))}
            </div>

            <div className="hidden" >
            <div className="flex items-center justify-center" >
                <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] mb-8" >SOME  Featured Work</h3>
            </div>

{/* Each Section */}



    <div className="mx-16 xl:mx-32 mt-10 px-4">
      {awards.map((award, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-10 border-t border-gray-500 text-black text-xl font-bold"
        >
          <span>{award.name}</span>
          <span className="text-sm" >{award.year}</span>
        </div>
      ))}
      {/* Bottom border for last item */}
      <div className="border-t border-gray-500"></div>
    </div>
  



            </div>

        </main>
    )
}
