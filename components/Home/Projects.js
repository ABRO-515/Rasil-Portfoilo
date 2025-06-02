import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Projects() {




    const obj = [
        {
            name: "E-Commerce",
            year: "2025",
            image: "/mockups/ecom/iPhone.webp",
            slug: "exclusive-ecom",
            sr: "01",
        },
        {
            name: "Real-Estate",
            year: "2025",
            image: "/mockups/real-estate/iPhone.webp",
            slug: "zarghab-real-estate",
            sr: "02",
        },
        {
            name: "EZY Logistics",
            year: "2025",
            image: "/mockups/ezzy/iPhone.webp",
            slug: "ezy-logistics",
            sr: "03",
        },
        {
            name: "3D Book",
            year: "2025",
            image: "/mockups/3D-book/iPhone.webp",
            slug: "book-slider",
            sr: "04",
        },
        {
            name: "Soch Ai",
            year: "2025",
            image: "/mockups/soch/iPhone.webp",
            slug: "soch-ai-chatbot",
            sr: "05",
        },

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
                            <Link href={`/projects/${item.slug}`} > <div className="bg-white h-fit hover:bg-black cursor-pointer hover:text-white   w-fit p-3 rounded-full border" >

                                <FaArrowRightLong />
                            </div> </Link>

                            <span className="w-fit md:hidden mt-36" >
                                [ Year ] <br /> {item.year}
                            </span>
                        </div>


                        {/* Image */}

                        <Link href={`/projects/${item.slug}`} >  <Image
                            src={`${item.image}`}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="w-full  h-[21rem] rounded-lg object-cover lg:mr-16 md:mr-12 xl:mr-32 max-w-[15rem] lg:h-[25rem] lg:max-w-[18rem]"
                        /></Link>
                        <span className="w-fit hidden md:block" >
                            [ Year ] <br /> 2025
                        </span>
                    </div>
                ))}
            </div>

            <div className="hidden" >
                <div className="flex items-center justify-center" >
                    <h3 className="uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] mb-8" >SOME  Featured Work</h3>
                </div>





            </div>

        </main>
    )
}
