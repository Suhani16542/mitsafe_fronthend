"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Briefcase,
  Scale,
  Ban,
  XCircle,
  Send,
  ClipboardCheck,
  CreditCard,
  Globe,
  HelpCircle,
  History,
  Mail,
  Search,
  ArrowRight,
  ClipboardList,
  Link2,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sectionsData = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: ShieldCheck,
    content:
      "Mitsafe provides digital, software development, technology, and related professional services. This policy outlines how service cancellations and refund requests are handled.",
    details:
      "At Mitsafe, we are dedicated to delivering high-quality custom software solutions, digital transformation services, and technology consulting. Due to the bespoke nature of software engineering and professional consulting services, resources, personnel, and infrastructure are committed specifically for each engagement. This Refund Policy establishes transparent principles for evaluating cancellation requests and refund eligibility."
  },
  {
    id: "services-covered",
    title: "2. Services Covered",
    icon: Layers,
    content:
      "This policy applies across Mitsafe's range of digital, engineering, and technology service offerings.",
    details:
      "This policy governs engagements across our core services, including but not limited to: Software Development, Website Development, Mobile App Development, UI/UX Design, Digital Marketing, AI & Automation Solutions, Cloud & DevOps Engineering, API Integration, CRM & ERP Solutions, E-Commerce Solutions, and other agreed professional technology services provided across various industry sectors."
  },
  {
    id: "project-based-services",
    title: "3. Project-Based Services",
    icon: Briefcase,
    content:
      "Project-based services involve dedicated planning, system architecture, design, and development performed specifically for the client.",
    details:
      "Because project-based work requires custom engineering, dedicated talent allocation, and progressive milestone delivery, refund eligibility is tied to the stages of work completed and the terms defined in the individual project agreement or statement of work. Work completed and approved at various milestone stages represents delivered value."
  },
  {
    id: "refund-eligibility",
    title: "4. Refund Eligibility",
    icon: Scale,
    content:
      "Refund requests are evaluated on an individual basis under specific criteria. Automatic refunds are not provided.",
    details:
      "Eligibility for a partial refund or settlement is determined following a structured assessment based on: (a) the volume and quality of work already completed; (b) the current stage and timeline of the project; (c) engineering and specialist resources already allocated; (d) third-party infrastructure and tooling costs incurred; and (e) terms agreed in the applicable contract between Mitsafe and the client. Mitsafe does not guarantee or offer automatic refunds."
  },
  {
    id: "non-refundable-amounts",
    title: "5. Non-Refundable Amounts",
    icon: Ban,
    content:
      "Incurred costs, completed deliverables, and external expenditures are non-refundable where applicable.",
    details:
      "Payments corresponding to completed milestones, approved design artifacts, deployed codebases, consultation hours delivered, and third-party expenses (such as third-party software licenses, server hosting, domain purchases, cloud infrastructure provisioning, or paid developer tools) are non-refundable once incurred on behalf of the project."
  },
  {
    id: "cancellation-of-services",
    title: "6. Cancellation of Services",
    icon: XCircle,
    content:
      "Clients may request cancellation of an active engagement through formal written communication.",
    details:
      "To request the cancellation of an ongoing service or project, the client must submit a formal written notice to Mitsafe. Cancellation halts future project milestones and resource allocation; however, initiating a cancellation does not automatically entitle the client to a full or partial refund of amounts already paid or billed for work accomplished."
  },
  {
    id: "refund-request-process",
    title: "7. Refund Request Process",
    icon: Send,
    content:
      "Submit refund requests through official Mitsafe contact channels with comprehensive project details.",
    details:
      "To initiate a review for refund consideration, clients should contact Mitsafe through our official communication channels with the following information: (1) Client / Company Name; (2) Project Title and Agreement Reference; (3) Invoice number and proof of payment; and (4) A clear, detailed explanation of the basis for the refund request. Providing complete documentation enables an objective and prompt review."
  },
  {
    id: "refund-review",
    title: "8. Refund Review",
    icon: ClipboardCheck,
    content:
      "Every refund request undergoes thorough, objective examination based on contractual agreements and project deliverables.",
    details:
      "Upon receipt of a formal refund request, Mitsafe's project and finance management will conduct a comprehensive audit. The review examines the project scope, signed agreements, milestone approvals, communications, work delivered to date, and the specific circumstances surrounding the request before reaching a final decision."
  },
  {
    id: "refund-processing",
    title: "9. Refund Processing",
    icon: CreditCard,
    content:
      "Approved refunds are disbursed through the applicable payment method or process.",
    details:
      "If a refund is mutually agreed upon or approved following our evaluation, the amount will be processed through the original payment method, bank transfer, or another mutually agreed financial channel. Processing will be executed in accordance with applicable banking and payment provider protocols."
  },
  {
    id: "third-party-services",
    title: "10. Third-Party Services",
    icon: Globe,
    content:
      "External software, hosting, domain, API, and gateway fees are governed by their respective vendor policies.",
    details:
      "Mitsafe integrates and utilizes reliable third-party services (such as cloud hosting providers, domain registrars, payment gateways, third-party APIs, and proprietary software licenses) to build client solutions. Mitsafe has no control over external vendor policies, and all third-party fees remain strictly subject to the respective provider's terms and refund guidelines."
  },
  {
    id: "exceptions",
    title: "11. Exceptions",
    icon: HelpCircle,
    content:
      "Unforeseen or exceptional circumstances may be reviewed individually at Mitsafe's discretion.",
    details:
      "Mitsafe understands that unique project situations or extraordinary circumstances may arise. In such instances, Mitsafe reserves the right to evaluate requests on an individual, discretionary basis and work collaboratively with the client toward an equitable resolution."
  },
  {
    id: "policy-updates",
    title: "12. Policy Updates",
    icon: History,
    content:
      "Mitsafe reserves the right to modify this policy periodically, with updates published on this website.",
    details:
      "Mitsafe may update, amend, or modify this Refund Policy as our services evolve, new technologies are introduced, or legal standards require. The revised policy will be posted on this page with an updated 'Last Updated' date. Clients are encouraged to review this policy periodically."
  },
  {
    id: "contact-information",
    title: "13. Contact Information",
    icon: Mail,
    content:
      "Get in touch with Mitsafe via our official contact channels for questions regarding this policy or your project.",
    details:
      "If you have any questions, concerns, or requests regarding this Refund Policy or wish to discuss an active engagement, please reach out to Mitsafe through our official website contact channels, our project inquiry desk, or your dedicated account representative."
  }
];

