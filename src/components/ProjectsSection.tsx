"use client";

import React, { useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Search } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  outcome: string;
  techStack: string[];
  repoLinks: { label: string; href: string }[];
}

function FinderFolderIcon() {
  return (
    <span aria-hidden="true" className="relative block h-4 w-5 shrink-0 rounded-[3px] bg-gradient-to-b from-[#35a9ff] to-[#0074e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_1px_2px_rgba(0,65,160,0.35)]">
      <span className="absolute -top-1 left-0 h-1.5 w-2.5 rounded-t-[3px] bg-[#2b9cff]" />
      <span className="absolute inset-x-0 top-0 h-1/3 rounded-t-[3px] bg-white/20" />
    </span>
  );
}

const projects: Project[] = [
  {
    id: "smart-attendance",
    title: "Smart Attendance Monitoring System",
    category: "IoT & Embedded Systems",
    summary: "A classroom attendance system connecting ESP32 session gateways, a Flutter client, and Firebase Firestore.",
    outcome: "Time-limited classroom sessions create a device-authenticated attendance flow that makes remote proxy check-ins harder.",
    techStack: ["ESP32", "C / C++", "Flutter", "Firebase Firestore", "Wi-Fi AP + STA"],
    repoLinks: [
      { label: "ESP32 firmware", href: "https://github.com/SohamGurav10/smart-attendance-esp32" },
      { label: "Flutter app", href: "https://github.com/SohamGurav10/smart-attendance-flutter" },
    ],
  },
  {
    id: "pill-dispenser",
    title: "Smart Pill Dispenser Mobile App",
    category: "Mobile Application",
    summary: "A medication management application using Flutter and Firebase Authentication with secure scheduling and reminders.",
    outcome: "Authenticated medication schedules and reminder delivery support an accessible medicine-dispenser workflow.",
    techStack: ["Flutter", "Dart", "Firebase", "Local Notifications", "Hive Storage"],
    repoLinks: [{ label: "EYIC repository", href: "https://github.com/SohamGurav10/EYIC-2024-25" }],
  },
  {
    id: "portfolio-website",
    title: "Soham Gurav Portfolio",
    category: "Web Application",
    summary: "A responsive Next.js portfolio presenting systems projects, technical skills, achievements, and a Resend-powered contact flow.",
    outcome: "A live portfolio turns a traditional resume into a scannable project experience with direct contact delivery.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
    repoLinks: [{ label: "Source repository", href: "https://github.com/SohamGurav10/soham-gurav" }],
  },
];

