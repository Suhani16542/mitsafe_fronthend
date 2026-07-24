"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroService } from "@/types/hero";
import { ServiceBadge } from "./ServiceBadge";

const containerVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export function HeroContent({
  service,
  index,
  total,
}: {
  service: HeroService;
  index: number;
  total: number;
}) {
  return (
    <div className="relative z-10 max-w-xl">
      <ServiceBadge label={service.badge} index={index} total={total} />

      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          variants={containerVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 3-line heading: two normal lines, last line fully highlighted — matches reference */}
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem]">
            {service.heading}{" "}
            <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              {service.highlight}
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-500">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={service.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/35"
            >
              {service.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={service.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700"
            >
              {service.secondaryCta.label}
            </a>
          </div>

          {/* checklist row — blue circle check + label, single row like reference */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {service.features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <CheckCircle2 className="h-[18px] w-[18px] shrink-0 fill-blue-600 text-white" />
                {f.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
