"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

interface BlogQuoteSidebarProps {
  postTitle?: string;
}

export default function BlogQuoteSidebar({ postTitle }: BlogQuoteSidebarProps) {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage("Please enter project details (at least 5 characters).");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: "Blog Consultation / Quote",
        message: postTitle
          ? `[Inquiry from Blog: ${postTitle}]\n${formData.message.trim()}`
          : formData.message.trim(),
        sourcePage: pathname || "/blog",
        requestType: "quote",
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success !== false) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMessage(data.message || data.error || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Unable to submit. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="w-full bg-white dark:bg-[#0B1A2E] rounded-2xl border border-slate-200 dark:border-white/10 p-5 sm:p-6 text-left transition-all">
      {/* Header */}
      <div className="space-y-1.5 mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/20 text-[#305EFF] text-[11px] font-extrabold font-mono uppercase tracking-wider">
          <Sparkles className="w-3 h-3" />
          <span>Free Consultation</span>
        </div>
        <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] dark:text-white font-display tracking-tight leading-snug">
          Let&apos;s Build Your Dream App!
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          Have an idea or software requirements? Get expert technical guidance & cost estimate in 24 hours.
        </p>
      </div>

      {/* Success Notification */}
      {success ? (
        <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-emerald-900 dark:text-emerald-200">
              Request Received!
            </h4>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1 leading-relaxed">
              Our engineering team will review your project and get back to you shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="text-xs font-bold text-[#305EFF] hover:underline cursor-pointer pt-1 block mx-auto"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Your Name <span className="text-[#305EFF]">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Johnson"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#305EFF] transition-colors font-medium"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Work Email <span className="text-[#305EFF]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#305EFF] transition-colors font-medium"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 234-5678"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#305EFF] transition-colors font-medium"
            />
          </div>

          {/* Message / Project Field */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              What&apos;s your project about? <span className="text-[#305EFF]">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us what you want to build, key features, target timeline..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#305EFF] transition-colors font-medium resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-[#305EFF] hover:bg-[#2550E0] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <span>Get Free Quote</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>

          {/* Trust Guarantees */}
          <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 font-medium border-t border-slate-100 dark:border-white/5">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#305EFF]" />
              NDA Protected
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#305EFF]" />
              Reply in 24h
            </span>
          </div>
        </form>
      )}
    </aside>
  );
}
