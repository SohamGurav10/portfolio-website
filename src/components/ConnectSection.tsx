"use client";

import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import Grainient from "./Grainient";

export default function ConnectSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Email delivery was not accepted. Please use the email link below.");

      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected network error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSocialClick = (platform: string) => {
    // Analytics/logging fallback
    console.log(`Navigating to ${platform}`);
  };

  return (
    <footer id="contact" className="pt-24 pb-0 w-full relative overflow-hidden">

      {/* Background Grainient effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.35]">
        <Grainient
          color1="#bababa"
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

      {/* Background glow orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-palatinate-blue/[0.02] blur-[140px] pointer-events-none" />

      {/* Inner grid limited to max-w-7xl, leaving footer background full-bleed */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          {/* Left Column - Typography */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-palatinate-blue font-bold block">
              GET IN TOUCH
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#111111] uppercase leading-[0.9] font-sans">
              LET’S <br /> CONNECT.
            </h2>
            <p className="text-secondary-text font-sans font-light text-base md:text-lg leading-relaxed max-w-md">
              Have an interesting contract opportunity, classroom project, or full-stack software challenge? Reach out via the form, or ping me through any of the channels below. Let&apos;s engineer something premium together.
            </p>
          </div>

          {/* Right Column - Premium Glassmorphism Contact Form */}
          <div className="lg:col-span-7 w-full">
            <TiltCard
              whileHover={{ scale: 1 }}
              className="p-8 md:p-10 rounded-[2.2rem] glass-tint-connect shadow-[0_10px_25px_rgba(0,0,0,0.03)] text-on-glass relative"
            >

              {/* Shimmer overlay */}
              <div className="shimmer-element-light" />

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase font-mono text-secondary-text tracking-wider font-bold">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      maxLength={100}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Enter your name"
                      className="
                      w-full px-5 py-4 rounded-xl bg-white/30 border border-white/95 text-[#111111] placeholder-black/25
                      focus:outline-none focus:border-palatinate-blue focus:ring-1 focus:ring-palatinate-blue/20
                      transition-all duration-300 font-sans text-sm shadow-[0_1px_4px_rgba(0,0,0,0.01)]
                    "
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase font-mono text-secondary-text tracking-wider font-bold">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      maxLength={254}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="
                      w-full px-5 py-4 rounded-xl bg-white/30 border border-white/95 text-[#111111] placeholder-black/25
                      focus:outline-none focus:border-palatinate-blue focus:ring-1 focus:ring-palatinate-blue/20
                      transition-all duration-300 font-sans text-sm shadow-[0_1px_4px_rgba(0,0,0,0.01)]
                    "
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase font-mono text-secondary-text tracking-wider font-bold">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    maxLength={160}
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="How can I help you?"
                    className="
                    w-full px-5 py-4 rounded-xl bg-white/30 border border-white/95 text-[#111111] placeholder-black/25
                    focus:outline-none focus:border-palatinate-blue focus:ring-1 focus:ring-palatinate-blue/20
                    transition-all duration-300 font-sans text-sm shadow-[0_1px_4px_rgba(0,0,0,0.01)]
                  "
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase font-mono text-secondary-text tracking-wider font-bold">
                    MESSAGE BODY
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    maxLength={5000}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Draft your project description or question here..."
                    className="
                    w-full px-5 py-4 rounded-xl bg-white/30 border border-white/95 text-[#111111] placeholder-black/25
                    focus:outline-none focus:border-palatinate-blue focus:ring-1 focus:ring-palatinate-blue/20
                    transition-all duration-300 font-sans text-sm resize-none shadow-[0_1px_4px_rgba(0,0,0,0.01)]
                  "
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={submitting ? {} : { scale: 1.02, backgroundColor: "#2046ff" }}
                    whileTap={submitting ? {} : { scale: 0.98 }}
                    className={`
                    btn-glow-light w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full
                    bg-palatinate-blue text-white font-bold tracking-wide text-sm font-sans cursor-pointer
                    transition-all duration-300 shadow-[0_4px_15px_rgba(23,61,237,0.2)]
                    ${submitting ? "opacity-75 cursor-not-allowed" : ""}
                  `}
                  >
                    {submitting ? "SENDING..." : "SEND"}
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                      <Send className="w-3.5 h-3.5" />
                    </span>
                  </motion.button>
                </div>

                {/* Submission Notification Toast */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-700 text-sm text-center font-mono font-bold"
                  >
                    ✓ EMAIL ACCEPTED FOR DELIVERY. Talk soon!
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-sm text-center font-mono font-bold"
                  >
                    ⚠ {error}
                  </motion.div>
                )}

              </form>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Full-width Glass Footer Section at the bottom */}
      <div className="w-full bg-white/45 backdrop-blur-[40px] saturate-[170%] border-t border-white/60 mt-16 relative z-10">

        {/* Main Grid Footer Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start text-left">

            {/* Column 1 (Left - Branding & Contact Info) */}
            <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left order-1 lg:order-1">

              {/* Brand Description */}
              <div className="space-y-4">
                <h3 className="font-sans text-xl font-bold tracking-tighter text-primary-text">
                  soham gurav
                </h3>
                <p className="text-secondary-text font-sans font-light text-sm leading-relaxed max-w-xs">
                  Electronics & Computer Engineer<br />
                  specializing in high-performance IoT,<br />
                  mobile applications,<br />
                  and optimized full-stack digital architectures.
                </p>
              </div>

              {/* Preferred Contact Info */}
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text block">
                  PREFERRED CONTACT
                </span>
                <a
                  href="mailto:sohamgurav808@gmail.com"
                  className="flex items-center gap-2.5 hover:text-palatinate-blue transition-all duration-300 group w-fit bg-white/50 border border-white/95 hover:border-palatinate-blue/30 px-3.5 py-2 rounded-[1.2rem] shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(23,61,237,0.06)] hover:scale-[1.02] transform-gpu font-mono text-[12px]"
                >
                  <Mail className="w-3.5 h-3.5 text-palatinate-blue group-hover:scale-110 transition-transform" />
                  <span className="font-black text-primary-text group-hover:text-palatinate-blue transition-colors">sohamgurav808@gmail.com</span>
                </a>

                {/* Location Line */}
                <div className="flex items-center gap-2 text-xs font-mono text-secondary-text font-bold uppercase tracking-wider pl-1">
                  <svg className="w-3.5 h-3.5 text-palatinate-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Pune, India</span>
                </div>
              </div>

            </div>

            {/* Column 2 (Center - Social Channels) */}
            <div className="flex flex-col items-center text-center justify-center space-y-4 order-2 md:order-3 lg:order-2 md:col-span-2 lg:col-span-1 md:py-6 lg:py-0">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text block">
                SOCIAL CHANNELS
              </span>
              <div className="flex items-center gap-3">
                {[
                  {
                    icon: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    ),
                    label: "Email",
                    link: "mailto:sohamgurav808@gmail.com"
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/soham-gurav/"
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    ),
                    label: "GitHub",
                    link: "https://github.com/SohamGurav10"
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                    label: "X",
                    link: "https://x.com/soham-gurav"
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    ),
                    label: "Instagram",
                    link: "https://www.instagram.com/so.oham/"
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    onClick={() => handleSocialClick(social.label)}
                    aria-label={social.label}
                    whileHover={{
                      scale: 1.12,
                      backgroundColor: "#2046ff",
                      borderColor: "#2046ff",
                      boxShadow: "0 0 16px 3px rgba(23, 61, 237, 0.4)"
                    }}
                    whileTap={{
                      scale: 0.95,
                      backgroundColor: "#102ec4",
                      borderColor: "#102ec4",
                      boxShadow: "0 0 20px 5px rgba(23, 61, 237, 0.55)"
                    }}
                    className="
                      w-10 h-10 rounded-full bg-palatinate-blue border border-[#173DED]
                      flex items-center justify-center text-white shadow-[0_3px_10px_rgba(23,61,237,0.2)]
                      cursor-pointer transition-all duration-300
                    "
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 3 (Right - Quick Links) */}
            <div className="space-y-4 flex flex-col items-center md:items-end text-center md:text-right w-full order-3 md:order-2 lg:order-3 lg:col-span-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-text block">
                QUICK LINKS
              </span>
              <div className="flex flex-col items-center md:items-end gap-2.5 text-xs font-mono text-secondary-text font-bold">
                {[
                  { label: "ABOUT ME", id: "about-me" },
                  { label: "PROJECTS", id: "projects" },
                  { label: "SKILLS", id: "skills" },
                  { label: "ACHIEVEMENTS", id: "achievements" },
                  { label: "CONTACT", id: "contact" }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="hover:text-palatinate-blue transition-colors w-fit relative group uppercase"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-palatinate-blue group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom border & Copyright info */}
        <div className="w-full border-t border-white/60 py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-xs font-mono text-primary-text font-bold">
            <div>
              <span>© 2026 Soham Gurav. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
