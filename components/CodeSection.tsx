"use client";

import { motion } from "framer-motion";

interface CodeSectionProps {
  filename: string;
  icon?: string;
  children: React.ReactNode;
  delay?: number;
}

export default function CodeSection({
  filename,
  icon = "📄",
  children,
  delay = 0,
}: CodeSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="w-full"
    >
      <div className="rounded-xl overflow-hidden border border-zinc-800/60 bg-[#0d1117]/80 backdrop-blur-sm shadow-lg hover:border-zinc-700/60 transition-colors duration-300">
        {/* File Tab Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800/60">
          <div className="flex gap-1.5 mr-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>

          {/* Active tab */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0d1117] rounded-t-md border border-zinc-800/60 border-b-0 -mb-2.5 relative top-[1px]">
            <span className="text-xs">{icon}</span>
            <span className="text-xs font-mono text-zinc-400">{filename}</span>
          </div>

          {/* Inactive tab */}
          <div className="flex items-center gap-1.5 px-3 py-1 opacity-40">
            <span className="text-xs font-mono text-zinc-600">...</span>
          </div>
        </div>

        {/* Content area with line numbers */}
        <div className="flex">
          {/* Line numbers gutter */}
          <div className="hidden sm:flex flex-col items-end py-5 px-3 bg-[#0a0e14]/50 border-r border-zinc-800/30 select-none min-w-[3rem]">
            {Array.from({ length: 20 }, (_, i) => (
              <span
                key={i}
                className="text-[11px] font-mono text-zinc-700 leading-[1.8]"
              >
                {i + 1}
              </span>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-5 sm:p-6">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
