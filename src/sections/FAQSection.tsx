"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, HelpCircle as HelpIcon, Sparkles } from "lucide-react";

const faqData = [
  {
    question: "How do we start a project with Mitsafe?",
    answer: "To start a project, simply fill out our contact form or send us an email. We will schedule a free initial consultation to discuss your requirements, objectives, and project timeline. Following this, we will provide a detailed proposal and cost estimate."
  },
  {
    question: "What is the typical timeline for web development?",
    answer: "The timeline depends on the project complexity and scope. A simple informational website may take 3 to 6 weeks, while a more complex custom application or e-commerce platform can take 8 to 16 weeks. We establish clear milestone deliveries during planning."
  },
  {
    question: "Do you offer ongoing support & maintenance?",
    answer: "Yes, we offer flexible post-launch support and maintenance packages. This includes regular security patches, performance optimizations, database backups, minor content updates, and framework upgrades to ensure smooth operation."
  },
  {
    question: "Can you redesign our existing corporate website?",
    answer: "Absolutely. We analyze your current site's performance, UX bottlenecks, and branding before drafting a fresh layout. We ensure zero SEO keyword ranking loss by setting up exact redirects and database mapping."
  },
  {
    question: "Is the website responsive and mobile friendly?",
    answer: "Yes, every design we produce is fully responsive, catering seamlessly to mobile viewports, tablet screens, and ultra-wide desktop monitors. We perform cross-browser quality checks before going live."
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
    
    const maxDisplacement = 6;
    const distance = Math.sqrt(x * x + y * y);
    if (distance < 40) {
      setPosition({
        x: (x / 40) * maxDisplacement,
        y: (y / 40) * maxDisplacement,
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
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white text-slate-800 py-16 md:py-20 relative overflow-hidden border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky info - Span 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-6 flex flex-col items-start">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 font-display shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>FAQ DOCUMENTATION</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-[-0.03em] mb-6 text-black"
            >
              Got Questions? <br />
              We&apos;ve Got <span className="text-[#2563FF] inline-block" style={{ color: "#2563FF", WebkitTextFillColor: "#2563FF", background: "none" }}>Answers.</span>
            </motion.h2>

            {/* Paragraph description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-500 font-normal text-base md:text-lg max-w-lg mb-8 leading-relaxed"
            >
              Find answers to commonly asked questions about our process, design systems, support, and technical services.
            </motion.p>

            {/* Visual box inside sidepanel */}
            <div className="w-full max-w-[340px] rounded-3xl bg-white border border-slate-200 p-6 flex items-center gap-4.5 relative overflow-hidden group shadow-sm hover:border-[#2563FF] transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                <HelpIcon className="w-6 h-6 text-[#2563FF] stroke-[2px]" />
              </div>
              <div className="flex flex-col gap-0.5 z-10">
                <span className="text-sm font-bold text-slate-900 font-display">Need Custom Support?</span>
                <a href="/contact" className="text-xs text-[#2563FF] font-semibold hover:underline">Reach out to our engineers &rarr;</a>
              </div>
            </div>
          </div>

          {/* Right Column (Accordion Cards - Span 7) */}
          <div className="lg:col-span-7 flex flex-col w-full gap-5">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFAQ(idx)}
                  className={`group/card border cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out ${
                    isOpen 
                      ? "bg-[#F0F8FF] border-[#2563FF] shadow-md" 
                      : "bg-white border-slate-200 hover:border-[#2563FF] hover:bg-[#F0F8FF] shadow-sm"
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-6 select-none">
                    <h3
                      className={`font-display text-lg sm:text-xl font-bold transition-colors duration-300 ${
                        isOpen ? "text-[#2563FF]" : "text-slate-900 group-hover/card:text-[#2563FF]"
                      }`}
                    >
                      {item.question}
                    </h3>
                    <Magnetic>
                      <button
                        aria-label="Toggle FAQ"
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#2563FF] border-[#2563FF] text-white rotate-90"
                            : "bg-slate-50 border-slate-200 text-slate-500 group-hover/card:bg-[#2563FF] group-hover/card:border-[#2563FF] group-hover/card:text-white"
                        }`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </Magnetic>
                  </div>

                  {/* Animated Expand Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: {
                              type: "spring",
                              stiffness: 150,
                              damping: 20
                            },
                            opacity: { duration: 0.3 }
                          }
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.25 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ filter: "blur(6px)", y: 10 }}
                          animate={{ filter: "blur(0px)", y: 0 }}
                          exit={{ filter: "blur(6px)", y: 10 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mt-5 pr-4 border-l-2 border-blue-500/30 pl-4"
                        >
                          {item.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
