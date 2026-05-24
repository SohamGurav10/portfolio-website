"use client";

import React from "react";
import { Download, GraduationCap, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import ShapeGrid from "./ShapeGrid";

export default function AboutSection() {
  return (
    <section id="about-me" className="py-24 px-4 md:px-8 w-full border-t border-black/[0.05] relative">

      {/* Dynamic Interactive Shape Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.12]">
        <ShapeGrid
          speed={0.3}
          squareSize={40}
          direction="diagonal"
          borderColor="#173ded"
          hoverFillColor="#222"
          hoverColor="#173ded"
          hoverTrailAmount={5}
          shape="square"
          size={60}
        />
      </div>

      {/* Light glow blur backdrop */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-palatinate-blue/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">

        {/* About Me Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-palatinate-blue font-bold block">
              ENGINEERING WITH SYSTEMIC INTENT
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-text uppercase leading-none">
              ABOUT ME
            </h2>
          </div>
        </div>

        {/* Narrative and Stacked Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">

          {/* Left Column - Narrative text */}
          <div className="lg:col-span-7 space-y-6 text-secondary-text font-sans leading-relaxed text-base md:text-lg font-light flex flex-col items-start text-on-glass">
            <p>
              I approach software engineering from a holistic perspective. With academic roots in <strong className="text-primary-text font-semibold">Electronics and Computer Engineering</strong>, I don't just build UI layouts; I construct end-to-end ecosystems that span the physical and digital.
            </p>
            <p>
              Whether it’s routing session authentication dynamically inside ESP32 microcontrollers or designing real-time updates for medication alerts with Flutter and Firebase, my focus is always on <strong className="text-primary-text font-semibold">microsecond-level optimization</strong>, secure data handling, and elite UI craftsmanship.
            </p>
            <p>
              My goal is simple: turn complex hardware protocols and backend specifications into premium, human-centric software. I believe in clean code architectures, aggressive caching systems, and responsive, fluid design interfaces.
            </p>

            <div className="pt-4 hidden lg:block">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Soham_Gurav_Resume.pdf"
                whileHover={{ scale: 1.02, backgroundColor: "#2046ff" }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow-light btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-palatinate-blue border border-[#173DED] text-white font-bold text-xs tracking-normal normal-case transition-all duration-300 shadow-[0_4px_12px_rgba(23,61,237,0.25)] cursor-pointer text-on-glass"
              >
                DOWNLOAD RESUME
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-palatinate-blue shadow-[0_2px_6px_rgba(23,61,237,0.2)]">
                  <Download className="w-3 h-3" />
                </span>
              </motion.a>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">

            {/* Card 1 - Education */}
            <TiltCard
              className="glass-tint-about rounded-[2.2rem] p-8 shadow-[0_10px_25px_rgba(0,0,0,0.03)] glass-fall-in text-on-glass"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold uppercase tracking-tight text-primary-text flex items-center gap-2 font-sans">
                  <span className="w-1.5 h-6 rounded bg-palatinate-blue" />
                  EDUCATION
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-xl bg-white/50 border border-white/85 text-palatinate-blue shadow-[0_2px_6px_rgba(0,0,0,0.01)] flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary-text text-base leading-tight">
                        Bachelor of Engineering
                      </h4>
                      <p className="text-xs font-semibold text-palatinate-blue">
                        Electronics & Computer Engineering
                      </p>
                      <p className="text-[11px] text-secondary-text font-medium leading-relaxed pt-0.5">
                        PES’s Modern College of Engineering <br />
                        Savitribai Phule Pune University
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/50 border border-white/80 text-[10px] font-mono font-bold text-secondary-text shadow-[0_1px_4px_rgba(0,0,0,0.01)] shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-palatinate-blue" />
                    <span>EXPECTED 2027</span>
                  </div>
                </div>

                {/* Coursework mapping */}
                <div className="pt-2 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B7280] font-bold flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-palatinate-blue" />
                    RELEVANT COURSEWORK
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {["Data Structures", "OOP", "DBMS", "Computer Networks", "Embedded Systems"].map((course) => (
                      <span
                        key={course}
                        className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-white/60 border border-white/85 text-primary-text shadow-[0_1px_4px_rgba(0,0,0,0.01)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Card 2 - Fun Facts About Me */}
            <TiltCard
              className="glass-tint-about rounded-[2.2rem] p-8 shadow-[0_10px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between glass-fall-in text-on-glass"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold uppercase tracking-tight text-primary-text flex items-center gap-2 font-sans">
                  <span className="w-1.5 h-6 rounded bg-palatinate-blue" />
                  FUN FACTS ABOUT ME
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full items-start">
                {/* Languages */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B7280] block">
                    LANGUAGES SPOKEN
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["English", "Hindi", "Marathi", "French", "High Valyrian"].map((lang) => (
                      <span
                        key={lang}
                        className="text-xs font-mono font-bold px-2 py-1 rounded bg-white/60 border border-white/85 text-palatinate-blue shadow-[0_1px_4px_rgba(0,0,0,0.01)]"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B7280] block">
                    INTERESTS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Finance", "Investing", "Communication", "Networking"].map((interest) => (
                      <span
                        key={interest}
                        className="text-xs font-mono font-bold px-2 py-1 rounded bg-white/60 border border-white/85 text-palatinate-blue shadow-[0_1px_4px_rgba(0,0,0,0.01)]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Mobile-Only Download Resume Button - Positioned perfectly below the card stack */}
            <div className="pt-4 flex justify-center lg:hidden">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Soham_Gurav_Resume.pdf"
                whileHover={{ scale: 1.02, backgroundColor: "#2046ff" }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow-light btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-palatinate-blue border border-[#173DED] text-white font-bold text-xs tracking-normal normal-case transition-all duration-300 shadow-[0_4px_12px_rgba(23,61,237,0.25)] cursor-pointer text-on-glass w-full sm:w-auto justify-center"
              >
                DOWNLOAD RESUME
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-palatinate-blue shadow-[0_2px_6px_rgba(23,61,237,0.2)]">
                  <Download className="w-3 h-3" />
                </span>
              </motion.a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
