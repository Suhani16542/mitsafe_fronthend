"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Zap
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export type ModalType = "quote" | "consultation";

interface ConsultationModalProps {
  isOpen: boolean;
  modalType?: ModalType;
  initialService?: string;
  onClose: () => void;
}

export const SERVICE_OPTIONS = [
  { key: "web-development", label: "Website Design & Development" },
  { key: "mobile-app-development", label: "Android & iOS App Development" },
  { key: "software-development", label: "Software Development" },
  { key: "ai-automation", label: "AI & Automation Solutions" },
  { key: "ui-ux-design", label: "Graphic, Logo & UX/UI" },
  { key: "cloud-devops", label: "Cloud & DevOps Solutions" },
  { key: "crm-erp-solutions", label: "CRM & ERP Solutions" },
  { key: "ecommerce-development", label: "E-Commerce Development" },
  { key: "digital-marketing", label: "Digital Marketing & SEO" },
  { key: "games-development", label: "Games Development" },
  { key: "readymade-pos", label: "Readymade POS Systems" },
  { key: "school-erp-hrm", label: "School ERP & School HRM" },
];

export const SERVICE_IMAGE_MAP: Record<string, string> = {
  "web-development": "/hero-web-dev.png",
  "mobile-app-development": "/hero-mobile-dev.png",
  "software-development": "/hero-software-dev.png",
  "ai-automation": "/hero-ai-solutions.png",
  "ui-ux-design": "/hero-ui-ux.png",
  "cloud-devops": "/hero-cloud-devops.png",
  "crm-erp-solutions": "/hero-crm-erp.png",
  "ecommerce-development": "/hero-ecommerce.png",
  "digital-marketing": "/hero-digital-marketing.png",
  "games-development": "/game-dev-showcase.png",
  "readymade-pos": "/hero-exact-3d.png",
  "school-erp-hrm": "/hero-crm-erp.png",
};

export function getServiceOptionByQuery(query?: string): string {
  const text = (query || "").toLowerCase();
  if (text.includes("mobile") || text.includes("android") || text.includes("ios") || text.includes("app")) return "Android & iOS App Development";
  if (text.includes("ai") || text.includes("automation")) return "AI & Automation Solutions";
  if (text.includes("game")) return "Games Development";
  if (text.includes("pos")) return "Readymade POS Systems";
  if (text.includes("ui") || text.includes("ux") || text.includes("graphic") || text.includes("design")) return "Graphic, Logo & UX/UI";
  if (text.includes("cloud") || text.includes("devops")) return "Cloud & DevOps Solutions";
  if (text.includes("school") || text.includes("hrm")) return "School ERP & School HRM";
  if (text.includes("crm") || text.includes("erp")) return "CRM & ERP Solutions";
  if (text.includes("e-commerce") || text.includes("ecommerce") || text.includes("store")) return "E-Commerce Development";
  if (text.includes("marketing") || text.includes("seo")) return "Digital Marketing & SEO";
  if (text.includes("software")) return "Software Development";
  return "Website Design & Development";
}

export function getServiceKeyByOption(optionLabel: string): string {
  const found = SERVICE_OPTIONS.find((s) => s.label.toLowerCase() === optionLabel.toLowerCase());
  if (found) return found.key;

  const text = optionLabel.toLowerCase();
  if (text.includes("mobile") || text.includes("android") || text.includes("ios") || text.includes("app")) return "mobile-app-development";
  if (text.includes("ai") || text.includes("automation")) return "ai-automation";
  if (text.includes("game")) return "games-development";
  if (text.includes("pos")) return "readymade-pos";
  if (text.includes("ui") || text.includes("ux") || text.includes("design")) return "ui-ux-design";
  if (text.includes("cloud") || text.includes("devops")) return "cloud-devops";
  if (text.includes("school") || text.includes("hrm")) return "school-erp-hrm";
  if (text.includes("crm") || text.includes("erp")) return "crm-erp-solutions";
  if (text.includes("e-commerce") || text.includes("ecommerce")) return "ecommerce-development";
  if (text.includes("marketing") || text.includes("seo")) return "digital-marketing";
  if (text.includes("software")) return "software-development";
  return "web-development";
}

