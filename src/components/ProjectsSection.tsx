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
  outcome: string;
  repoLinks: { label: string; href: string }[];
}

export default function ProjectsSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "smart-attendance",
      title: "Smart Attendance Monitoring System",
      shortSummary: "A classroom attendance system connecting ESP32 session gateways, a Flutter client, and Firebase Firestore.",
      icon: <Cpu className="w-5 h-5 text-palatinate-blue" />,
      category: "IoT & Embedded Systems",
      role: "Hardware-to-Mobile Engineer",
      progress: "Prototype deployed for classroom environments",
      results: "Verifies classroom presence through time-limited Wi-Fi sessions before attendance is submitted.",
      techStack: ["ESP32", "C / C++", "Flutter", "Firebase Firestore", "Wi-Fi AP + STA"],
      impact: "Creates a physical session gateway that blocks remote proxy check-ins and syncs attendance through Firebase.",
      challenges: "Synchronizing ESP32 authentication, session expiry, LCD status, and Flutter client flows over classroom Wi-Fi.",
      gridClass: "lg:col-span-8",
      outcome: "Outcome: time-limited classroom sessions with device-authenticated attendance flow.",
      repoLinks: [
        { label: "ESP32 firmware", href: "https://github.com/SohamGurav10/smart-attendance-esp32" },
        { label: "Flutter app", href: "https://github.com/SohamGurav10/smart-attendance-flutter" },
      ],
    },
    {
      id: "pill-dispenser",
      title: "Smart Pill Dispenser Mobile App",
      shortSummary: "A medication management application using Flutter and Firebase Authentication with secure scheduling and reminders.",
      icon: <Smartphone className="w-5 h-5 text-palatinate-blue" />,
      category: "Mobile Application",
      role: "Lead Mobile & Auth Architect",
      progress: "EYIC 2024–25 innovation project",
      results: "Provides authenticated medication profiles and scheduled reminders for medication adherence workflows.",
      techStack: ["Flutter", "Dart", "Firebase", "Local Notifications", "Hive Storage"],
      impact: "Combines accessible mobile flows with persistent scheduling for an automated medicine-delivery system.",
      challenges: "Keeping foreground and background notification schedules reliable while devices are idle or asleep.",
      gridClass: "lg:col-span-4",
      outcome: "Outcome: authenticated medication schedules with reminder delivery built for accessibility.",
      repoLinks: [
        { label: "EYIC repository", href: "https://github.com/SohamGurav10/EYIC-2024-25" },
      ],
    },
    {
      id: "portfolio-website",
      title: "Soham Gurav Portfolio",
      shortSummary: "A responsive Next.js portfolio presenting systems projects, technical skills, achievements, and a Resend-powered contact flow.",
      icon: <Layers className="w-5 h-5 text-palatinate-blue" />,
      category: "Web Application",
      role: "Designer & Full-Stack Engineer",
      progress: "Live at sohamgurav.me",
      results: "Ships a responsive portfolio experience with server-side contact delivery and a focused project showcase.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
      impact: "Turns a traditional resume into a scannable, interactive product interface while keeping project proof visible.",
      challenges: "Balancing a distinctive glassmorphism visual system and animated backgrounds with readable, responsive content.",
      gridClass: "lg:col-span-12",
      outcome: "Outcome: live portfolio experience with responsive sections and verified contact delivery.",
      repoLinks: [
        { label: "Source repository", href: "https://github.com/SohamGurav10/soham-gurav" },
      ],
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
                  <p className="mt-4 text-xs font-mono font-bold uppercase tracking-wide text-palatinate-blue">
                    {project.outcome}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.repoLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/90 bg-white/70 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wide text-primary-text transition-colors hover:bg-palatinate-blue hover:text-white"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
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
