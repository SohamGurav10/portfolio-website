"use client";

import React from "react";
import { Terminal, Workflow, HardDrive, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

function TechIcon({ tech, className = "w-6 h-6" }: { tech: string; className?: string }) {
  const normalized = tech.toLowerCase().trim();

  switch (normalized) {
    case "dart":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Dart</title>
          <path d="M12 0L2.4 9.6l3.394 3.393L12 6.786l6.206 6.207l3.394-3.393L12 0z" fill="#0175C2" />
          <path d="M12 24l9.6-9.6-3.394-3.393L12 17.214l-6.206-6.207-3.394 3.393L12 24z" fill="#13B9FD" />
          <path d="M18.206 13.393L12 17.214l-6.206-6.207H12l6.206 2.386z" fill="#01579B" />
        </svg>
      );
    case "python":
    case "async python":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Python</title>
          <path d="M11.997 1c-2.316.03-4.48.243-4.993.743-.585.572-.614 1.135-.614 2.222V6.03H10.14v1.01H4.63C3.542 7.04 2.8 7.37 2.235 7.94c-.65.65-.67 1.347-.67 2.53v4.048c0 1.056.242 1.832.742 2.332.54.54 1.08.61 2.223.61h1.52v-2.025a3.03 3.03 0 0 1 3.037-3.036h6.074a1.01 1.01 0 0 0 1.013-1.012V5.275c0-1.127-.22-1.745-.776-2.302-.557-.557-1.196-.79-3.003-.943-1.425-.12-3.35-.035-5.187-.02zM8.455 3.535a.76.76 0 1 1 0 1.517.76.76 0 0 1 0-1.517z" fill="#3776AB" />
          <path d="M12.003 23c2.316-.03 4.48-.243 4.993-.743.585-.572.614-1.135.614-2.222v-2.052H13.86v-1.01h5.51c1.088 0 1.83-.33 2.395-.9.65-.65.67-1.347.67-2.53v-4.048c0-1.056-.242-1.832-.742-2.332-.54-.54-1.08-.61-2.223-.61h-1.52v2.025a3.03 3.03 0 0 1-3.037 3.036H8.869a1.01 1.01 0 0 0-1.013 1.012v4.843c0 1.127.22 1.745.776 2.302.557.557 1.196.79 3.003.943 1.425.12 3.35.035 5.187.02zm3.542-2.535a.76.76 0 1 1 0-1.517.76.76 0 0 1 0 1.517z" fill="#FFE052" />
        </svg>
      );
    case "c":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>C Language</title>
          <path d="M18.8 19.8C16.8 21.2 14.5 22 12 22 6.5 22 2 17.5 2 12S6.5 2 12 2c2.5 0 4.8.8 6.8 2.2l1.6-2C18.1.8 15.2 0 12 0 5.4 0 0 5.4 0 12s5.4 12 12 12c3.2 0 6.1-.8 8.4-2.2l-1.6-2z" fill="#00599C" />
          <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.5-1.1 6-2.8l-2.4-1.8c-1 .8-2.2 1.2-3.6 1.2-3.3 0-6-2.7-6-6s2.7-6 6-6c1.4 0 2.6.4 3.6 1.2l2.4-1.8C16.5 5.1 14.4 4 12 4z" fill="#004482" />
          <path d="M19 12c0 2.2-1 4.2-2.6 5.5l1.6 2C20.2 17.7 21 15 21 12s-.8-5.7-3-7.5l-1.6 2C18 7.8 19 9.8 19 12z" fill="#659AD2" />
        </svg>
      );
    case "c++":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>C++ Language</title>
          <path d="M11.5 21.82L2.5 17V7l9-4.82L20.5 7v10l-9 4.82z" fill="#00599C" />
          <path d="M11.5 19.82L4 15.82V8.18l7.5-4 7.5 4v7.64l-7.5 4z" fill="#004482" />
          <path d="M10.5 15.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4 .5 4.8 1.5l-1.8 1.2c-.5-.5-1.5-.7-2-.7-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c.6 0 1.5-.2 2-.7l1.8 1.2c-.8 1-2.3 1.5-4.8 1.5z" fill="#ffffff" />
          <path d="M17.5 11.5h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1zM21.5 11.5h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1z" fill="#659AD2" />
        </svg>
      );
    case "java":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Java</title>
          <path d="M6.16 17.29c-.77.16-1.56.28-2.34.34-.69.05-1.38-.28-1.5-.96-.13-.76.38-1.46 1.15-1.58.74-.11 1.49-.17 2.23-.19.89-.02 1.77.29 1.93 1.18.17.98-.68 1.05-1.47 1.21zm2.34 2.82c-.82.17-1.66.31-2.5.38-.63.05-1.25-.26-1.37-.87-.13-.7.31-1.35 1.01-1.47.81-.13 1.63-.22 2.45-.25.86-.03 1.7.27 1.83 1.11.13.88-.6 1.01-1.42 1.1zM18.8 10.4c-.6-.2-1.3-.3-2.1-.3.5-1.2.9-2.5 1.1-3.8.1-.5.1-1-.2-1.4-.4-.5-1-.6-1.5-.6-1 0-2 .4-2.8.9-1.2.8-2.1 2-2.7 3.3-.6-.1-1.2-.1-1.8 0 .1-.5.2-1 .3-1.5.2-1 .6-2 1.3-2.8.4-.5.9-1 1.5-1 .5 0 .9.2 1.2.6.4.5.4 1.1.3 1.7-.1.6-.3 1.2-.5 1.8 1.2-.7 2.6-1 4-.9 1.1 0 2.2.4 2.8 1.3.6.9.5 2-.1 2.8-.5.8-1.2 1.4-2.1 1.8z" fill="#EA2D42" />
          <path d="M13.2 16.5c2.4 0 4.6-.3 6.6-.9.8-.2 1.4-.5 1.9-.9.4-.3.6-.7.6-1.1 0-1-1.3-1.8-3.3-2.3-2-.5-4.4-.7-6.8-.7s-4.8.2-6.8.7C3.3 11.8 2 12.6 2 13.6c0 .4.2.8.6 1.1.5.4 1.1.7 1.9.9 2 .6 4.2.9 6.7.9z" fill="#0073B7" />
          <path d="M12.9 19.3c2.1 0 4.2-.2 6-.7.6-.2 1.2-.4 1.6-.7.4-.3.5-.6.5-.9 0-.2-.1-.4-.3-.6-.3-.3-.8-.5-1.5-.7-1.8-.5-4.1-.7-6.5-.7s-4.7.2-6.5.7c-.7.2-1.2.4-1.5.7-.2.2-.3.4-.3.6 0 .3.1.6.5.9.4.3 1 .5 1.6.7 1.8.5 3.9.7 6 .7z" fill="#5382A1" />
          <path d="M12.5 22c2 0 3.9-.2 5.5-.6.5-.1 1-.3 1.3-.5.3-.2.4-.4.4-.6 0-.2-.1-.3-.2-.5-.2-.2-.6-.4-1.2-.5-1.5-.4-3.5-.6-5.6-.6s-4.1.2-5.6.6c-.6.1-1 .3-1.2.5-.1.2-.2.3-.2.5 0 .2.1.4.4.6.3.2.8.4 1.3.5 1.6.4 3.5.6 5.5.6z" fill="#0073B7" />
        </svg>
      );
    case "sql":
    case "mysql":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>MySQL</title>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#00758F" />
          <path d="M16.5 13.5c-.8-1.5-2.2-2.5-3.8-3.2-.8-.3-1.6-.6-2.5-.8-1.1-.2-2.2-.3-3.3-.2-.5 0-.9.2-1.2.6-.3.4-.4.9-.3 1.4.1.5.4 1 .8 1.3 1 .8 2.2 1.4 3.5 1.7 1.2.3 2.5.4 3.8.2.8-.1 1.6-.3 2.3-.7.5-.3.8-.7.7-1.3z" fill="#F29111" />
          <path d="M14.5 9.5c-.5-.8-1.2-1.5-2-2.1-.8-.6-1.8-1-2.8-1.2-.8-.2-1.6-.3-2.4-.2.5.5.9 1.1 1.2 1.8.3.7.4 1.5.3 2.3-.1.8-.4 1.6-.8 2.2l3-1c.9-.3 1.8-.8 2.5-1.5.7-.7 1.1-1.6 1-2.3z" fill="#ffffff" />
        </svg>
      );
    case "flutter":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Flutter</title>
          <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37z" fill="#02569B" />
          <path d="M21.684 12.002H14.33L8.243 18.1l3.684 3.683L21.684 12z" fill="#0175C2" />
          <path d="M14.33 12.002l-3.684 3.683 3.684 3.683h7.354l-7.354-7.366z" fill="#13B9FD" />
        </svg>
      );
    case "fastapi":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>FastAPI</title>
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z" fill="#009688" />
          <path d="M12 4.8l-4.8 7.2h3.6v7.2l4.8-7.2h-3.6V4.8z" fill="#ffffff" />
        </svg>
      );
    case "rest apis":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>REST APIs</title>
          <rect x="2" y="5" width="20" height="14" rx="3" fill="#1E293B" stroke="#00D2B4" strokeWidth="1.5" />
          <path d="M6 12h4m4 0h4" stroke="#00D2B4" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" fill="#00D2B4" />
          <path d="M12 10.5v3" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "openai api":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>OpenAI API</title>
          <path d="M21.3 11.1c-.2-1.3-.9-2.5-2-3.2l-1.5-.9 1-1.7c.7-1.2.8-2.6.2-3.8s-1.7-2-3-2.2c-1.3-.2-2.5.2-3.4 1.1L11.5 1.5 10.5.9C9.3.2 7.9.1 6.7.7S4.8 2.3 4.5 3.6c-.2 1.3.2 2.5 1.1 3.4L4.5 8.1 3.9 8.7c-1 .8-1.6 2-1.8 3.3s.2 2.5 1.1 3.4l1.5.9-1 1.7c-.7 1.2-.8 2.6-.2 3.8s1.7 2 3 2.2c1.3.2 2.5-.2 3.4-1.1l1.1 1.1 1 1c.8.6 1.8.9 2.8.9.6 0 1.2-.1 1.8-.4 1.2-.7 2-1.8 2.3-3.1.2-1.3-.2-2.5-1.1-3.4l1.1-1.1 1-1c.8-.6 1.3-1.5 1.6-2.5.2-.8.2-1.7 0-2.5zm-8.8 8.8l-3.3-1.9c-.3-.2-.5-.5-.5-.9v-3.8l3.3 1.9c.3.2.5.5.5.9v3.8zm-.8-7.3l-3.3-1.9v-3.8l3.3 1.9v-3.8zm4.1-1l-3.3 1.9v-3.8l3.3-1.9v-3.8zm2.4-4.8l-3.3-1.9c-.3-.2-.5-.5-.5-.9v-3.8l3.3 1.9c.3.2.5.5.5.9v3.8zm-5.7-3l-3.3 1.9v-3.8l3.3-1.9v-3.8zm-4.1 1l-3.3-1.9v-3.8l3.3 1.9v-3.8z" fill="#10A37F" />
        </svg>
      );
    case "firebase":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Firebase</title>
          <path d="M3.89 15.75L12.44 2.1c.23-.37.77-.37 1 0l2.25 3.58-9.8 10.07z" fill="#FFC107" />
          <path d="M16.14 8.78l1.49-2.37c.23-.37.77-.37 1 0l2.48 4.77-4.97-2.4z" fill="#FF9800" />
          <path d="M12 22l8.2-10.45L12 2.1 3.8 11.55 12 22z" fill="#DD2C00" opacity="0.05" />
          <path d="M3.89 15.75l8.11 6.25 8.11-6.25-1.57-2.92-6.54 6.7c-.23.23-.61.23-.84 0l-7.27-3.78z" fill="#FF3D00" />
        </svg>
      );
    case "hive":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Hive Storage</title>
          <rect x="2" y="3" width="20" height="18" rx="4" fill="#F59E0B" />
          <path d="M6 8h12M6 12h12M6 16h12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="8" cy="8" r="1" fill="#F59E0B" />
          <circle cx="8" cy="12" r="1" fill="#F59E0B" />
          <circle cx="8" cy="16" r="1" fill="#F59E0B" />
        </svg>
      );
    case "postgresql":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>PostgreSQL</title>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#336791" />
          <path d="M16 11.5c.3.5.5 1 .6 1.6.1.6 0 1.2-.2 1.8-.3.8-.9 1.4-1.6 1.8-.8.4-1.7.5-2.5.3-.8-.2-1.5-.7-2-1.3l-1 1c.6.8 1.5 1.4 2.5 1.6 1 .2 2.1 0 3-.5.9-.5 1.6-1.3 1.9-2.3.3-.9.3-1.9 0-2.8l-1.7-.5z" fill="#ffffff" />
          <path d="M13.5 8.5c-.8-.8-1.9-1.2-3-1.2-1.5 0-3 1-3.5 2.5-.5 1.5-.2 3.1.8 4.2l1-1c-.6-.7-.8-1.6-.5-2.5.3-.8 1.1-1.3 2-1.3.7 0 1.4.3 1.9.8l1.3-1.5z" fill="#00A2E8" />
        </svg>
      );
    case "mongodb":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>MongoDB</title>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#113139" />
          <path d="M12 4.5c0 0-4.5 4.5-4.5 8 0 2.5 2 4.5 4.5 7 2.5-2.5 4.5-4.5 4.5-7 0-3.5-4.5-8-4.5-8z" fill="#47A248" />
          <path d="M12 4.5v14.5c1.5-1.5 2.5-3 2.5-5 0-2-2.5-9.5-2.5-9.5z" fill="#3F3F3F" opacity="0.15" />
          <path d="M12 7c0 0-.5 2-.5 4.5s.5 4.5.5 4.5.5-2 .5-4.5S12 7 12 7z" fill="#F0F2F1" opacity="0.4" />
        </svg>
      );
    case "redis":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Redis</title>
          <path d="M12 2.5L3 7l9 4.5L21 7l-9-4.5z" fill="#DC382D" />
          <path d="M3 7.5v4l9 4.5v-4L3 7.5z" fill="#A41F11" />
          <path d="M21 7.5v4l-9 4.5v-4l9-4.5z" fill="#7C140A" />
          <path d="M3 13.5v4l9 4.5v-4L3 13.5z" fill="#A41F11" opacity="0.8" />
          <path d="M21 13.5v4l-9 4.5v-4l9-4.5z" fill="#7C140A" opacity="0.8" />
        </svg>
      );
    case "git":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Git</title>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#F05032" />
          <path d="M17.5 11.5L12.5 6.5c-.3-.3-.7-.3-1 0l-1.5 1.5 2 2c.2-.1.4-.2.6-.2.6 0 1 .4 1 1s-.4 1-1 1c-.2 0-.4-.1-.6-.2l-2 2c.1.2.2.4.2.6 0 .6-.4 1-1 1s-1-.4-1-1c0-.2.1-.4.2-.6l-2-2c-.2.1-.4.2-.6.2-.6 0-1-.4-1-1s.4-1 1-1c.2 0 .4.1.6.2l2-2-1.5-1.5c-.3-.3-.7-.3-1 0L5.5 11.5c-.3.3-.3.7 0 1l5 5c.3.3.7.3 1 0l5-5c.3-.3.3-.7 0-1z" fill="#ffffff" />
        </svg>
      );
    case "github":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>GitHub</title>
          <circle cx="12" cy="12" r="10" fill="#24292E" />
          <path d="M12 5c-3.87 0-7 3.13-7 7 0 3.09 2 5.71 4.77 6.64.35.06.48-.15.48-.34 0-.17-.01-.62-.01-1.21-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.08.73 1.08.73.63 1.08 1.65.77 2.05.59.06-.46.25-.77.45-.95-1.55-.18-3.18-.78-3.18-3.47 0-.76.27-1.39.73-1.88-.07-.18-.32-.89.07-1.86 0 0 .59-.19 1.93.72a6.67 6.67 0 0 1 3.5 0c1.34-.91 1.93-.72 1.93-.72.39.97.14 1.68.07 1.86.46.49.73 1.12.73 1.88 0 2.7-1.63 3.29-3.19 3.46.25.22.48.65.48 1.32 0 .95-.01 1.72-.01 1.95 0 .19.13.41.49.34C17 17.71 19 15.09 19 12c0-3.87-3.13-7-7-7z" fill="#ffffff" />
        </svg>
      );
    case "docker":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Docker</title>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#2496ED" />
          <path d="M6 13h1.5v-1.5H6V13zm2.5 0H10v-1.5H8.5V13zm2.5 0h1.5v-1.5H11V13zm2.5 0H15v-1.5h-1.5V13zm2.5 0H17v-1.5h-1.5V13z" fill="#ffffff" />
          <path d="M6 10.5h1.5V9H6v1.5zm2.5 0H10V9H8.5v1.5zm2.5 0h1.5V9H11v1.5zm2.5 0H15V9h-1.5v1.5z" fill="#ffffff" />
          <path d="M8.5 8H10V6.5H8.5V8zm2.5 0h1.5V6.5H11V8z" fill="#ffffff" />
          <path d="M19 13.5c-.8-.8-1.8-1.2-2.8-1.2H4.5c-.3 0-.5.2-.5.5v2.5c0 1.5 1.2 2.7 2.7 2.7h10.6c1.5 0 2.7-1.2 2.7-2.7 0-.7-.4-1.4-1-1.8z" fill="#005691" />
        </svg>
      );
    case "postman":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Postman</title>
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M12 5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2zm0 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#ffffff" />
        </svg>
      );
    case "vs code":
    case "visualstudiocode":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Visual Studio Code</title>
          <path d="M23.984 6.81a.767.767 0 00-.317-.468L12.448.113a.765.765 0 00-.77 0L.333 6.342a.767.767 0 00-.317.468.756.756 0 00.187.6l6.634 6.634L.203 20.678c-.244.244-.244.64 0 .884l11.218 5.759a.765.765 0 00.77 0l11.218-5.759c.244-.244.244-.64 0-.884l-6.634-6.634 6.634-6.634a.756.756 0 00.187-.6z" fill="#007ACC" />
          <path d="M18.5 7.5L14 5l-1.5.5L9 8.5 6 6l-1 1 3 3-3 3 1 1 3-2.5 3.5 3 1.5.5 3.5-2.5V7.5z" fill="#ffffff" opacity="0.3" />
          <path d="M13.5 6.5L10 4v5l3.5-2.5zM7.5 12l-3-3 3-3 5.5 5.5L7.5 12zM10 15v5l3.5-2.5L10 15z" fill="#ffffff" />
        </svg>
      );
    case "bash terminal":
    case "gnubash":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>GNU Bash</title>
          <circle cx="12" cy="12" r="10" fill="#4EAA25" />
          <path d="M8 8.5v7h2V12h4v3.5h2v-7h-2V10h-4V8.5H8z" fill="#ffffff" />
        </svg>
      );
    case "notion":
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none">
          <title>Notion</title>
          <circle cx="12" cy="12" r="10" fill="#000000" />
          <path d="M8 7h8v1.5h-2.5v7H12v-7H9.5v7H8V7z" fill="#ffffff" />
        </svg>
      );
    default:
      return (
        <svg className={`${className} flex-shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
          <path d="M9 10l-3 2 3 2m6-4l3 2-3 2" />
        </svg>
      );
  }
}

interface SkillCategory {
  title: string;
  resumeLabel: string;
  icon: React.ReactNode;
  description: string;
  badges: string[];
  gridClass: string;
}

export default function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: "Core Programming Languages",
      resumeLabel: "Languages",
      icon: <Terminal className="w-5 h-5 text-palatinate-blue" />,
      description:
        "Writing compiled, highly-optimized programs and relational scripts. Adapting paradigms across hardware levels and client applications.",
      badges: ["Dart", "Python", "C", "C++", "Java", "SQL"],
      gridClass: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "Frameworks & APIs",
      resumeLabel: "Frameworks",
      icon: <Workflow className="w-5 h-5 text-palatinate-blue" />,
      description:
        "Developing responsive mobile layouts and ultra-low-latency backend REST API endpoints.",
      badges: ["Flutter", "FastAPI", "REST APIs", "Async Python", "OpenAI API"],
      gridClass: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Databases & Backend",
      resumeLabel: "Databases",
      icon: <HardDrive className="w-5 h-5 text-palatinate-blue" />,
      description:
        "Structuring relational databases and client-side key-value caches for swift retrieval queries.",
      badges: ["Firebase", "Hive", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
      gridClass: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Tools & OS Systems",
      resumeLabel: "Tools",
      icon: <Wrench className="w-5 h-5 text-palatinate-blue" />,
      description:
        "Deploying secure container services, command-line workflows, and leveraging developer assistants.",
      badges: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Bash Terminal", "Notion"],
      gridClass: "md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-black/[0.05] relative"
    >
      {/* Soft background glow */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-palatinate-blue/[0.01] blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-palatinate-blue font-bold block">
          SKILLS THAT FUEL MY PASSION
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-text uppercase leading-none">
          SKILLS & ARSENAL
        </h2>
      </div>

      {/* Bento Grid — 3-col on lg, 2-col on md */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {categories.map((category, index) => (
          <TiltCard
            key={index}
            className={`
              ${category.gridClass}
              glass-tint-skills rounded-[2.2rem] p-8 flex flex-col justify-between
              shadow-[0_10px_25px_rgba(0,0,0,0.03)] glass-fall-in text-on-glass
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col h-full justify-between gap-6 z-10 relative">

              {/* Category Icon and Info */}
              <div className="space-y-4">
                <div className="p-2.5 rounded-xl bg-white/50 border border-white/85 text-palatinate-blue shadow-[0_2px_6px_rgba(0,0,0,0.01)] w-fit">
                  {category.icon}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-palatinate-blue/60 font-bold block">
                    {category.resumeLabel}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-primary-text transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-secondary-text leading-relaxed font-sans font-light">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill pills with icon + text at the bottom */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {category.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="
                      inline-flex items-center gap-2 px-3 py-1.5 rounded-xl
                      bg-white/60 border border-white/85 text-[10px] font-mono font-bold text-primary-text
                      shadow-[0_1px_4px_rgba(0,0,0,0.01)] hover:bg-white/80 hover:border-palatinate-blue/20
                      hover:scale-[1.05] hover:shadow-[0_4px_12px_rgba(23,61,237,0.06)]
                      transition-all duration-300 cursor-default shrink-0
                    "
                  >
                    <TechIcon tech={badge} className="w-4 h-4" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>

            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}