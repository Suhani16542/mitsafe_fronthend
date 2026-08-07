"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bulletPoints = [
  "Professional Development",
  "High-End Client Support",
  "Responsive Layout Formats",
  "Pleasant User Experience"
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white py-12 md:py-16 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-800 font-display shadow-xs"
        >
          ABOUT US
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display mb-4"
        >
          <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>MT Games with latest technology</span> <br className="hidden md:inline" />
          <span className="text-[#2A67FF]" style={{ color: "#2A67FF", WebkitTextFillColor: "#2A67FF" }}>and high end support</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base leading-relaxed font-medium mb-8 max-w-2xl text-slate-500 font-sans"
        >
          At Mitsafe, we design and build next-generation interactive mobile and web games leveraging cutting-edge game engines, premium graphics, and scalable server backends. Our team handles everything from initial wireframes to production deployment.
        </motion.p>

        {/* Bullet Points */}
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3.5 w-full mb-8 font-sans"
        >
          {bulletPoints.map((pt, idx) => (
            <li
              key={idx}
              className="bg-slate-50/80 border border-slate-200/80 rounded-full py-2 px-5 flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#0052FF] shrink-0 shadow-xs">
                <Check className="w-3 h-3 stroke-[3px]" />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-slate-800 font-display">
                {pt}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group inline-flex items-center justify-center gap-2 h-11 px-6 bg-[#0052FF] hover:bg-[#0042D9] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto font-display"
        >
          Talk with an Expert
        </motion.a>
      </div>
    </section>
  );
}
