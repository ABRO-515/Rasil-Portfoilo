import Image from "next/image";



export default function About() {
  return (
    <main className="w-full h-full mb-16" id="About" >
        <div className="md:flex gap-8 justify-center items-center " >
    <div className="flex items-center justify-center" >
            <Image
      src="/images/abro.jpeg"
      width={500}
      height={500}
      className="h-[27rem] w-full max-w-[18rem] "
      alt="Picture of the author"
    />
    </div>
    <div  className="flex items-center justify-end mr-10 my-8 " >
    <span className="w-[8rem] uppercase  text-xs font-medium " >
    Hey👋 I'm Rasil Abro, a web developer from Karachi, specializing in responsive web and mobile interfaces. Passionate about crafting seamless user experiences with clean, efficient code.
    </span>
    </div>
    </div>
    </main>
  )
}
