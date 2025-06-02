'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { scroller } from 'react-scroll';

import About from "@/components/Home/About";
import HeroNew from "@/components/Home/HeroNew";
import Now from "@/components/Home/Now";
import Projects from "@/components/Home/Projects";
import ProjectsLG from "@/components/Home/ProjectsLG";
import SkillsTwo from "@/components/Home/Skills";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeaderLG from "@/components/layout/HeaderLG";

export default function Page() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get('scrollTo');

  useEffect(() => {
    // Scroll if the query param exists
    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }

    // Listen for custom scroll events from the header
    const handler = (e) => {
      scroller.scrollTo(e.detail, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    };

    window.addEventListener('scrollToSection', handler);
    return () => window.removeEventListener('scrollToSection', handler);
  }, [scrollTo]);

  return (
    <div>
      <HeroNew />
      <div id="About"><About /></div>
      <div id="Projects"><Projects /></div>
      <ProjectsLG />
      <div id="Skills"><SkillsTwo /></div>
      <div id="Now"><Now /></div>
      
    </div>
  );
}
