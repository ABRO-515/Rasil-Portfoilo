import About from "@/components/Home/About";
import HeroNew from "@/components/Home/HeroNew";
import Now from "@/components/Home/Now";
import Projects from "@/components/Home/Projects";
import ProjectsLG from "@/components/Home/ProjectsLG";
import SkillsTwo from "@/components/Home/Skills";
import ScrollToSectionClient from "./ScrollToSectionClient";
import { Suspense } from "react";
import ParticleSphereCanvas from "@/components/models/ParticleSphereCanvas";

export default function Page() {
  return (
    <div>
      <HeroNew />
      <About />
      
      <Projects />
      <ProjectsLG />
      <SkillsTwo />
      <Now />

      {/* Scroll logic with Suspense */}
      <Suspense fallback={null}>
        <ScrollToSectionClient />
      </Suspense>
    </div>
  );
}
