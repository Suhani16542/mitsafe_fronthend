"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Play, Star, Quote } from "lucide-react";

interface TestimonialCard {
  id: string;
  type: "video" | "text";
  name: string;
  role: string;
  company: string;
  quote?: string;
  rating?: number;
  image: string;
}

const testimonials: TestimonialCard[] = [
  {
    id: "1",
    type: "video",
    name: "Michelle Anne",
    role: "Founder",
    company: "Crazy Delivery",
    image: "/showcase/app_1.png",
  },
  {
    id: "2",
    type: "text",
    name: "Neil Patwardhan",
    role: "Founder",
    company: "Skoop",
    rating: 5,
    quote:
      "I think MITSAFE is passionate enough about what we're doing and really wants to help grow and support that. Our relationship has lasted as long as it has and continues to do so with top craftsmanship.",
    image: "/showcase/web_1.png",
  },
  {
    id: "3",
    type: "video",
    name: "Gerardin",
    role: "Founder",
    company: "Island Boyz",
    image: "/showcase/app_2.png",
  },
  {
    id: "4",
    type: "text",
    name: "ElsaMarie D'Silva",
    role: "Founder",
    company: "Red Dot Foundation",
    rating: 5,
    quote:
      "MITSAFE was an excellent partner to work with on the Safecity Mobile app which crowdsources safety data. The team was very attuned to our needs, worked in tandem with our team, and did a quality job.",
    image: "/showcase/seo_1.png",
  },
  {
    id: "5",
    type: "text",
    name: "Tej Pandey",
    role: "CEO",
    company: "Tez 888",
    rating: 5,
    quote:
      "I recently had the pleasure of working with Modern Technology for my website design needs. I am beyond impressed with their attention to detail, speed, and overall digital engineering excellence.",
    image: "/showcase/hosting_1.png",
  },
  {
    id: "6",
    type: "text",
    name: "Marcus Vance",
    role: "Director",
    company: "Auro Terra",
    rating: 5,
    quote:
      "Fast response times, clean modular architecture, 99.9% uptime, and 24/7 dedicated cloud engineering support throughout our platform launch and traffic spikes.",
    image: "/showcase/web_2.png",
  },
];

export default function TestimonialsSection() {
  const infiniteLoop = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 md:py-12 font-sans border-t border-slate-100 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center flex flex-col items-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#38BDF8] mb-2.5 backdrop-blur-sm shadow-sm">
          <Sparkles className="w-3 h-3 text-[#38BDF8]" />
          <span>CLIENT REVIEWS & CASE TESTIMONIALS</span>
        </div>

        {/* Heading */}
        <h2
          style={{ fontFamily: "'Clash Display', sans-serif" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
        >
          To Deliver{" "}
          <span
            style={{ color: "#2563FF", WebkitTextFillColor: "#2563FF", background: "none" }}
            className="text-[#2563FF] inline-block font-extrabold"
          >
            Transformative Excellence
          </span>
        </h2>
      </div>

      {/* Gradient edge masks for infinite loop */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

      {/* Infinite Horizontal Continuous Slider */}
      <div className="flex w-full overflow-hidden relative z-10">
        <motion.div
          className="flex shrink-0 gap-5 py-1"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {infiniteLoop.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[280px] sm:w-[320px] shrink-0 h-[360px] rounded-2xl border border-slate-200 bg-white p-5 shadow-lg flex flex-col justify-between overflow-hidden group text-slate-900"
            >
              {/* VIDEO TYPE CARD */}
              {item.type === "video" ? (
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden flex flex-col justify-between p-5 border border-slate-200 bg-white text-slate-900">
                  {/* Background Mockup Image */}
                  <Image src={item.image} alt={item.name} fill sizes="340px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent z-10" />

                  {/* Top Video Review Pill */}
                  <div className="relative z-20 flex justify-end">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full backdrop-blur-sm">
                      VIDEO REVIEW
                    </span>
                  </div>

                  {/* Center Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#0052FF]/40 animate-ping absolute" />
                      <div className="w-14 h-14 rounded-full bg-[#2563FF] text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,82,255,0.8)] group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Author Pill */}
                  <div className="relative z-20 flex items-center gap-3 bg-slate-50 border border-slate-200 backdrop-blur-md p-3.5 rounded-2xl text-slate-900">
                    <div className="w-9 h-9 rounded-xl bg-[#8BE83A] text-slate-950 flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold leading-tight text-slate-900">
                        {item.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-600">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* TEXT TYPE CARD WITH PURE #FFFFFF WHITE TEXT INLINE */
                <div className="flex flex-col justify-between h-full relative p-1 text-slate-900">
                  <div>
                    {/* Top Star Rating & Blue Quote Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-7 h-7 text-[#38BDF8]" />
                    </div>

                    {/* Review Quote Text in Pure #FFFFFF White */}
                    <p
                      className="relative z-20 text-base leading-relaxed font-bold tracking-wide text-slate-900"
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Author Badge with Image Avatar */}
                  <div className="pt-4 border-t border-slate-200 flex items-center gap-3.5 mt-4 text-slate-900">
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-[#38BDF8] shrink-0 shadow-lg">
                      <Image src={item.image} alt={item.name} fill sizes="44px" className="object-cover" />
                    </div>
                    <div>
                      <h4 className="relative z-20 text-sm font-extrabold tracking-wide leading-tight text-slate-900">
                        {item.name}
                      </h4>
                      <p className="relative z-20 text-xs font-bold mt-0.5 text-slate-600">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}