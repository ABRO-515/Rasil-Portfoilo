import React from 'react'
// Sample data
const techStack = [
    { name: 'Next.js', slug: 'next' },
    { name: 'React', slug: 'react' },
    { name: 'Redux', slug: 'redux' },
    { name: 'Tailwind', slug: 'tail' },
    { name: 'Javascript', slug: 'jsOnly' },
    { name: 'Vercel', slug: 'vercel' },
    // Add 10-12 items
];
export default function SkillsTwo() {

    return (
        <div className='xl:mx-32 bg-[#e6e4e4] max-w-full text-center mx-auto px-6 md:px-8 lg:px-14    py-12' id='Skills' >
            <div className=" ">
                <h2 className="text-center uppercase file text-[1.6rem] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[6rem] font-bold mb-12 file">Tech Stack</h2>

                {/* Animated Logos Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                    {techStack.map(item => (
                        <div key={item.name} className="group">
                            <div className="p-4 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-all">
                                <img
                                    src={`/svgs/${item.slug}.svg`}
                                    alt={item.name}
                                    className="h-12 mx-auto grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <p className="mt-2  text-black group-hover:opacity-100 transition-opacity">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8  my-8 ">
                <h2 className="text-4xl file font-bold text-center">Skills</h2>


                {/* Skill Cloud */}
                <div className="flex flex-wrap gap-3  mt-8">
                    {['JavaScript', 'Dynamic Routing', 'Github', 'React Hooks', 'Context API', 'GSAP', 'Flexbox', 'Git', 'Rest APIs', 'Fetch API', 'Axios', 'CSS4', 'Grid', 'Debugging', 'Redux'].map(skill => (
                        <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full hover:scale-105 transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>


        </div>
    )
}
