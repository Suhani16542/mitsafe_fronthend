"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, AlertCircle, Sparkles } from "lucide-react";

// Existing Topbar Phone Number Constant
export const TOPBAR_PHONE_NUMBER = "+91 6265944392";
export const TOPBAR_WHATSAPP_NUMBER = "916265944392";

interface ContactWhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// WhatsApp Icon Component
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.13 4.12 13.54 4.12 11.91C4.12 7.37 7.82 3.67 12.04 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.11 7.68C7.86 7.95 7.18 8.59 7.18 9.88C7.18 11.17 8.12 12.41 8.25 12.59C8.38 12.76 10.1 15.41 12.72 16.54C13.34 16.81 13.83 16.97 14.21 17.09C14.84 17.29 15.4 17.26 15.86 17.19C16.37 17.11 17.43 16.55 17.65 15.92C17.87 15.3 17.87 14.77 17.81 14.66C17.74 14.55 17.56 14.49 17.29 14.35C17.02 14.22 15.7 13.57 15.45 13.48C15.21 13.39 15.03 13.35 14.85 13.62C14.67 13.88 14.16 14.49 14.01 14.66C13.85 14.84 13.7 14.86 13.43 14.73C13.16 14.59 12.29 14.31 11.26 13.39C10.45 12.67 9.91 11.78 9.76 11.51C9.6 11.25 9.74 11.1 9.88 10.97C10 10.85 10.16 10.64 10.3 10.48C10.43 10.31 10.48 10.19 10.57 10.01C10.66 9.84 10.61 9.68 10.55 9.55C10.48 9.42 9.99 8.22 9.78 7.73C9.58 7.25 9.38 7.32 9.22 7.31C9.08 7.31 8.91 7.35 8.83 7.35Z" />
    </svg>
  );
}

export default function ContactWhatsAppModal({ isOpen, onClose }: ContactWhatsAppModalProps) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset form on open
  useEffect(() => {
    if (isOpen) {
      setErrorMsg("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmedFirst = firstName.trim();
    const trimmedSurname = surname.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedFirst) {
      setErrorMsg("Please enter your first name.");
      return;
    }

    if (!trimmedSurname) {
      setErrorMsg("Please enter your surname.");
      return;
    }

    if (!trimmedPhone) {
      setErrorMsg("Please enter your phone number.");
      return;
    }

    // Construct full name & pre-filled WhatsApp message
    const fullName = `${trimmedFirst} ${trimmedSurname}`;
    const message = `Hello, I would like to get in touch.\n\nName: ${fullName}\nPhone: ${trimmedPhone}`;

    // Target URL with Topbar WhatsApp Number
    const whatsappUrl = `https://wa.me/${TOPBAR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp directly
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Close modal & reset fields
    setFirstName("");
    setSurname("");
    setPhone("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[460px] bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.25)] border border-slate-200/90 overflow-hidden p-6 sm:p-8 z-10 text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close 'X' Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="text-left pr-8 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/20 text-[#305EFF] text-[11px] font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Contact</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Contact Us
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-1 font-normal leading-relaxed">
                Fill in your details below to connect with our team directly on WhatsApp.
              </p>
            </div>

            {/* Validation Error Alert */}
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Name Row: First Name & Surname */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                      placeholder="e.g. John"
                      className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#305EFF] focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Surname <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={surname}
                      onChange={(e) => {
                        setSurname(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                      placeholder="e.g. Doe"
                      className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#305EFF] focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errorMsg) setErrorMsg("");
                    }}
                    placeholder="e.g. +91 9876543210"
                    className="w-full h-11 pl-10 pr-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#305EFF] focus:bg-white transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Submit CTA Button: Continue on WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-[#305EFF] hover:bg-[#2550E0] text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md shadow-[#305EFF]/20 hover:shadow-lg hover:shadow-[#305EFF]/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Continue on WhatsApp</span>
                </button>
              </div>

              {/* Security / Privacy reassurance note */}
              <p className="text-[11px] text-center text-slate-400 pt-1 font-medium">
                Direct WhatsApp conversation with Mitsafe Support Team ({TOPBAR_PHONE_NUMBER})
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
