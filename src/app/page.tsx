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

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.documentElement.style.setProperty("--scroll-top", `${scrolled}`);
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
        <SkillsSection />
        <HireMeSection />
        <ExperienceSection />
        <ConnectSection />
      </main>
    </>
  );
}