export default function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const [query, setQuery] = useState("");
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const filteredProjects = useMemo(
    () => projects.filter((project) => project.title.toLowerCase().includes(query.trim().toLowerCase())),
    [query]
  );

  const selectProject = (projectId: string) => {
    setActiveProjectId(projectId);
  };

  const moveProject = (direction: -1 | 1) => {
    const currentIndex = projects.findIndex((project) => project.id === activeProjectId);
    const nextIndex = (currentIndex + direction + projects.length) % projects.length;
    setActiveProjectId(projects[nextIndex].id);
  };

  return (
    <section id="projects" className="w-full border-t border-black/[0.05] px-4 py-24 relative md:h-screen md:overflow-hidden md:px-8 md:pb-8 md:pt-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl md:flex md:h-full md:flex-col">
        <div className="mb-12 max-w-3xl space-y-4 md:mb-6 md:shrink-0">
          <span className="text-xs uppercase font-mono tracking-widest text-palatinate-blue font-bold block">Portfolio showcase</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-text uppercase leading-none font-sans">Projects</h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-[#dcdee2] shadow-[0_24px_60px_rgba(15,23,42,0.1)] md:flex md:min-h-0 md:flex-1 md:flex-col">
          <div className="grid min-h-16 md:grid-cols-[19rem_minmax(0,1fr)]">
            <div className="flex items-center gap-2 border-b border-black/[0.06] bg-slate-100/70 px-6 md:border-b-0 md:border-r" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-4 border-b border-black/[0.06] bg-white/55 px-5 md:px-6">
              <div className="flex items-center rounded-[1.5rem] border border-slate-200 bg-white/75 p-1 shadow-[0_2px_8px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                <button type="button" aria-label="Previous project" onClick={() => moveProject(-1)} className="flex h-10 w-11 items-center justify-center rounded-[1.1rem] text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-palatinate-blue">
                  <ChevronLeft className="h-6 w-6 stroke-[2.25]" />
                </button>
                <span className="h-6 w-px bg-slate-200" aria-hidden="true" />
                <button type="button" aria-label="Next project" onClick={() => moveProject(1)} className="flex h-10 w-11 items-center justify-center rounded-[1.1rem] text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-palatinate-blue">
                  <ChevronRight className="h-6 w-6 stroke-[2.25]" />
                </button>
              </div>
              <span className="hidden min-w-0 truncate text-lg font-semibold tracking-tight text-primary-text sm:block">Projects</span>
              <label className="ml-auto flex max-w-52 items-center gap-2 rounded-2xl border border-white/70 bg-white/60 px-3 py-2 shadow-[0_2px_8px_rgba(15,23,42,0.06)] backdrop-blur-xl focus-within:ring-2 focus-within:ring-palatinate-blue">
                <Search className="h-4 w-4 shrink-0 text-muted-text" />
                <span className="sr-only">Search projects</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" className="min-w-0 w-full bg-transparent text-sm text-primary-text placeholder:text-muted-text focus:outline-none" />
              </label>
            </div>
          </div>

          <div className="grid min-h-[32rem] md:min-h-0 md:flex-1 md:grid-cols-[19rem_minmax(0,1fr)]">
            <nav aria-label="Project list" className="border-b border-black/[0.06] bg-slate-100/70 p-3 md:border-b-0 md:border-r">
              <p className="px-3 pb-2 pt-1 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text">Projects</p>
              <div className="flex gap-1 overflow-x-auto md:flex-col" role="tablist" aria-orientation="vertical">
                {filteredProjects.map((project) => {
                  const isSelected = project.id === activeProject.id;
                  return (
                    <button key={project.id} id={`${project.id}-tab`} type="button" role="tab" aria-selected={isSelected} aria-controls="project-detail" onClick={() => selectProject(project.id)} className={`flex w-full min-w-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-palatinate-blue ${isSelected ? "bg-palatinate-blue text-white shadow-[0_4px_12px_rgba(23,61,237,0.22)]" : "text-secondary-text hover:bg-white/80 hover:text-primary-text"}`}>
                      <FinderFolderIcon />
                      <span className="min-w-0 flex-1 break-words text-left font-medium leading-snug">{project.title}</span>
                      <ChevronRight className="ml-auto h-3.5 w-3.5 shrink-0 opacity-70" />
                    </button>
                  );
                })}
                {filteredProjects.length === 0 && <p className="px-3 py-2 text-sm text-muted-text">No matching projects.</p>}
              </div>
            </nav>

            <div id="project-detail" role="tabpanel" aria-label="Project details" tabIndex={0} className="flex min-w-0 flex-col p-6 md:overflow-y-auto md:p-10">
              <div className="flex items-start gap-4 border-b border-black/[0.06] pb-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/75 shadow-[0_6px_18px_rgba(23,61,237,0.12)]"><FinderFolderIcon /></div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-palatinate-blue">{activeProject.category}</p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-primary-text md:text-3xl">{activeProject.title}</h3>
                </div>
              </div>

              <div className="grid gap-8 pt-7 lg:grid-cols-[minmax(0,1fr)_14rem]">
                <div className="space-y-7">
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text">Summary</h4>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-secondary-text">{activeProject.summary}</p>
                  </div>
                  <div className="rounded-2xl border border-palatinate-blue/10 bg-palatinate-blue/[0.05] p-5">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-palatinate-blue">Outcome</h4>
                    <p className="mt-2 text-sm leading-relaxed text-primary-text">{activeProject.outcome}</p>
                  </div>
                </div>

                <aside className="space-y-7">
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text">Stack</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech) => <span key={tech} className="rounded-lg border border-black/[0.06] bg-white/75 px-2.5 py-1.5 text-[10px] font-mono font-bold text-primary-text">{tech}</span>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text">Links</h4>
                    <div className="mt-3 flex flex-col gap-2">
                      {activeProject.repoLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-palatinate-blue transition-colors hover:text-[#102ec4] focus:outline-none focus-visible:ring-2 focus-visible:ring-palatinate-blue">{link.label}<ArrowUpRight className="h-3.5 w-3.5" /></a>)}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
