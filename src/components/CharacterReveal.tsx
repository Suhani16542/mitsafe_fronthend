"use client";

import React from "react";
import { motion } from "framer-motion";

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function CharacterReveal({
  text,
  className = "",
  delay = 0,
}: CharacterRevealProps) {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.022,
        delayChildren: delay + 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35, rotateX: 65 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 90,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`inline-block perspective-[500px] transform-gpu origin-bottom ${className}`}
    >
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          variants={letterVariants}
          className="inline-block transform-gpu origin-bottom whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
