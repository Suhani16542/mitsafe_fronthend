"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "var(--card-glow-color)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Rotate calculation: max 6 degrees tilt along X/Y
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5.5; 
    const rotateY = ((x - centerX) / centerX) * 5.5;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
      style={{
        transform: isFocused
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-8px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isFocused
          ? "transform 0.08s ease-out, border-color 0.3s"
          : "transform 0.4s ease-out, border-color 0.3s",
      }}
      className={`relative overflow-hidden rounded-2xl border border-[#008FED]/10 dark:border-[rgba(0,212,255,0.08)] bg-[#FAFBFF]/85 dark:bg-[#0B1A2E]/70 p-6 shadow-[0_10px_30px_rgba(0,143,237,0.03)] dark:shadow-md backdrop-blur-xl hover:border-[#008FED]/40 dark:hover:border-[#00D4FF]/25 hover:shadow-[0_20px_40px_rgba(0,143,237,0.1)] dark:hover:shadow-lg hover:bg-white dark:hover:bg-[#0B1A2E]/90 transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          zIndex: 0,
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
}
