"use client";

import React from "react";
import { Calendar, CheckCircle } from "lucide-react";
import TiltCard from "./TiltCard";

interface AchievementItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  bullets?: string[];
}

export default function AchievementSection() {
  const achievements: AchievementItem[] = [
    {
      title: "1st Place, CircuitVista 2K26",
      subtitle: "CIRCUITVISTA 2K26 / PROJECT SHOWCASE",
      date: "2026",
      description: "Closes the classroom proxy attendance loophole entirely. Engineered an automated Smart Attendance Monitoring System using ESP32 & Flutter. By leveraging localized Wi-Fi access point SSID validation, students are structurally verified as physically present in the room before they can log attendance — rendering remote proxy check-ins impossible.",
      bullets: [
        "Impact: 100% attendance accuracy, ~2s Firebase Firestore sync latency, and 25–30m range in testing",
        "Implementation: ESP32-WROOM-32 programmed in C++ via PlatformIO, connected with cross-platform Flutter client"
      ]
    },
    {
      title: "eYIC Regional Finalist",
      subtitle: "IIT BOMBAY E-YANTRA / NATIONAL-LEVEL COMPETITION",
      date: "2025",
      description: "Qualified for the Regional Finals of IIT Bombay's prestigious national-level innovation challenge and reached the interview round of the e-Yantra Summer Internship Program (EYSIP). Designed and built the 'MediMate' system, an automated Smart Medicine Dispenser securing timed medicine delivery.",
      bullets: [
        "Credibility: Shortlisted among top technical teams nationally by IIT Bombay evaluators",
        "Embedded Systems: Demonstrated high proficiency in hardware-software synthesis, data modeling, and embedded logic"
      ]
    },
    {
      title: "Event Management Head",
      subtitle: "MARSMCOE PUNE / OWNERSHIP & EXECUTION",
      date: "2024 – Present",
      description: "Owned the full lifecycle of student technical events, national-level coding hackathons, and embedded systems workshops. Directed multidisciplinary student committees, managing operations from structural design and logistics pipelines to campaign promotions.",
      bullets: [
        "Scale & Logistics: Orchestrated events for 500+ participants, coordinating hardware resources and logistics"
      ]
    },
    {
      title: "EDC & IIC Core Member",
      subtitle: "ENTREPRENEURSHIP DEVELOPMENT CELL & IIC",
      date: "2024 – 2025",
      description: "Directed promotional operations, startup initiatives, and digital campaigns for the Entrepreneurship Development Cell. Built highly-engaging media branding systems to publicize high-impact campus hackathons and incubator workshops.",
      bullets: [
        "Entrepreneurial Mindset: Cultivated student networking events, raising registration numbers by 30%+"
      ]
    },
    {
      title: "Training & Placement Cell Member",
      subtitle: "PES'S MODERN COLLEGE OF ENGINEERING",
      date: "2024 – 2025",
      description: "Facilitated corporate placement drives, corporate visitor liaisons, and MITCON industry networking visits. Gained deep structural exposure to corporate hiring pipelines, cybersecurity debates, and enterprise operations — useful context that now informs how I think about systems delivery and scalability.",
      bullets: [
        "Active Takeaway: Leveraged insights to better align technical architectures with actual business and team goals"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-black/[0.05] relative">

      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#173ded]/[0.01] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#173ded]/[0.01] blur-[140px] pointer-events-none" />

      {/* Title Block - Centered Editorial Style */}
      <div className="max-w-3xl mx-auto text-center mb-20 space-y-4 relative z-10">
        <span className="text-xs uppercase font-mono tracking-widest text-[#173ded] font-bold block">
          MILESTONES & RECOGNITIONS
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-text uppercase leading-none font-sans">
          ACHIEVEMENTS
        </h2>
        <p className="text-base text-secondary-text font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
          Milestones and accomplishments that reflect my technical growth, problem-solving approach, and ability to deliver under constraints.
        </p>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#173ded] to-transparent mx-auto rounded-full mt-4" />
      </div>

      {/* Responsive Timeline Map Layout */}
      <div className="relative max-w-5xl mx-auto w-full pt-4">

        {/* Map Path Line with `#173ded` glow */}
        <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-[2px] bg-[#173ded]/25 -translate-x-1/2 pointer-events-none shadow-[0_0_8px_rgba(23,61,237,0.15)]" />

        <div className="space-y-12 relative z-10 flex flex-col w-full">
          {achievements.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`flex w-full relative ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}>

                {/* Timeline Card */}
                <div className="w-full lg:w-[45%] pl-14 lg:pl-0">
                  <TiltCard className="glass-tint-experience rounded-[2.2rem] p-6 md:p-8 shadow-[0_10px_25px_rgba(0,0,0,0.03)] glass-fall-in text-on-glass border border-white/50 relative overflow-hidden backdrop-blur-xl hover:border-[#173ded]/30 transition-all duration-300 group">

                    {/* Glowing highlight trace */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#173ded]/[0.01] to-transparent pointer-events-none" />

                    <div className="flex flex-col gap-4 relative z-10">

                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-black/[0.04]">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#173ded] block">
                            {item.subtitle}
                          </span>
                          <h3 className="text-lg font-black text-primary-text leading-tight uppercase font-sans group-hover:text-[#173ded] transition-colors duration-300">
                            {item.title}
                          </h3>
                        </div>
                        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/50 border border-white/80 shadow-[0_1px_4px_rgba(0,0,0,0.01)] text-[10px] font-mono font-bold text-secondary-text self-start sm:self-auto h-fit">
                          <Calendar className="w-3 h-3 text-[#173ded]" />
                          <span>{item.date}</span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-secondary-text leading-relaxed font-sans font-light">
                        {item.description}
                      </p>

                      {/* Bullets */}
                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="space-y-2.5 pt-2">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs text-secondary-text leading-relaxed font-light font-sans">
                              <CheckCircle className="w-4 h-4 text-[#173ded] shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </TiltCard>
                </div>

                {/* Node Point with `#173ded` glow */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-8 flex items-center justify-center z-20">
                  <div className="w-4 h-4 rounded-full bg-[#173ded] border-4 border-white shadow-[0_0_12px_rgba(23,61,237,0.7)] transition-all duration-300 hover:scale-125 cursor-default" />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
