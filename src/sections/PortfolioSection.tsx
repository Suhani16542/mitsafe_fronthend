"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const caseStudies = [
  {
    title: "Metro Fintech",
    category: "Web Site Design / Dev",
    summary: "Branding, layout designing and development for a financial services firm displaying real-time mutual fund charts, SIP calculators, and schemes. We designed a clean, user-friendly client dashboard, integrated secure payment gateways, and connected real-time market APIs to ensure rapid data loading and seamless transactions.",
    img: "/metro-fintech-mockup.png",
    slug: "metrofintech-mutual-fund-website-development"
  },
  {
    title: "Farming Sustainability",
    category: "Web Site Design / Dev",
    summary: "A clean eco-friendly interface design layout mockup for an agricultural sustainability startup, showing dashboard charts and analytics. We implemented custom interactive map widgets, carbon credit calculator tools, and a detailed IoT sensor dashboard to track soil quality, water levels, and energy outputs in real time.",
    img: "/farming-sustainability-mockup.png",
    slug: "auro-terra-energy-website-design"
  },
  {
    title: "The Wedding",
    category: "Web Site Design / Dev",
    summary: "Custom web development and matrimonial portal design for a modern match-making platform, featuring search filters and simple navigation. We built advanced matching algorithms, secure profile verification flows, and instant chat channels, providing users with a safe, optimized, and highly reliable connection experience.",
    img: "/wedding-matrimony-mockup.png",
    slug: "more-matrimony"
  }
];

