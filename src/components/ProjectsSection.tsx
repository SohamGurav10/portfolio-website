"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Smartphone, Cpu, ShieldAlert, Zap, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";
import Waves from "./Waves";

interface Project {
  id: string;
  title: string;
  shortSummary: string;
  icon: React.ReactNode;
  category: string;
  role: string;
  progress: string;
  results: string;
  techStack: string[];
  impact: string;
  challenges: string;
  gridClass: string;
}

export default function ProjectsSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "pill-dispenser",
      title: "Smart Pill Dispenser Mobile App",
      shortSummary: "A medication management application using Flutter & Firebase Authentication featuring secure scheduling matrices.",
      icon: <Smartphone className="w-5 h-5 text-palatinate-blue" />,
      category: "Mobile Application",
      role: "Lead Mobile & Auth Architect",
      progress: "100% Deployed // EYIC 2024-25 Innovation Competency",
      results: "Increased medication compliance, successfully verified under Design Thinking research models.",
      techStack: ["Flutter", "Dart", "Firebase", "Local Notifications", "Hive Storage", "Git"],
      impact: "Significantly optimized UI layouts for elderly accessibility and secure medication adherence profiles.",
      challenges: "Configuring robust foreground/background background workers for critical notification schedules when devices are in sleep mode.",
      gridClass: "lg:col-span-8",
    },
    {
      id: "smart-attendance",
      title: "IoT Smart Attendance System",
      shortSummary: "IoT-based attendance tracking integrating ESP32 with Flutter and Firebase via Wi-Fi AP+STA authentication.",
      icon: <Cpu className="w-5 h-5 text-palatinate-blue" />,
      category: "IoT & Embedded Systems",
      role: "Hardware-to-Mobile Engineer",
      progress: "Prototype Deployed for Classroom Environments",
      results: "Prevented proxy logs entirely using time-restricted access structures and session tokens.",
      techStack: ["ESP32", "C / C++", "Flutter", "Firebase Cloud", "Wi-Fi AP + STA Mode"],
      impact: "Reduced attendance marking latency from 10 minutes to under 4 seconds per student.",
      challenges: "Syncing ESP32 hardware authentication loops with mobile client session sockets in low-bandwidth classroom Wi-Fi spots.",
      gridClass: "lg:col-span-4",
    },
    {
      id: "randd-initiatives",
      title: "R&D Systems & Innovation Initiatives",
      shortSummary: "Applied design thinking frameworks and IoT research models to secure systems deployment.",
      icon: <Layers className="w-5 h-5 text-palatinate-blue" />,
      category: "Research & Systems Design",
      role: "Core Innovator & Systems Analyst",
      progress: "Ongoing R&D // Savitribai Phule Pune University",
      results: "Validated multiple prototypes at academic and institutional hackathons.",
      techStack: ["Design Thinking", "System Architecture", "API Integration", "Secure Authentication", "IoT Integration"],
      impact: "Pioneered session-based auth research and user-centric flows for accessible medicine delivery systems.",
      challenges: "Synthesizing disparate IoT hardware states with high-level serverless web socket layers securely.",
      gridClass: "lg:col-span-12",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 w-full border-t border-black/[0.05] relative">

      {/* Dynamic Interactive Waves Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.85]">
        <Waves
          lineColor="#173ded"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        {/* Top Title Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-palatinate-blue font-bold block">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-text uppercase leading-none font-sans">
            PROJECTS
          </h2>
        </div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {projects.map((project, index) => {
            const isExpanded = activeCardId === project.id;

            return (
              <TiltCard
                layout="position"
                key={project.id}
                onClick={() => setActiveCardId(isExpanded ? null : project.id)}
                className={`
                  ${project.gridClass}
                  glass-tint-projects rounded-[2.2rem] p-8 cursor-pointer 
                  flex flex-col justify-between overflow-hidden group relative
                  text-on-glass
                  ${isExpanded ? "ring-2 ring-palatinate-blue backdrop-blur-[60px] saturate-[220%] shadow-[0_15px_30px_rgba(23,61,237,0.08)]" : ""}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card header */}
                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-center mb-6">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/60 border border-white/85 text-xs font-mono text-secondary-text shadow-[0_1px_4px_rgba(0,0,0,0.01)] font-bold">
                      {project.icon}
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary-text mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-text font-sans font-light text-base leading-relaxed max-w-2xl">
                    {project.shortSummary}
                  </p>
                </div>

                {/* Expand details container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-black/[0.05] grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans">

                        {/* Specs Left Column */}
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <span className="text-xs uppercase font-mono text-palatinate-blue flex items-center gap-1.5 font-bold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Role
                            </span>
                            <p className="text-primary-text font-semibold">{project.role}</p>
                          </div>

                          <div className="space-y-1">
                            <span className="text-xs uppercase font-mono text-palatinate-blue flex items-center gap-1.5 font-bold">
                              <Zap className="w-3.5 h-3.5" />
                              Results
                            </span>
                            <p className="text-secondary-text font-light leading-relaxed">{project.results}</p>
                          </div>

                          <div className="space-y-1">
                            <span className="text-xs uppercase font-mono text-palatinate-blue flex items-center gap-1.5 font-bold">
                              <ShieldAlert className="w-3.5 h-3.5" />
                              Challenges Solved
                            </span>
                            <p className="text-secondary-text font-light leading-relaxed">{project.challenges}</p>
                          </div>
                        </div>

                        {/* Specs Right Column */}
                        <div className="space-y-5">
                          <div className="space-y-1.5">
                            <span className="text-xs uppercase font-mono text-palatinate-blue flex items-center gap-1.5 font-bold">
                              <Layers className="w-3.5 h-3.5" />
                              Tech Stack
                            </span>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {project.techStack.map((tech, index) => (
                                <span
                                  key={index}
                                  className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-white/70 text-primary-text border border-white/90 shadow-[0_1px_4px_rgba(0,0,0,0.01)]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <span className="text-xs uppercase font-mono text-palatinate-blue flex items-center gap-1.5 font-bold">
                              Impact
                            </span>
                            <p className="text-secondary-text font-light leading-relaxed">{project.impact}</p>
                          </div>

                          <div className="space-y-1">
                            <span className="text-xs uppercase font-mono text-palatinate-blue flex items-center gap-1.5 font-bold">
                              Progress Node
                            </span>
                            <p className="text-primary-text font-mono text-xs font-bold">{project.progress}</p>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divider bottom */}
                <div className="mt-8 pt-4 border-t border-black/[0.04] flex items-center justify-end z-10 relative">
                  <span className="w-8 h-8 rounded-full bg-white/60 border border-white/90 flex items-center justify-center text-secondary-text group-hover:bg-palatinate-blue group-hover:text-white transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.01)]">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

              </TiltCard>
            );
          })}
        </div>
      </div>

    </section>
  );
}
