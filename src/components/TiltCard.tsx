"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";

interface TiltCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.4)",
  ...motionProps
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track mouse coordinates relative to the card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Track whether mouse is hovering
  const [isHovered, setIsHovered] = useState(false);
  
  // Map coordinates to 3D rotation angles (-6 to 6 degrees for elegant Apple feel)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  
  // Map coordinates to glow positions (percentage)
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  
  // Apply spring physics for buttery-smooth movements
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize mouse coordinates to [-0.5, 0.5]
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        ...motionProps.style
      }}
      whileHover={{ scale: 1.012 }}
      {...motionProps}
      className={`light-glass-card light-glass-card-hover relative overflow-hidden transition-[box-shadow,backdrop-filter,background-color,border-color] duration-300 ${className}`}
    >
      {/* Light Refraction Halo Glow */}
      <motion.div
        style={{
          background: `radial-gradient(circle 220px at ${glowX} ${glowY}, ${glowColor}, transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-0"
      />
      
      {/* Specular Edge Refraction Highlight */}
      <motion.div
        style={{
          background: `radial-gradient(circle 120px at ${glowX} ${glowY}, rgba(255, 255, 255, 0.35), transparent 75%)`,
          opacity: isHovered ? 1 : 0,
        }}
        className="absolute inset-[1px] rounded-[inherit] pointer-events-none z-0"
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full pointer-events-auto">
        {children}
      </div>
    </motion.div>
  );
}