export default function RefundPolicyClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sectionsData;
    return sectionsData.filter(
      (sec) =>
        sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.details.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-[#305EFF]/10 selection:text-[#305EFF] pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#305EFF]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Hero Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/50 text-[#305EFF] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Client Policy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none mb-3 font-display"
          >
            Refund Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm font-bold text-[#305EFF] bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1 inline-flex items-center gap-1.5 mb-5 shadow-xs"
          >
            Effective Date: 1 April 2026
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed"
          >
            Mitsafe is committed to transparency and excellence across our software development, digital platforms, and technology services. This Refund Policy explains how cancellations and refund requests are evaluated and processed.
          </motion.p>
        </div>

        {/* Search & Main Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Menu (Table of Contents) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 lg:sticky lg:top-28 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hidden lg:block"
          >
            <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider mb-4">
              Policy Sections
            </h3>
            
            <div className="h-[450px] overflow-y-auto pr-2 space-y-1 custom-scrollbar">
              {sectionsData.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleScrollTo(sec.id)}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#305EFF] transition-all flex items-center gap-3 border border-transparent hover:border-slate-100"
                >
                  <sec.icon className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[#305EFF]" />
                  <span className="truncate">{sec.title}</span>
                </button>
              ))}
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex flex-col gap-3">
              <div className="text-[11px] font-medium text-slate-500">
                Effective Date: 1 April 2026
              </div>
              <div className="text-[11px] font-bold text-slate-900">
                © Mitsafe Technologies
              </div>
            </div>
          </motion.div>

          {/* Right Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Search Input Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-xs flex items-center gap-4"
            >
              <div className="relative flex-grow">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search refund policy terms or sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#305EFF]/20 focus:border-[#305EFF] text-sm font-semibold transition-all"
                />
              </div>
            </motion.div>

            {/* Sections Content List */}
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredSections.map((sec, idx) => {
                  const Icon = sec.icon;
                  return (
                    <motion.div
                      key={sec.id}
                      id={sec.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                      className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 relative group scroll-mt-24"
                    >
                      {/* Top Action Panel */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                              {sec.title}
                            </h2>
                            <span className="text-[11px] font-bold text-[#305EFF] uppercase tracking-wider">
                              Section {idx + 1}
                            </span>
                          </div>
                        </div>

                        {/* Copy Link Button */}
                        <button
                          onClick={() => handleCopyLink(sec.id)}
                          className="w-9 h-9 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center transition-all text-slate-400 hover:text-slate-700"
                          title="Copy Link to Section"
                        >
                          {copiedId === sec.id ? (
                            <FileCheck className="w-4 h-4 text-green-600 animate-in fade-in zoom-in-75 duration-200" />
                          ) : (
                            <Link2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Content Overview */}
                      <p className="text-slate-800 text-sm sm:text-base font-bold leading-relaxed mb-3">
                        {sec.content}
                      </p>

                      {/* Detailed Content */}
                      <div className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 mt-4">
                        {sec.details}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* No Results Fallback */}
              {filteredSections.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-slate-200 rounded-3xl p-12 text-center"
                >
                  <p className="text-slate-500 text-sm font-semibold">
                    No matching sections found for "{searchQuery}".
                  </p>
                </motion.div>
              )}
            </div>

            {/* Official Contact Info Card Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3
                    className="text-xl font-extrabold text-slate-900 tracking-tight mb-2"
                    style={{ color: "#0f172a" }}
                  >
                    Have questions about your project or this policy?
                  </h3>
                  <p
                    className="text-slate-600 text-sm font-medium leading-relaxed max-w-xl"
                    style={{ color: "#475569" }}
                  >
                    Our team is here to assist you. Contact our official desk for any policy clarifications or project assistance.
                  </p>
                </div>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#305EFF] hover:bg-[#254bdb] text-white font-bold text-sm rounded-full shadow-md hover:scale-105 transition-all shrink-0"
                >
                  <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>Contact Us</span>
                  <ArrowRight className="w-4 h-4 text-white" style={{ color: "#FFFFFF", stroke: "#FFFFFF" }} />
                </Link>
              </div>
            </motion.div>

            {/* Mobile Footer Meta */}
            <div className="lg:hidden bg-white border border-slate-200/80 rounded-3xl p-6 text-center space-y-2">
              <div className="text-xs font-semibold text-slate-500">
                Effective Date: 1 April 2026
              </div>
              <div className="text-xs font-bold text-slate-900">
                © Mitsafe Technologies
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
