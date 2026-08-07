"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

// Global WeakSet to keep track of elements that already have particles
const elementsWithParticles = new WeakSet<Element>();

interface ParticleData {
  id: number;
  shape: string;
  color: string;
  size: number;
  left: number;
  top: number;
  xEnd: number;
  yEnd: number;
  rotEnd: number;
  duration: number;
  delay: number;
  opacity: number;
}

const colors = ["#00D4FF", "#00E5FF", "#008FED", "#E0F7FF"];
const shapes = ["circle", "dot", "star"];


function ParticleShape({ shape, color }: { shape: string; color: string }) {
  switch (shape) {
    case "circle":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill={color}>
          <circle cx="4" cy="4" r="4" />
        </svg>
      );
    case "dot":
      return (
        <svg width="100%" height="100%" viewBox="0 0 4 4" fill={color}>
          <circle cx="2" cy="2" r="2" />
        </svg>
      );
    case "line":
      return (
        <svg width="100%" height="100%" viewBox="0 0 12 4" stroke={color} strokeWidth="2.2" strokeLinecap="round">
          <line x1="1" y1="2" x2="11" y2="2" />
        </svg>
      );
    case "star":
      return (
        <svg width="100%" height="100%" viewBox="0 0 10 10" fill={color}>
          <path d="M5,0 L6.2,3.8 L10,5 L6.2,6.2 L5,10 L3.8,6.2 L0,5 L3.8,3.8 Z" />
        </svg>
      );
    case "triangle":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill={color}>
          <polygon points="4,0 8,8 0,8" />
        </svg>
      );
    case "diamond":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill={color}>
          <polygon points="4,0 8,4 4,8 0,4" />
        </svg>
      );
    case "plus":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" stroke={color} strokeWidth="2">
          <line x1="4" y1="0" x2="4" y2="8" />
          <line x1="0" y1="4" x2="8" y2="4" />
        </svg>
      );
    case "x":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" stroke={color} strokeWidth="2">
          <line x1="1" y1="1" x2="7" y2="7" />
          <line x1="7" y1="1" x2="1" y2="7" />
        </svg>
      );
    case "outline-circle":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" stroke={color} strokeWidth="1.8">
          <circle cx="4" cy="4" r="3.2" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionParticles({ target }: { target: Element }) {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    const htmlTarget = target as HTMLElement;
    const originalPosition = htmlTarget.style.position;
    const originalIsolation = htmlTarget.style.isolation;

    // Apply styles to establish stacking context
    const computedStyle = window.getComputedStyle(htmlTarget);
    if (!computedStyle.position || computedStyle.position === "static") {
      htmlTarget.style.position = "relative";
    }
    htmlTarget.style.isolation = "isolate";

    // Generate particles (small glowing fireflies)
    const count = 10;
    const newParticles: ParticleData[] = [];

    for (let i = 0; i < count; i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 2.5 + Math.random() * 4.5; // 2.5px to 7px

      newParticles.push({
        id: i,
        shape,
        color,
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        xEnd: (Math.random() - 0.5) * 60, // gentle drifting
        yEnd: (Math.random() - 0.5) * 60, // gentle drifting
        rotEnd: (Math.random() - 0.5) * 180,
        duration: 20 + Math.random() * 25, // slow floating duration
        delay: -Math.random() * 45, // start immediately at random offsets
        opacity: 0.15 + Math.random() * 0.4, // 0.15 to 0.55 visibility
      });
    }

    setParticles(newParticles);

    return () => {
      // Clean up styles
      htmlTarget.style.position = originalPosition;
      htmlTarget.style.isolation = originalIsolation;
    };
  }, [target]);

  return (
    <div className="global-particle-container absolute inset-0 pointer-events-none overflow-hidden z-[-1] will-change-transform">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="floating-particle absolute pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            filter: `drop-shadow(0 0 4px ${p.color})`,
          }}
          animate={{
            x: [0, p.xEnd],
            y: [0, p.yEnd],
            rotate: [0, p.rotEnd],
            opacity: [0, p.opacity, p.opacity * 0.25, p.opacity, p.opacity * 0.4, p.opacity * 0.15, p.opacity, 0],
            scale: [0.75, 1.15, 0.85, 1.25, 0.9, 1.1, 0.75]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ParticleShape shape={p.shape} color={p.color} />
        </motion.div>
      ))}
    </div>
  );
}

export default function ParticleBackground() {
  const [targets, setTargets] = useState<Element[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest(
        ".glow-border-hover, [class*='GlowCard'], [class*='glow-card'], [class*='GlowCardLight'], .portfolio-page-container a > div"
      );
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scanTargets = () => {
      // Limit particle portals to footer section
      const selectors = "footer";
      const elements = Array.from(document.querySelectorAll(selectors));
      
      const newTargets = elements.filter((el) => !elementsWithParticles.has(el));
      
      if (newTargets.length > 0) {
        newTargets.forEach((el) => elementsWithParticles.add(el));
        setTargets((prev) => [...prev, ...newTargets]);
      }
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(scanTargets);
    } else {
      setTimeout(scanTargets, 100);
    }

    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(scanTargets, 300);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {targets.map((target, idx) =>
        createPortal(<SectionParticles key={idx} target={target} />, target)
      )}
    </>
  );
}
