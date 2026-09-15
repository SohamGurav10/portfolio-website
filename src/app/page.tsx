"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementSection from "@/components/AchievementSection";
import ConnectSection from "@/components/ConnectSection";
import LetterGlitch from "@/components/LetterGlitch";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col items-center justify-between w-full min-h-screen relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.16]" aria-hidden="true">
            <LetterGlitch
              glitchSpeed={70}
              centerVignette={false}
              outerVignette={false}
              smooth={true}
              colors={["#173ded", "#173ded", "#61b3dc"]}
            />
          </div>
          <div className="relative z-10 w-full">
            <SkillsSection />
          </div>
        </div>
        <AchievementSection />
        <ConnectSection />
      </main>
    </>
  );
}
