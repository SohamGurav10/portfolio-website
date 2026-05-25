"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-transform duration-500 px-4 md:px-8 py-4
        ${scrolled ? "translate-y-3" : "translate-y-0"}
      `}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`
          mx-auto w-full transition-all duration-500 ease-out
          flex items-center justify-between px-6 py-2.5 shimmer-trigger
          ${scrolled
            ? "max-w-3xl rounded-[20px] bg-white/40 backdrop-blur-[48px] saturate-[160%] shadow-[0_12px_40px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.5)] border-t border-l border-white/50 border-b border-r border-black/10"
            : "max-w-7xl rounded-full bg-transparent border border-transparent shadow-none"
          }
        `}
      >
        {/* Logo - S++ or Soham */}
        <a href="#" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-lg bg-palatinate-blue flex items-center justify-center font-mono text-sm font-bold text-white shadow-[0_4px_12px_rgba(23,61,237,0.2)]"
          >
            SG
          </motion.div>
          <span className="font-sans text-sm font-bold tracking-widest text-primary-text uppercase group-hover:text-palatinate-blue transition-colors">
            SOHAM GURAV
          </span>
        </a>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center gap-8 text-xs font-mono tracking-widest text-secondary-text">
            {[
              { label: "ABOUT ME", id: "about-me" },
              { label: "PROJECTS", id: "projects" },
              { label: "SKILLS", id: "skills" },
              { label: "EXPERIENCE", id: "experience" },
              { label: "CONTACT", id: "contact" }
            ].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ scale: 1.08, color: "#173DED" }}
                className="transition-colors uppercase relative py-1 text-on-glass"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="flex md:hidden items-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="w-9 h-9 rounded-lg bg-white/30 border border-white/50 flex items-center justify-center text-secondary-text hover:text-primary-text transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-md"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden mt-2 mx-auto max-w-sm rounded-[2rem] bg-white/95 backdrop-blur-xl border border-white/50 p-6 shadow-2xl"
          >
            <nav className="flex flex-col space-y-4 text-sm font-mono text-center tracking-widest text-secondary-text">
              {[
                { label: "ABOUT ME", id: "about-me" },
                { label: "PROJECTS", id: "projects" },
                { label: "SKILLS", id: "skills" },
                { label: "EXPERIENCE", id: "experience" },
                { label: "CONTACT", id: "contact" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-palatinate-blue hover:bg-[#173DED]/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
