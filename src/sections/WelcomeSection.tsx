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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="group relative bg-white text-slate-800 py-12 md:py-16 overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Copy (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#305EFF] font-display shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>WELCOME SERVICE HUB</span>
            </motion.div>

            {/* Heading */}
            <div className="relative mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-slate-900 dark:text-white"
              >
                Best Web/App <br />
                <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                  Designing Services
                </span>
              </motion.h2>
              {/* Subtle animated blue underline */}
              <div className="relative mt-4 w-32 h-[3.5px] rounded-full overflow-hidden bg-slate-200/20 dark:bg-slate-700/20">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                  className="h-full bg-[#305EFF] relative"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  />
                </motion.div>
              </div>
            </div>

            {/* Paragraphs with customized dividers and high-readability text */}
            <div className="flex flex-col gap-5 border-l-2 border-[#305EFF]/20 pl-6 mb-8 font-sans">
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium"
              >
                A responsive website is a site that has been designed and developed to provide an optimal viewing and interactive experience across a wide range of devices and screen sizes, from desktop computers to mobile phones.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium"
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
                  className="group inline-flex items-center justify-center gap-2.5 h-11 px-6 bg-[#305EFF] hover:bg-[#305EFF] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5 shadow-sm font-display"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: Parallax Glass Showcase Device (Span 5) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] max-w-[430px] rounded-[3rem] bg-white border border-slate-200 p-6 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-350 ease-in-out hover:border-[#305EFF]/30 hover:shadow-[0_30px_60px_rgba(37,99,255,0.12)]">
              
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
                <div className="absolute bottom-6 left-6 right-6 bg-[#0B1A2E]/90 border border-[rgba(0,212,255,0.15)] rounded-2xl p-6 backdrop-blur-lg text-white flex flex-col gap-2 shadow-[0_15px_40px_rgba(0,212,255,0.08)] z-20 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#305EFF] hover:shadow-[0_15px_40px_rgba(37,99,255,0.2)]">
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
          </div>

        </div>
      </div>
    </section>
  );
}
