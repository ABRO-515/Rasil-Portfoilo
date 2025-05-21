
import About from "@/components/Home/About";
import HeroNew from "@/components/Home/HeroNew";
import Now from "@/components/Home/Now";
import Projects from "@/components/Home/Projects";
import ProjectsLG from "@/components/Home/ProjectsLG";
import SkillsTwo from "@/components/Home/Skills";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeaderLG from "@/components/layout/HeaderLG";




export default function page() {
  return (
    <div>
     
      <HeroNew />
      {/* <Test /> */}
      <About />
      <Projects />
      <ProjectsLG />
      <SkillsTwo />
      <Now />
  

    </div>
  )
}