const renderTitle = (title: string) => {
  const words = title.split(" ");
  if (words.length <= 1) {
    return <span style={{ color: "#2563FF", WebkitTextFillColor: "#2563FF", background: "none" }}>{title}</span>;
  }
  const lastWord = words.pop();
  const rest = words.join(" ");
  return (
    <>
      <span className="text-black">{rest} </span>
      <span className="text-[#2563FF] inline-block" style={{ color: "#2563FF", WebkitTextFillColor: "#2563FF", background: "none" }}>
        {lastWord}
      </span>
    </>
  );
};

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only run on client after mount
    if (!sectionRef.current || typeof window === 'undefined') return;

    let ctx = gsap.context(() => {
      // Elements
      const images = gsap.utils.toArray<HTMLElement>('.portfolio-img-slide');
      const contents = gsap.utils.toArray<HTMLElement>('.portfolio-content-slide');
      const dots = gsap.utils.toArray<HTMLElement>('.portfolio-dot');
      
      // Ensure initial state
      gsap.set(images.slice(1), { opacity: 0, scale: 1.05 });
      gsap.set(contents.slice(1), { opacity: 0, y: 50 });
      gsap.set(dots[0], { scale: 1.5, backgroundColor: "#008FED" });
      gsap.set(dots.slice(1), { scale: 1, backgroundColor: "#E2E8F0" });

      // Create main ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // Shortened end distance to make scroll feel responsive and tight
          scrub: true,   // Scrub set to true so the animation locks to the scrollbar instantly, removing lag
          pin: true,     // Pin the section
          anticipatePin: 1
        }
      });

      // Pause on slide 1 so it stays visible for a while before moving
      tl.to({}, { duration: 1.5 });

      // --- TRANSITION 1 to 2 ---
      tl.to(images[0], { opacity: 0, scale: 0.95, duration: 1 }, "+=0")
        .to(contents[0], { opacity: 0, y: -50, duration: 1 }, "<")
        .to(dots[0], { scale: 1, backgroundColor: "#E2E8F0", duration: 1 }, "<")
        
        .to(images[1], { opacity: 1, scale: 1, duration: 1 }, "<")
        .to(contents[1], { opacity: 1, y: 0, duration: 1 }, "<")
        .to(dots[1], { scale: 1.5, backgroundColor: "#008FED", duration: 1 }, "<");
        
      // Pause on slide 2 so user can comfortably read it
      tl.to({}, { duration: 1.5 });

      // --- TRANSITION 2 to 3 ---
      tl.to(images[1], { opacity: 0, scale: 0.95, duration: 1 }, "+=0")
        .to(contents[1], { opacity: 0, y: -50, duration: 1 }, "<")
        .to(dots[1], { scale: 1, backgroundColor: "#E2E8F0", duration: 1 }, "<")
        
        .to(images[2], { opacity: 1, scale: 1, duration: 1 }, "<")
        .to(contents[2], { opacity: 1, y: 0, duration: 1 }, "<")
        .to(dots[2], { scale: 1.5, backgroundColor: "#008FED", duration: 1 }, "<");
        
      // Pause on slide 3 so it doesn't immediately snap away at the end
      tl.to({}, { duration: 1.5 });
        
    }, sectionRef); // Scoped context

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <div id="portfolio" className="relative bg-white font-sans border-t border-slate-200">
      
      {/* DESKTOP PINNED GSAP SCROLLTRIGGER VERSION (lg screens) */}
      <div className="hidden lg:block">
        <div ref={sectionRef} className="h-screen w-full flex items-center overflow-hidden bg-white relative">
          
          {/* Background Ambient Lights */}
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00D4FF]/5 to-transparent blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-[10%] right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#008FED]/5 to-transparent blur-[150px] pointer-events-none z-0" />

          {/* Core Fixed Layout Container */}
          <div className="max-w-7xl mx-auto w-full px-8 grid grid-cols-12 gap-16 items-center relative z-10 h-full">
            
            {/* Left Side: Fixed Image Showcase Container */}
            <div className="col-span-6 relative h-[60vh] flex items-center justify-center">
              <div className="relative w-full h-full rounded-[3rem] bg-white border border-slate-200 p-5 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-50 flex items-center justify-center">
                  
                  {caseStudies.map((study, idx) => (
                    <div 
                      key={`img-${study.slug}`} 
                      className={`portfolio-img-slide absolute inset-0 w-full h-full flex items-center justify-center p-4 z-${30 - idx * 10}`}
                      style={{ pointerEvents: idx === 2 ? 'auto' : 'none' }}
                    >
                      <Image src={study.img} alt={study.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority={idx === 0} />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ))}

                </div>
              </div>
            </div>

            {/* Right Side: Fixed Editorial Copy Container */}
            <div className="col-span-6 relative h-[60vh] flex flex-col justify-center pl-8">
              
              {caseStudies.map((study, idx) => (
                <div 
                  key={`content-${study.slug}`} 
                  className={`portfolio-content-slide absolute inset-x-0 pl-8 flex flex-col items-start z-${30 - idx * 10}`}
                  style={{ pointerEvents: idx === 2 ? 'auto' : 'none' }}
                >
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00D4FF] font-display shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{study.category}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-5xl font-bold tracking-tight leading-tight mb-6">
                    {renderTitle(study.title)}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-lg">
                    {study.summary}
                  </p>
                  <Link href={`/portfolio/${study.slug}`} className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#008FED] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0077D4] transition-all duration-300 shadow-md group">
                    <span>View Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              ))}

              {/* Dynamic Scroll Progress Dots */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-40">
                <div className="portfolio-dot w-2.5 h-2.5 rounded-full" />
                <div className="portfolio-dot w-2.5 h-2.5 rounded-full" />
                <div className="portfolio-dot w-2.5 h-2.5 rounded-full" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* MOBILE PREMIUM VERTICAL COLLAPSIBLE/SCROLLING VERSION (sm/md screens) */}
      <div className="block lg:hidden py-12 px-6 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <div className="flex flex-col gap-10 w-full">
            {caseStudies.map((study, idx) => (
              <div key={study.slug} className="w-full flex flex-col bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
                <div className="relative aspect-[4/3] w-full bg-slate-50 border-b border-slate-200 p-4">
                  <Image src={study.img} alt={study.title} fill sizes="(max-width: 576px) 100vw, 576px" className="object-cover" />
                </div>
                <div className="p-8 flex flex-col items-start gap-4">
                  <span className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest font-mono bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <h3 className="font-display text-4xl font-bold">
                    {renderTitle(study.title)}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {study.summary}
                  </p>
                  <Link href={`/portfolio/${study.slug}`} className="mt-4 w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#008FED] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0077D4] transition-all duration-300">
                    <span>View Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
