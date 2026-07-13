"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

interface LocalParticle {
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

const localColors = ["#008FED", "#5EC8FF", "#A855F7", "#FF4FA2", "#B8E6FF"];
const localShapes = ["circle", "dot", "line", "star", "plus", "outline-circle", "diamond"];

function LocalParticleShape({ shape, color }: { shape: string; color: string }) {
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
    case "plus":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" stroke={color} strokeWidth="2">
          <line x1="4" y1="0" x2="4" y2="8" />
          <line x1="0" y1="4" x2="8" y2="4" />
        </svg>
      );
    case "outline-circle":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" stroke={color} strokeWidth="1.8">
          <circle cx="4" cy="4" r="3.2" />
        </svg>
      );
    case "diamond":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill={color}>
          <polygon points="4,0 8,4 4,8 0,4" />
        </svg>
      );
    default:
      return null;
  }
}

// Scroll Reveal Helper
function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "zoom";
  delay?: number;
  className?: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      case "up":
        return { opacity: 0, y: 30 };
      case "down":
        return { opacity: 0, y: -30 };
      case "zoom":
        return { opacity: 0, scale: 0.95 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : getInitial()}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const [particles, setParticles] = useState<LocalParticle[]>([]);

  useEffect(() => {
    const count = 35;
    const newParticles: LocalParticle[] = [];
    for (let i = 0; i < count; i++) {
      const shape = localShapes[Math.floor(Math.random() * localShapes.length)];
      const color = localColors[Math.floor(Math.random() * localColors.length)];
      const size = 12 + Math.random() * 16;
      newParticles.push({
        id: i,
        shape,
        color,
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        xEnd: (Math.random() - 0.5) * 80,
        yEnd: -100 - Math.random() * 150,
        rotEnd: (Math.random() - 0.5) * 360,
        duration: 25 + Math.random() * 30,
        delay: -Math.random() * 50,
        opacity: 0.15 + Math.random() * 0.25,
      });
    }
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.website || !form.message) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", website: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  return (
    <div className="cosmic-contact-wrapper min-h-screen pt-24 pb-20 relative overflow-hidden text-[#1E1A39] dark:text-white transition-colors duration-300">
      
      {/* Local Particles container overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute pointer-events-none"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              x: [0, p.xEnd],
              y: [0, p.yEnd],
              rotate: [0, p.rotEnd],
              opacity: [0, p.opacity, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <LocalParticleShape shape={p.shape} color={p.color} />
          </motion.div>
        ))}
      </div>

      {/* Floating decorative gradient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-sky-300/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[30%] right-[5%] w-[450px] h-[450px] rounded-full bg-blue-400/5 blur-[130px] pointer-events-none" />
      </div>

      {/* Hero Section Banner */}
      <div className="relative w-full h-[320px] bg-gradient-to-b from-[#EBF3FC] to-[#D5E6FC] dark:from-[#0B1A2E] dark:to-[#071426] flex flex-col items-center justify-center text-center overflow-hidden z-10 px-6 border-b border-[#008FED]/10 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,143,237,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <motion.h1 
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl md:text-5xl font-display font-extrabold text-[#1E1A39] dark:text-white tracking-wide"
        >
          Contact Us
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-3 text-xs md:text-sm text-slate-500 dark:text-sky-200/80 font-medium tracking-widest uppercase flex items-center gap-2"
        >
          <span>Home</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#008FED] dark:bg-sky-450" />
          <span className="text-[#008FED] dark:text-white">Contact Us</span>
        </motion.div>
      </div>

      {/* Content Layout Wrapper */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Middle Illustration Section */}
        <div className="flex flex-col items-center justify-center text-center mt-20 mb-24">
          <ScrollReveal direction="up" delay={0}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#008FED] dark:text-[#00D4FF] border border-[#008FED]/15 dark:border-[#00D4FF]/25 px-3.5 py-1.5 rounded-full bg-[#008FED]/5 dark:bg-[#00D4FF]/10 font-mono">
              BUSINESS
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-[#1E1A39] dark:text-white tracking-tight max-w-2xl leading-tight">
              Find the Perfect Solution for Your Business
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-650 dark:text-slate-350 max-w-3xl">
              We are here with our team to help you each and every types of IT services for you connect now with our experts.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="zoom" delay={0.2} className="w-full max-w-4xl mt-12 flex justify-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-500 bg-white/40 dark:bg-white/5 border border-[#008FED]/10 dark:border-white/10 p-2">
              <Image 
                src="/contact-team-illustration.png" 
                alt="Tech Team Illustration" 
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain p-4 rounded-xl"
                priority
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Lower Grid Info and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 text-left mb-24">
          
          {/* Left Column Information Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal direction="up" delay={0}>
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#008FED] dark:text-[#00D4FF] border border-[#008FED]/15 dark:border-[#00D4FF]/25 px-3.5 py-1.5 rounded-full bg-[#008FED]/5 dark:bg-[#00D4FF]/10 font-mono">
                GET IN TOUCH
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1E1A39] dark:text-white tracking-tight">
                Contact Us
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-sm md:text-base leading-relaxed text-slate-650 dark:text-slate-350 font-normal">
                I have world-class, flexible support via live chat, email and phone. I guarantee that you'll be able to have any issue resolved within 24 hours.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-5 mt-6 border-t border-slate-100 dark:border-white/10 pt-6">
              
              <ScrollReveal direction="up" delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#008FED] dark:text-[#00D4FF] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[#1E1A39] dark:text-white block text-xs font-bold tracking-wider mb-0.5">Phone:</span>
                    <a href="tel:+916265944392" className="text-sm text-slate-650 dark:text-slate-350 font-medium hover:text-[#008FED] dark:hover:text-[#00D4FF] transition-colors">+91 6265944392</a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.25}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#008FED] dark:text-[#00D4FF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[#1E1A39] dark:text-white block text-xs font-bold tracking-wider mb-0.5">Send Email:</span>
                    <a href="mailto:info@mitsafe.com" className="text-sm text-slate-650 dark:text-slate-350 font-medium hover:text-[#008FED] dark:hover:text-[#00D4FF] transition-colors">info@mitsafe.com</a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#008FED] dark:text-[#00D4FF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[#1E1A39] dark:text-white block text-xs font-bold tracking-wider mb-0.5">Address:</span>
                    <span className="text-sm text-slate-650 dark:text-slate-350 font-medium leading-relaxed">
                      202 Business island Nipaniya<br />Indore MP- 452010
                    </span>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* Right Column Drop Us a Line Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <ScrollReveal direction="up" delay={0}>
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#008FED] dark:text-[#00D4FF] border border-[#008FED]/15 dark:border-[#00D4FF]/25 bg-[#008FED]/5 dark:bg-[#00D4FF]/10 font-mono">
                CONTACT US
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1E1A39] dark:text-white tracking-tight">
                Drop Us a Line
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed -mt-3">
                Contact us now
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2 bg-white/70 dark:bg-[#0B1A2E]/70 border border-[#008FED]/15 dark:border-white/10 shadow-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md">
                
                {success && (
                  <div className="flex items-center gap-2.5 text-xs text-emerald-600 font-semibold p-4 rounded-xl bg-emerald-50 border border-emerald-100 mb-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
                    <span>Your message has been sent successfully. We will contact you soon!</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Your Name*"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071426]/60 text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#008FED] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#008FED]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="Email*"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071426]/60 text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#008FED] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#008FED]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071426]/60 text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#008FED] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#008FED]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <input
                      type="url"
                      name="website"
                      value={form.website}
                      onChange={handleInputChange}
                      placeholder="Website*"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071426]/60 text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#008FED] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#008FED]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071426]/60 text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#008FED] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#008FED]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm resize-none"
                    required
                  />
                </div>

                <div className="mt-3 flex justify-start">
                  <Button
                    type="submit"
                    variant="primary"
                    className="bg-[#008FED] hover:bg-[#0077D4] text-white hover:scale-[1.03] active:scale-[0.98] transition-all hover:shadow-[0_0_20px_rgba(0,143,237,0.3)] shadow-[0_4px_10px_rgba(0,143,237,0.15)]"
                  >
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                  </Button>
                </div>
              </form>
            </ScrollReveal>
          </div>

        </div>

        {/* Newsletter Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mt-12 bg-white/70 dark:bg-[#0B1A2E]/70 border border-[#008FED]/15 dark:border-white/10 shadow-sm rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left side: Icon & text */}
            <div className="flex items-start md:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#008FED] dark:text-[#00D4FF] shrink-0">
                <svg className="w-7 h-7 transform rotate-[-12deg]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-display text-xl sm:text-4xl font-extrabold text-[#1E1A39] dark:text-white">
                  Sign up for Newsletter
                </h3>
                <p className="mt-1 text-sm text-[#008FED] dark:text-[#00D4FF] font-semibold">
                  and receive 40% discount on first project
                </p>
              </div>
            </div>

            {/* Right side: Input Form */}
            <div className="w-full lg:max-w-md">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-grow px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#071426]/60 text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#008FED] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#008FED]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-[#008FED] hover:bg-[#0077D4] text-white hover:scale-[1.02] transition-transform font-bold"
                >
                  SUBSCRIBE
                </Button>
              </form>
              
              {newsletterSuccess && (
                <p className="text-left text-xs text-emerald-600 font-semibold mt-2 pl-2">
                  Thank you for subscribing!
                </p>
              )}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
