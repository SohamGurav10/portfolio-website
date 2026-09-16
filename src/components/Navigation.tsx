"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";

const navigationItems = [
  { label: "ABOUT ME", id: "about-me" },
  { label: "PROJECTS", id: "projects" },
  { label: "SKILLS", id: "skills" },
  { label: "ACHIEVEMENTS", id: "achievements" },
  { label: "CONTACT", id: "contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const visibleSections = useRef(new Map<string, number>());
  const navigationTarget = useRef<string | null>(null);
  const navigationTimer = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  const navigateToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    window.clearTimeout(navigationTimer.current);
    navigationTarget.current = id;
    setActiveSection(id);
    window.history.pushState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
    navigationTimer.current = window.setTimeout(() => {
      navigationTarget.current = null;
    }, 1200);
  };

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

  useEffect(() => {
    const sectionIds = ["hero", ...navigationItems.map((item) => item.id)];

    const observer = new IntersectionObserver(
      (entries) => {
        if (navigationTarget.current) return;

        entries.forEach((entry) => {
          visibleSections.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const [sectionId, visibility] = [...visibleSections.current.entries()].reduce(
          (mostVisible, current) => current[1] > mostVisible[1] ? current : mostVisible,
          ["hero", 0] as [string, number],
        );

        if (visibility > 0) {
          const nextSection = sectionId === "hero" ? null : sectionId;
          setActiveSection((currentSection) => currentSection === nextSection ? currentSection : nextSection);
        }
      },
      { rootMargin: "-28% 0px -52%", threshold: [0, 0.2, 0.6] },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const completeNavigation = () => {
      navigationTarget.current = null;
      window.clearTimeout(navigationTimer.current);
    };

    window.addEventListener("scrollend", completeNavigation);
    return () => {
      window.removeEventListener("scrollend", completeNavigation);
      window.clearTimeout(navigationTimer.current);
    };
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
          <span className="font-sans text-xl font-bold tracking-tighter text-primary-text group-hover:text-palatinate-blue transition-colors">
            soham gurav
          </span>
        </a>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center">
          <LayoutGroup id="primary-navigation">
            <nav aria-label="Primary navigation" className="flex items-center gap-1 rounded-full p-1 text-xs font-mono tracking-widest text-secondary-text">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => navigateToSection(event, item.id)}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    className={`relative rounded-full px-3 py-2 uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-palatinate-blue ${
                      isActive ? "text-palatinate-blue" : "text-on-glass hover:text-palatinate-blue"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-navigation-item"
                        aria-hidden="true"
                        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 -z-10 transform-gpu rounded-full border border-white/85 bg-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_3px_10px_rgba(15,23,42,0.08)] will-change-transform"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                );
              })}
            </nav>
          </LayoutGroup>
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
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  onClick={(event) => {
                    navigateToSection(event, item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-lg py-2 transition-colors hover:text-palatinate-blue hover:bg-[#173DED]/5 ${
                    activeSection === item.id ? "bg-[#173DED]/10 text-palatinate-blue" : ""
                  }`}
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
