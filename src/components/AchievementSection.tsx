"use client";

import React, { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";

interface AchievementItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  bullets?: string[];
}

export default function AchievementSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const activeAchievement = achievements[activeIndex];

  return (
    <section id="achievements" className="relative w-full overflow-hidden border-t border-black/[0.05] py-24">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(23,61,237,0.08),transparent)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
          <span className="block text-xs font-mono font-bold uppercase tracking-widest text-palatinate-blue">
            MILESTONES & RECOGNITIONS
          </span>
          <h2 className="font-sans text-4xl font-black leading-none tracking-tight text-primary-text uppercase md:text-5xl">
            ACHIEVEMENT ARCHIVE
          </h2>
          <p className="mx-auto max-w-2xl pt-2 font-sans text-base font-light leading-relaxed text-secondary-text">
            A focused record of technical outcomes, competition milestones, and leadership experience.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text">Select a record</p>
          <div aria-label="Achievement records" className="flex items-end gap-2 overflow-x-auto px-1 pt-7">
            {achievements.map((achievement, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={achievement.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`relative min-w-36 shrink-0 rounded-t-[1.6rem] border px-4 pb-3 pt-4 text-left text-xs font-mono font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-palatinate-blue sm:min-w-44 ${
                    isActive
                      ? "z-10 -mb-px border-palatinate-blue bg-palatinate-blue text-white shadow-[0_-8px_20px_rgba(23,61,237,0.18)]"
                      : "border-white/80 bg-[#dcdee2]/85 text-secondary-text hover:bg-white/70 hover:text-primary-text"
                  } ${index % 2 === 1 ? "translate-y-2" : ""}`}
                >
                  <span className="block text-[10px] uppercase tracking-widest opacity-75">{achievement.date}</span>
                  <span className="mt-1 block max-w-48 whitespace-normal leading-tight">{achievement.title}</span>
                </button>
              );
            })}
          </div>

          <article className="relative rounded-b-[2rem] rounded-tr-[2rem] border border-white/80 bg-[#dcdee2]/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.1)] backdrop-blur-xl md:min-h-[31rem] md:p-10">
            <div aria-hidden="true" className="absolute inset-0 rounded-b-[2rem] rounded-tr-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_55%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem]">
              <div>
                <div className="flex flex-col gap-4 border-b border-black/[0.06] pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-palatinate-blue">{activeAchievement.subtitle}</p>
                    <h3 className="mt-2 font-sans text-2xl font-black leading-tight tracking-tight text-primary-text md:text-4xl">{activeAchievement.title}</h3>
                  </div>
                  <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-white/90 bg-white/55 px-3 py-1.5 text-[10px] font-mono font-bold text-secondary-text shadow-[0_1px_4px_rgba(0,0,0,0.01)]">
                    <Calendar className="h-3.5 w-3.5 text-palatinate-blue" />
                    {activeAchievement.date}
                  </span>
                </div>

                <div className="pt-6">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text">Overview</p>
                  <p className="mt-3 max-w-3xl font-sans text-base font-light leading-relaxed text-secondary-text">{activeAchievement.description}</p>
                </div>
              </div>

              <aside className="rounded-2xl border border-palatinate-blue/15 bg-palatinate-blue/[0.06] p-5">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-palatinate-blue">Proof points</p>
                <ul className="mt-4 space-y-3">
                  {activeAchievement.bullets?.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs leading-relaxed text-secondary-text">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-palatinate-blue" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
