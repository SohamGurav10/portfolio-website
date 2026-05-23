"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import TiltCard from "./TiltCard";

interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  location: string;
  bullets: string[];
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      role: "Event Management & Marketing Head",
      organization: "MARSMCOE Pune",
      duration: "2024 – Present",
      location: "Pune, India",
      bullets: [
        "Led full-scale planning and execution of student technical events, workshops, and coding challenges.",
        "Coordinated multi-disciplinary teams for event logistics, marketing, and dynamic promotional creatives."
      ]
    },
    {
      role: "Core Member & Social Media Manager",
      organization: "Entrepreneurship Development Cell & IIC",
      duration: "2024 – 2025",
      location: "Pune, India",
      bullets: [
        "Organized high-impact Pro-Start hackathons and startup development initiatives.",
        "Managed all digital promotions and designed modern marketing creatives for outreach campaigns."
      ]
    },
    {
      role: "Member — Training & Placement Cell",
      organization: "PES’s Modern College of Engineering",
      duration: "2024 – 2025",
      location: "Pune, India",
      bullets: [
        "Assisted in coordinating crucial MITCON industry visits and VOIS technical events.",
        "Gained deep exposure to industry networking pipelines, enterprise operations, and cybersecurity debates."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-black/[0.05] relative">



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">

        {/* Left Column - Headline Context */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-palatinate-blue font-bold block">
            LEADERSHIP & EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-text uppercase leading-none">
            EXPERIENCE
          </h2>
          <p className="text-base text-secondary-text font-sans font-light leading-relaxed max-w-md pt-2">
            Organizing hackathons, directing promotional campaigns, and building placement networks. True software engineering is backed by leadership and systemic team integration.
          </p>
        </div>

        {/* Right Column - Timeline Grid */}
        <div className="lg:col-span-7 space-y-6 w-full">
          {experiences.map((exp, idx) => (
            <TiltCard
              key={idx}
              className="glass-tint-experience rounded-[2.2rem] p-8 shadow-[0_10px_25px_rgba(0,0,0,0.03)] glass-fall-in text-on-glass"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-black/[0.04] mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-white/60 border border-white/90 text-palatinate-blue shadow-[0_2px_8px_rgba(0,0,0,0.02)] group-hover:bg-palatinate-blue/5 transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-xl font-extrabold text-primary-text leading-snug group-hover:text-palatinate-blue transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-secondary-text">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/50 border border-white/80 shadow-[0_1px_4px_rgba(0,0,0,0.01)] text-[10px] font-mono font-bold text-secondary-text self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-palatinate-blue" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Bullets mapping */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-3 text-sm text-secondary-text leading-relaxed font-light">
                    <CheckCircle className="w-4 h-4 text-palatinate-blue mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
