"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const sliderItems = [
  {
    image: "/web-app-design-woman.png",
    title: "Technology is best when it brings people together",
    desc: "We design premium website services & mobile applications that scale and grow."
  },
  {
    image: "/metro-fintech-mockup.png",
    title: "Fintech solutions that power global commerce",
    desc: "Seamless, secure, and user-centric interfaces for modern financial operations."
  },
  {
    image: "/pricing-devices-mockup.png",
    title: "Modern interfaces that engage and convert",
    desc: "Crafting digital journeys that turn visitors into loyal clients."
  },
  {
    image: "/farming-sustainability-mockup.png",
    title: "Sustainable designs built for tomorrow's world",
    desc: "Merging aesthetic elegance with clean, optimized technical architecture."
  }
];

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    const maxDisplacement = 12;
    const distance = Math.sqrt(x * x + y * y);
    if (distance < 60) {
      setPosition({
        x: (x / 60) * maxDisplacement,
        y: (y / 60) * maxDisplacement,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 12, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function WelcomeSection() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-white text-slate-800 py-32 md:py-44 overflow-hidden border-t border-purple-50 font-sans"
    >
      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.25]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-slate-200" />
        ))}
      </div>

      {/* Ambient Gradient Lights */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#00D4FF]/3 to-transparent blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#008FED]/2.5 to-transparent blur-[180px] pointer-events-none z-0" />

      {/* Interactive mouse spotlight tracking */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.04), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Editorial Copy (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00D4FF] font-display shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>WELCOME SERVICE HUB</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-[-0.04em] mb-8 font-display text-[#1E1A39]"
            >
              Best Web/App Designing <br />
              Services
            </motion.h2>

            {/* Paragraphs with customized dividers and high-readability text */}
            <div className="flex flex-col gap-8 border-l-2 border-[#00D4FF]/20 pl-8 mb-12">
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-slate-700 leading-relaxed font-normal"
              >
                A responsive website is a site that has been designed and developed to provide an optimal viewing and interactive experience across a wide range of devices and screen sizes, from desktop computers to mobile phones.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-base text-slate-500 leading-relaxed font-normal"
              >
                At Mitsafe, we have a professional team of website developers who can turn your dream website into a real one. They use their innovation and experience to provide the best outcome so that you can enjoy maximum benefits. The website designed by our team is capable of converting users into buyers. We are known for the best Website designing services in Indore and we provide our Website development services to USA clients and many others from around the globe.
              </motion.p>
            </div>

            {/* Discover More link button inside Magnetic wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Magnetic>
                <a
                  href="/contact"
                  className="relative inline-flex items-center gap-3.5 px-9 py-4.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#008FED] text-[#071426] font-bold text-sm hover:from-[#00E5FF] hover:to-[#008FED]/85 transition-all duration-300 shadow-[0_8px_30px_rgba(0, 212, 255, 0.25)] hover:shadow-[0_15px_45px_rgba(0, 212, 255, 0.4)] group"
                >
                  <span className="tracking-wide">Discover more</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: Parallax Glass Showcase Device (Span 5) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] max-w-[430px] rounded-[3rem] bg-gradient-to-br from-white to-slate-50 border border-[#E5E2F0] p-6 overflow-hidden backdrop-blur-2xl shadow-[0_30px_60px_rgba(124,58,237,0.06)]">
              
              {/* Inner ambient ring */}
              <div className="absolute inset-2 border border-slate-200/40 rounded-[2.5rem] pointer-events-none" />

              {/* Top notch design for aesthetic */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-[#071426] rounded-full border border-[rgba(0,212,255,0.15)] z-30 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]/60 mr-2" />
                <span className="w-12 h-1 bg-white/10 rounded-full" />
              </div>

              {/* Slider Image Frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, filter: "blur(12px)", scale: 1.1 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(12px)", scale: 0.92 }}
                    transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={sliderItems[index].image}
                      alt={sliderItems[index].title}
                      fill
                      sizes="(max-width: 640px) 100vw, 450px"
                      className="object-cover"
                      priority
                    />
                    {/* Vignette bottom filter */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Overlapping Info Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0B1A2E]/90 border border-[rgba(0,212,255,0.15)] rounded-2xl p-6 backdrop-blur-lg text-white flex flex-col gap-2 shadow-[0_15px_40px_rgba(0,212,255,0.08)] z-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h4 className="font-display text-base font-bold leading-snug text-white tracking-tight">
                        {sliderItems[index].title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal mt-2">
                        {sliderItems[index].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Back Parallax Shape */}
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-gradient-to-br from-[#00D4FF]/15 to-[#008FED]/15 blur-2xl rounded-full -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}
