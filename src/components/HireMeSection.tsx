"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function HireMeSection() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "sohamgurav808@gmail.com";
    const subject = encodeURIComponent("Hiring / Collaboration Request");
    window.location.href = `mailto:${email}?subject=${subject}`;
  };

  return (
    <section id="hire-me" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-black/[0.05] relative">
      {/* Soft ambient background glow */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-palatinate-blue/[0.01] blur-[130px] pointer-events-none" />
      
      <TiltCard className="glass-tint-projects rounded-[2.2rem] p-10 md:p-14 relative overflow-hidden text-on-glass shadow-[0_10px_30px_rgba(0,0,0,0.03)] glass-fall-in border border-white/50 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 w-full h-full">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase font-mono tracking-widest text-palatinate-blue font-bold block">
              COLLABORATION & OPPORTUNITIES
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-text uppercase leading-[1.1] font-sans">
              LET'S WORK TOGETHER <br className="hidden sm:inline" /> ON YOUR NEXT PROJECT!
            </h2>
            <p className="text-secondary-text font-sans font-light text-base leading-relaxed max-w-2xl">
              I am currently open to full-time engineering roles, innovative systems consulting, or robust custom applications development. Let's design and engineer something premium together.
            </p>
          </div>
          
          <div className="flex-shrink-0 self-start md:self-center">
            <motion.a
              href="#"
              onClick={handleContactClick}
              whileHover={{ scale: 1.03, backgroundColor: "#2046ff" }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow-light btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-palatinate-blue border border-[#173DED] text-white font-bold text-xs tracking-normal normal-case transition-all duration-300 shadow-[0_4px_14px_rgba(23,61,237,0.25)] cursor-pointer group"
            >
              HIRE ME
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-palatinate-blue shadow-[0_2px_6px_rgba(23,61,237,0.2)]">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