export default function ConsultationModal({
  isOpen,
  modalType = "quote",
  initialService,
  onClose,
}: ConsultationModalProps) {
  const isQuote = modalType === "quote";
  const pathname = usePathname();

  const defaultServiceOption = useMemo(() => {
    return getServiceOptionByQuery(initialService || pathname);
  }, [initialService, pathname]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceCategory: defaultServiceOption,
    budget: "Under $1,000",
    timeline: "ASAP",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isOpen) {
      const syncedOption = getServiceOptionByQuery(initialService || pathname);
      setFormData((prev) => ({
        ...prev,
        serviceCategory: syncedOption,
      }));
    }
  }, [isOpen, initialService, pathname]);

  const promoKey = useMemo(() => {
    return getServiceKeyByOption(formData.serviceCategory);
  }, [formData.serviceCategory]);

  const promoImage = SERVICE_IMAGE_MAP[promoKey] || "/hero-web-dev.png";
  const promoBadgeText = SERVICE_OPTIONS.find((s) => s.key === promoKey)?.label || "TECHNOLOGY SOLUTION";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
      setTimeout(() => {
        setSuccess(false);
        setErrorMsg("");
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    // Validate required fields
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your Full Name.");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMsg("Please enter your Work Email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg("Please enter your Project Details / Message.");
      return;
    }

    if (formData.message.trim().length < 5) {
      setErrorMsg("Project Details / Message must be at least 5 characters long.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const targetEndpoint =
      process.env.NEXT_PUBLIC_API_URL && !process.env.NEXT_PUBLIC_API_URL.includes("localhost")
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/quotes`
        : "/api/quote";

    const payload = {
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      companyName: formData.company.trim(),
      service: formData.serviceCategory.trim(),
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message.trim(),
      sourcePage: pathname || "/",
      requestType: modalType || "quote",
    };

    try {
      const response = await fetch(targetEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 400 && Array.isArray(data.errors) && data.errors.length > 0) {
          const combinedMsg = data.errors
            .map((err: { message?: string; msg?: string }) => err.message || err.msg)
            .filter(Boolean)
            .join(". ");
          throw new Error(combinedMsg || data.message || "Validation failed. Please check your inputs.");
        } else if (response.status === 429) {
          throw new Error(data.message || "Too many requests. Please try again later.");
        } else if (response.status >= 500) {
          throw new Error(data.message || "Server error. Please try again later.");
        } else {
          throw new Error(data.message || data.error || `Error (${response.status}): Failed to submit request.`);
        }
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceCategory: defaultServiceOption,
        budget: "Under ₹50K",
        timeline: "ASAP",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.name === "TypeError" && err.message.includes("fetch")) {
          setErrorMsg("Unable to connect to backend server. Please check your connection or backend status.");
        } else {
          setErrorMsg(err.message);
        }
      } else {
        setErrorMsg("An error occurred while processing your request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 font-sans overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

            {/* TWO-COLUMN SIDE-BY-SIDE POPUP MODAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[960px] max-h-[88vh] sm:max-h-[92vh] overflow-y-auto overscroll-contain custom-scrollbar bg-white text-slate-900 rounded-[24px] sm:rounded-[32px] shadow-2xl border border-slate-200/80 my-auto z-10"
            >
              {/* INNER PADDED CONTENT WRAPPER */}
              <div className="p-4 sm:p-7 lg:p-9 relative w-full">
                {/* Circular Close Button (Top Right) */}
                <button
                  onClick={onClose}
                  className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-all cursor-pointer shadow-xs shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* TWO-COLUMN SIDE-BY-SIDE GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start text-left">

                    {/* LEFT SIDE: SERVICE / TECHNOLOGY VISUAL CARD WITH SUBTLE CURVED TECH LINES BACKGROUND (lg:col-span-5) */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-center h-auto w-full">
                      <div className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 sm:p-5 shadow-2xs flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group">

                        {/* Subtle Decorative Curved Technology Lines Background (Mitsafe Blue #305EFF & Dark Navy #0F172A) */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0"
                          viewBox="0 0 400 400"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M -40 80 C 100 20, 220 200, 440 100 C 520 60, 580 180, 640 280"
                            stroke="#305EFF"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                          />
                          <path
                            d="M -20 260 C 120 170, 230 330, 430 190 C 510 140, 580 260, 620 340"
                            stroke="#0F172A"
                            strokeWidth="1.2"
                            strokeOpacity="0.5"
                          />
                          <path
                            d="M 60 -30 C 190 70, 130 270, 390 370"
                            stroke="#305EFF"
                            strokeWidth="1.2"
                            strokeOpacity="0.7"
                          />
                          <circle cx="140" cy="110" r="3.5" fill="#305EFF" />
                          <circle cx="310" cy="210" r="3.5" fill="#0F172A" />
                          <circle cx="210" cy="285" r="2.5" fill="#305EFF" />
                        </svg>

                        {/* Service Badge (Relative Z-10) */}
                        <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/20 font-mono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                          <Sparkles className="w-3.5 h-3.5 text-brand-blue shrink-0" style={{ color: "#305EFF" }} />
                          <span className="truncate max-w-[200px]">{promoBadgeText}</span>
                        </div>

                        {/* Dynamic Service Technology Image (Responsive visual space, Z-10) */}
                        <div className="relative z-10 w-full h-36 sm:h-52 lg:h-64 rounded-xl overflow-hidden bg-white border border-slate-200/70 shadow-xs flex items-center justify-center p-2">
                          <Image
                            src={promoImage}
                            alt={formData.serviceCategory}
                            fill
                            className="object-contain p-1.5 hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 1024px) 100vw, 38vw"
                            priority
                          />
                        </div>

                      {/* Key Trust Signals (Relative Z-10) */}
                      <div className="relative z-10 w-full pt-3 border-t border-slate-200/60 flex flex-col gap-2 text-left">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" style={{ color: "#305EFF" }} />
                          <span>100% Safe &amp; Confidential</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <Zap className="w-4 h-4 text-brand-blue shrink-0" style={{ color: "#305EFF" }} />
                          <span>24-Hour Fast Turnaround</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" style={{ color: "#305EFF" }} />
                          <span>Free Architecture Consultation</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT SIDE: CLEAN WHITE GET A QUOTE HEADING & ENQUIRY FORM (lg:col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col gap-3">

                    {/* Heading & Short Description */}
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-[#0F172A] tracking-tight leading-tight font-display">
                        Let&apos;s Build Your{" "}
                        <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                          Digital Solution
                        </span>
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        Tell us about your project and our team will help you find the right digital solution.
                      </p>
                    </div>

                    {/* FORM CONTENT */}
                    {success ? (
                      <div className="py-8 flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/20 flex items-center justify-center text-brand-blue mb-3 animate-bounce" style={{ color: "#305EFF" }}>
                          <CheckCircle2 className="w-6 h-6 text-brand-blue" style={{ color: "#305EFF" }} />
                        </div>
                        <h3 className="text-lg font-extrabold text-slate-900 mb-1 font-display">Request Received!</h3>
                        <p className="text-xs text-slate-600 mb-4 max-w-xs leading-relaxed font-normal">
                          Our support team will review your request and get back to you shortly.
                        </p>
                        <button
                          onClick={onClose}
                          className="px-6 py-2.5 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer font-sans"
                          style={{ backgroundColor: "#305EFF" }}
                        >
                          Return to Website
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-full">
                        {errorMsg && (
                          <div className="py-1.5 px-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-1.5 font-medium">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                            <span>{errorMsg}</span>
                          </div>
                        )}

                        {/* Row 1: Full Name * | Work Email * */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-start w-full">
                          <div className="flex flex-col gap-1 w-full min-w-0">
                            <label className="text-[11.5px] font-bold text-slate-800">
                              Full Name <span className="text-brand-blue" style={{ color: "#305EFF" }}>*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs font-medium focus:outline-none focus:border-[#305EFF] transition-all"
                            />
                          </div>

                          <div className="flex flex-col gap-1 w-full min-w-0">
                            <label className="text-[11.5px] font-bold text-slate-800">
                              Work Email <span className="text-brand-blue" style={{ color: "#305EFF" }}>*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs font-medium focus:outline-none focus:border-[#305EFF] transition-all"
                            />
                          </div>
                        </div>

                        {/* Row 2: Phone Number | Company Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-start w-full">
                          <div className="flex flex-col gap-1 w-full min-w-0">
                            <label className="text-[11.5px] font-bold text-slate-800">
                              Phone Number
                            </label>
                            <div className="relative flex items-center bg-slate-50/70 hover:bg-white border border-slate-200 rounded-xl focus-within:border-[#305EFF] transition-all focus-within:bg-white overflow-hidden w-full">
                              <div className="flex items-center gap-1 pl-3 pr-2 py-2 border-r border-slate-200 shrink-0 select-none bg-slate-100/80">
                                <span className="text-xs">🇮🇳</span>
                                <span className="text-xs font-semibold text-slate-700">+91</span>
                                <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
                              </div>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="98765 43210"
                                className="w-full min-w-0 px-2.5 py-2 bg-transparent border-none text-slate-900 text-xs font-medium focus:outline-none focus:ring-0"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1 w-full min-w-0">
                            <label className="text-[11.5px] font-bold text-slate-800">
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Acme Corp"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs font-medium focus:outline-none focus:border-[#305EFF] transition-all"
                            />
                          </div>
                        </div>

                        {/* Row 3: Service Required * | Estimated Budget */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-start w-full">
                          <div className="flex flex-col gap-1 w-full min-w-0">
                            <label className="text-[11.5px] font-bold text-slate-800">
                              Service Required <span className="text-brand-blue" style={{ color: "#305EFF" }}>*</span>
                            </label>
                            <div className="relative w-full min-w-0">
                              <select
                                name="serviceCategory"
                                value={formData.serviceCategory}
                                onChange={handleChange}
                                className="w-full min-w-0 truncate pr-8 pl-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs font-medium appearance-none focus:outline-none focus:border-[#305EFF] transition-all cursor-pointer"
                              >
                                {SERVICE_OPTIONS.map((opt) => (
                                  <option key={opt.key} value={opt.label} className="py-1">
                                    {opt.label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none shrink-0" />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1 w-full min-w-0">
                            <label className="text-[11.5px] font-bold text-slate-800">
                              Estimated Budget
                            </label>
                            <div className="relative w-full min-w-0">
                              <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full min-w-0 truncate pr-8 pl-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs font-medium appearance-none focus:outline-none focus:border-[#305EFF] transition-all cursor-pointer"
                              >
                                <option value="Under $1,000">Under $1,000</option>
                                <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                                <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                                <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                                <option value="$25,000+">$25,000+</option>
                                <option value="Not Sure Yet">Not Sure Yet</option>
                              </select>
                              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none shrink-0" />
                            </div>
                          </div>
                        </div>

                        {/* Row 4: Expected Timeline */}
                        <div className="flex flex-col gap-1 w-full min-w-0">
                          <label className="text-[11.5px] font-bold text-slate-800">
                            Expected Timeline
                          </label>
                          <div className="relative w-full min-w-0">
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              className="w-full min-w-0 truncate pr-8 pl-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs font-medium appearance-none focus:outline-none focus:border-[#305EFF] transition-all cursor-pointer"
                            >
                              <option value="ASAP">ASAP</option>
                              <option value="1–3 Months">1–3 Months</option>
                              <option value="3–6 Months">3–6 Months</option>
                              <option value="6+ Months">6+ Months</option>
                              <option value="Not Sure Yet">Not Sure Yet</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none shrink-0" />
                          </div>
                        </div>

                        {/* Row 5: Project Details / Message * */}
                        <div className="flex flex-col gap-1 w-full min-w-0">
                          <label className="text-[11.5px] font-bold text-slate-800">
                            Project Details / Message <span className="text-brand-blue" style={{ color: "#305EFF" }}>*</span>
                          </label>
                          <textarea
                            name="message"
                            required
                            rows={2}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Briefly describe your requirements..."
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs font-medium focus:outline-none focus:border-[#305EFF] transition-all resize-none"
                          />
                        </div>

                        {/* Full-width Mitsafe Blue Submit Button */}
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full mt-1 py-3 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                          style={{ backgroundColor: "#305EFF" }}
                        >
                          {loading ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <span>Get My Quote →</span>
                          )}
                        </button>
                      </form>
                    )}

                  </div>

                </div>
              </div>

            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
