"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  AlertCircle,
  ArrowLeft,
  ChevronDown
} from "lucide-react";

export default function GetAQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Design & Development",
    budget: "$5,000 - $15,000",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in all required fields (*).");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit quote request.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Web Design & Development",
        budget: "$5,000 - $15,000",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An error occurred while submitting your request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8 font-sans">

      {/* Background Decorative Gradient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 via-blue-50/20 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Navigation back breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#2563FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Get a Customized Quote
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Tell Us About Your <span className="text-[#2563FF]">Project</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ready to turn your vision into a scalable, high-performance digital product?
            Fill out the form below and our technical architects will prepare a comprehensive estimate for you.
          </p>
        </div>

        {/* Main Grid: Form & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Lead Generation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 relative">

            {success ? (
              <div className="py-12 px-4 text-center flex flex-col items-center justify-center gap-5">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600 shadow-sm animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Quote Request Received!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                  Thank you! Your quote request has been submitted successfully. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-[#2563FF] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Submit Another Quote Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">
                      Work Email / Gmail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Required */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">
                      Service Required
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:border-transparent transition-all shadow-xs pr-10 cursor-pointer"
                      >
                        <option value="Web Design & Development">Web Design & Development</option>
                        <option value="Android & iOS App Development">Android & iOS App Development</option>
                        <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                        <option value="Web Hosting & Cloud Services">Web Hosting & Cloud Services</option>
                        <option value="Cyber Security Solutions">Cyber Security Solutions</option>
                        <option value="IT Consultations & Software">IT Consultations & Custom AI</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Budget */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">
                      Project Budget
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:border-transparent transition-all shadow-xs pr-10 cursor-pointer"
                      >
                        <option value="< $5,000">Under $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Project Details / Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700">
                    Project Details / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project requirements, timeline, or key objectives..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563FF] focus:border-transparent transition-all shadow-xs resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#2563FF] hover:bg-[#1D4ED8] disabled:bg-[#2563FF]/70 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Quote Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request a Quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500 mt-1">
                  We respect your privacy. No spam guaranteed.
                </p>

              </form>
            )}

          </div>

          {/* Right Column: Why Choose Us & Trust Badges */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Card 1: What Happens Next */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col gap-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#2563FF]" />
                What Happens Next?
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#2563FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Requirements Review</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Our solution architects evaluate your project specifications and technical scope.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#2563FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">24-Hour Proposal</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      We craft a custom quote detailing timelines, tech stack, and cost estimations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#2563FF] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Discovery Call</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      We schedule a free 1-on-1 consultation to finalize architecture blueprints.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Guarantees */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563FF]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Confidentiality & NDA</h4>
                  <p className="text-xs text-slate-500">Your ideas and intellectual property are secure.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563FF]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Engineer Consultation</h4>
                  <p className="text-xs text-slate-500">Talk directly with lead software engineers.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
