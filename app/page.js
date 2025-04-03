
import About from "@/components/About";
import HeroNew from "@/components/HeroNew";
import Now from "@/components/Now";

import Projects from "@/components/Projects";
import ProjectsLG from "@/components/ProjectsLG";
import Skills from "@/components/Skills";
import Test from "@/components/Test";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import HeaderLG from "@/components/UI/HeaderLG";



export default function page() {
  return (
    <div>
   <Header />
   <HeaderLG />
      <HeroNew />
      {/* <Test /> */}
      <About />
      <Projects/>
      <ProjectsLG/>
      <Skills/>
      <Now/>
      

 <Footer/>
   
    </div>
  )
}
