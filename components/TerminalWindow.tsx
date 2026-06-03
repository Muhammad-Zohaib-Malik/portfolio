"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "success" | "info" | "error" | "blank";
  text: string;
  delay?: number;
}

const terminalSequence: TerminalLine[] = [
  { type: "command", text: "whoami", delay: 600 },
  { type: "output", text: "Muhammad Zohaib — Full Stack Developer", delay: 100 },
  { type: "info", text: "📍 Pakistan  |  💻 Building production systems", delay: 100 },
  { type: "blank", text: "", delay: 400 },

  { type: "command", text: "cat skills.json", delay: 500 },
  { type: "output", text: "{", delay: 50 },
  { type: "success", text: '  "frontend": ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"],', delay: 50 },
  { type: "success", text: '  "backend":  ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],', delay: 50 },
  { type: "success", text: '  "cloud_devops": ["AWS", "Docker", "Nginx", "GitHub Actions"],', delay: 50 },
  { type: "success", text: '  "cms": ["WordPress"],', delay: 50 },
  { type: "output", text: "}", delay: 100 },
  { type: "blank", text: "", delay: 400 },

  { type: "command", text: "node server.js", delay: 500 },
  { type: "success", text: "✓ Connected to MongoDB Atlas", delay: 200 },
  { type: "success", text: "✓ Redis cache initialized", delay: 150 },
  { type: "success", text: "✓ Express routes loaded (12 endpoints)", delay: 150 },
  { type: "success", text: "✓ Middleware configured: auth, cors, rate-limit", delay: 150 },
  { type: "info", text: "⚡ Server running on port 3000", delay: 200 },
  { type: "blank", text: "", delay: 300 },

  { type: "command", text: "echo $STATUS", delay: 400 },
  { type: "output", text: "Ready to build something amazing... 🚀", delay: 100 },
];

interface DisplayLine {
  type: string;
  text: string;
  typedText: string;
}

export default function TerminalWindow() {
  const [displayedLines, setDisplayedLines] = useState<DisplayLine[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const hasStarted = useRef(false);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const lines: DisplayLine[] = [];

    const addLine = (line: DisplayLine) => {
      lines.push(line);
      setDisplayedLines([...lines]);
    };

    const updateLastLine = (typedText: string) => {
      lines[lines.length - 1] = { ...lines[lines.length - 1], typedText };
      setDisplayedLines([...lines]);
    };

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const typeCommand = (text: string): Promise<void> => {
      return new Promise(async (resolve) => {
        addLine({ type: "command", text: `$ ${text}`, typedText: "$ " });
        for (let i = 1; i <= text.length; i++) {
          await sleep(45);
          updateLastLine("$ " + text.substring(0, i));
        }
        resolve();
      });
    };

    const runSequence = async () => {
      await sleep(800);

      for (const line of terminalSequence) {
        if (line.type === "blank") {
          addLine({ type: "blank", text: "", typedText: "" });
          await sleep(line.delay || 200);
        } else if (line.type === "command") {
          await typeCommand(line.text);
          await sleep(line.delay || 300);
        } else {
          const prefix = "";
          const fullText = line.text;
          addLine({ type: line.type, text: fullText, typedText: fullText });
          await sleep(line.delay || 80);
        }
      }
    };

    runSequence();
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command":
        return "text-emerald-400";
      case "output":
        return "text-zinc-300";
      case "success":
        return "text-green-400";
      case "info":
        return "text-cyan-400";
      case "error":
        return "text-red-400";
      default:
        return "text-zinc-500";
    }
  };

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Terminal Window Frame */}
      <div className="rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-emerald-500/5">
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/90 border-b border-zinc-700/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-zinc-500 font-mono">
              zohaib@dev:~/portfolio
            </span>
          </div>
          <div className="w-14" />
        </div>

        {/* Terminal Body */}
        <div className="bg-[#0a0e14] p-5 min-h-[320px] max-h-[420px] overflow-y-auto font-mono text-sm leading-relaxed terminal-scrollbar">
          <AnimatePresence>
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`${getLineColor(line.type)} ${
                  line.type === "blank" ? "h-3" : ""
                }`}
              >
                {line.type !== "blank" && (
                  <span className="whitespace-pre-wrap break-all sm:break-normal">
                    {line.typedText}
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Blinking cursor */}
          <div className="flex items-center mt-1">
            <span className="text-emerald-400">$ </span>
            <span
              className={`inline-block w-2.5 h-5 ml-0.5 ${
                showCursor ? "bg-emerald-400" : "bg-transparent"
              } transition-colors duration-100`}
            />
          </div>
        </div>
      </div>

      {/* Glow effect under terminal */}
      <div className="h-20 bg-gradient-to-b from-emerald-500/5 to-transparent -mt-1 rounded-b-xl" />
    </motion.div>
  );
}
