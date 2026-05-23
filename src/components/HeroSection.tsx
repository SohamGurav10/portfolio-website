"use client";

import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import GradientText from "./GradientText";
import Grainient from "./Grainient";

export default function HeroSection() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "sohamgurav808@gmail.com";
    const subject = encodeURIComponent("Let's Collaborate on a Project!");
    const body = encodeURIComponent("Hi Soham,\n\nI was impressed by your portfolio and would love to chat about a potential project...\n\nBest regards,");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="hero" className="w-full min-h-screen relative overflow-hidden flex items-center justify-center pt-28 pb-16">
      
      {/* Dynamic full-bleed Grainient background just for the hero section */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <Grainient
          color1="#173ded"
          color2="#dcdee2"
          color3="#bababa"
          timeSpeed={0.25}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={50.0}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.1}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
      </div>

      {/* Subtle overlay texture to make the WebGL gradient fade elegantly into the base bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F3F4F6]/60 to-[#F3F4F6] z-0 pointer-events-none" />

      {/* Editorial top layout lines */}
      <div className="absolute top-24 left-4 right-4 h-[1px] bg-black/[0.05] pointer-events-none hidden md:block z-10" />

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8 order-1 lg:order-1">
            
            {/* Subtle Tag badge - Matte Light */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
            >
              <span className="w-2 h-2 rounded-full bg-palatinate-blue animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-mono text-palatinate-blue font-bold">
                AVAILABLE FOR WORK
              </span>
            </motion.div>

            {/* Headline - Apple-Inspired Premium Condensed Heavy */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl xl:text-8xl font-semibold tracking-tighter leading-[0.95] text-primary-text uppercase font-sans etched-heading text-on-glass cursor-default select-none w-full"
            >
              <GradientText
                colors={["#000051", "#173ded", "#000029"]}
                animationSpeed={3}
                showBorder={false}
                className="!display-inline-block !inline-block !max-w-none !bg-transparent !backdrop-blur-none !p-0 !m-0 !rounded-none !overflow-visible font-semibold tracking-tighter leading-[0.95] uppercase font-sans etched-heading text-on-glass"
              >
                ENGINEERING
              </GradientText>
              <br className="hidden md:inline" />{" "}
              <GradientText
                colors={["#000051", "#173ded", "#000029"]}
                animationSpeed={3}
                showBorder={false}
                className="!display-inline-block !inline-block !max-w-none !bg-transparent !backdrop-blur-none !p-0 !m-0 !rounded-none !overflow-visible font-semibold tracking-tighter leading-[0.95] uppercase font-sans etched-heading text-on-glass"
              >
                INTELLIGENT
              </GradientText>{" "}
              <br />
              <GradientText
                colors={["#000051", "#173ded", "#000029"]}
                animationSpeed={3}
                showBorder={false}
                className="!display-inline-block !inline-block !max-w-none !bg-transparent !backdrop-blur-none !p-0 !m-0 !rounded-none !overflow-visible font-semibold tracking-tighter leading-[0.95] uppercase font-sans etched-heading text-on-glass"
              >
                SYSTEMS.
              </GradientText>
            </motion.h1>

            {/* Description - Editorial layout feel, secondary-text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-secondary-text max-w-2xl leading-relaxed font-sans font-light text-on-glass"
            >
              I am Soham, a systems developer specializing in hardware-software synthesis. Combining Electronics & Computer Engineering with robust cross-platform mobile apps, APIs, and microcontrollers to design secure, low-latency products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
            >
              {/* Primary CTA */}
              <a
                href="#"
                onClick={handleContactClick}
                className="btn-glow-light btn-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-palatinate-blue text-white font-semibold tracking-wide text-sm font-sans w-full sm:w-auto hover:bg-[#2046ff] text-on-glass"
              >
                CONTACT ME
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                  <Mail className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#about-me"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/40 hover:bg-white/70 border border-white/60 text-primary-text font-semibold text-sm font-mono tracking-wide transition-all duration-300 w-full sm:w-auto group shadow-[0_2px_10px_rgba(0,0,0,0.02)] interactive-item text-on-glass"
              >
                LEARN MORE
                <ArrowRight className="w-4 h-4 text-secondary-text group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
          </div>

          {/* Right Column - Premium Moveable/Rotatable Glass Frame Profile Portrait */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-2 w-full">
            <TiltCard 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.2rem] glass-tint-hero shadow-[0_15px_35px_rgba(0,0,0,0.05)] p-0 group shimmer-trigger glass-fall-in overflow-hidden border border-white/60"
            >
              
              {/* Profile Image portrait asset - fills the entire card with no padding or double borders */}
              <img 
                src="/soham-portrait.jpg" 
                alt="Soham Gurav" 
                className="w-full h-full object-cover rounded-[2.2rem]"
              />

              {/* Subtle elegant corner graphics - retained ultra-minimally */}
              <div className="absolute top-5 left-5 w-3.5 h-3.5 border-t border-l border-white/50 z-20 pointer-events-none" />
              <div className="absolute top-5 right-5 w-3.5 h-3.5 border-t border-r border-white/50 z-20 pointer-events-none" />
              <div className="absolute bottom-5 left-5 w-3.5 h-3.5 border-b border-l border-white/50 z-20 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-3.5 h-3.5 border-b border-r border-white/50 z-20 pointer-events-none" />

              {/* Soft ambient lighting reflection overlay */}
              <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-white/30 to-transparent pointer-events-none z-10" />

              {/* Solid physical glass outer border highlight */}
              <div className="absolute inset-0 rounded-[2.2rem] border border-white/80 pointer-events-none z-20 group-hover:border-white transition-all duration-300" />
            </TiltCard>
          </div>
          
        </div>
      </div>
    </section>
  );
}
