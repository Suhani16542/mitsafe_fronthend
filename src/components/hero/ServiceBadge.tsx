"use client";

import { motion, AnimatePresence } from "framer-motion";

export function ServiceBadge({
  label,
  index,
  total,
}: {
  label: string;
  index: number;
  total: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <AnimatePresence mode="wait">
        <motion.span
          key={label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-4 py-1.5 text-sm font-medium text-[#305EFF]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#305EFF]" />
          {label}
        </motion.span>
      </AnimatePresence>
      <span className="font-mono text-xs tracking-widest text-slate-400">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
