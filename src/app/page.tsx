"use client";

import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import HireMeSection from "@/components/HireMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ConnectSection from "@/components/ConnectSection";
import LetterGlitch from "@/components/LetterGlitch";

export default function Home() {
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          document.documentElement.style.setProperty("--scroll-top", `${scrolled}`);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Passive listener avoids blocking main thread scrolling
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Set initial scroll top variable
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navigation />
      <main className="flex flex-col items-center justify-between w-full min-h-screen relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <div className="relative w-full overflow-hidden">
          {/* Continuous LetterGlitch Backdrop spanning both sections */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.24]">
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={false}
              outerVignette={false}
              smooth={true}
              colors={["#173ded", "#173ded", "#61b3dc"]}
            />
          </div>
          <div className="relative z-10 w-full">
            <SkillsSection />
            <HireMeSection />
          </div>
        </div>
        <ExperienceSection />
        <ConnectSection />
      </main>
    </>
  );
}
