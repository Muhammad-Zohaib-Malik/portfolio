"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import TechStack from "@/components/tech-stack";
import { DockDemo } from "@/components/Dock";
import { ScrollProgressDemo } from "@/components/ScrollProgress";
import { SpinningText } from "@/components/magicui/spinning-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ProjectsCard } from "@/components/ProjectsCard";
import Experience from "@/components/Experience";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MatrixRain from "@/components/MatrixRain";
import TerminalWindow from "@/components/TerminalWindow";
import CodeSection from "@/components/CodeSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative">
      {/* Matrix Rain Background */}
      <MatrixRain />

      <ScrollProgressDemo />

      {/* Spinning Text */}
      <div className="absolute top-20 left-16 z-10 hidden lg:block" aria-hidden="true">
        <SpinningText>Full Stack beast • Always up • Never down</SpinningText>
      </div>

      <nav aria-label="Social navigation">
        <DockDemo />
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Profile Card — Sidebar */}
          <aside aria-label="Profile information">
            <Card className="relative overflow-hidden bg-zinc-900/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-md mx-auto md:mx-0 md:sticky md:top-24 h-fit border-zinc-800/50">
              <ShineBorder shineColor={["#00ff41", "#00e5ff", "#00ff41"]} />
              <CardContent className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-2xl overflow-hidden mb-6 border-2 border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Zohaib Malik — Full Stack Developer from Pakistan"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* Name with terminal cursor */}
                <h2 className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text animate-gradient text-3xl font-bold mb-1">
                  Muhammad Zohaib Malik
                </h2>

                {/* Role badge */}
                <div className="flex items-center gap-2 mt-2 mb-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <p className="text-sm font-mono text-emerald-400 tracking-wide">
                    Full Stack Developer
                  </p>
                </div>

                <p className="text-zinc-500 text-sm font-mono mb-6">
                  📍 Pakistan
                </p>

                {/* Status line */}
                <div className="w-full rounded-lg bg-zinc-800/50 border border-zinc-700/30 p-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-zinc-500" aria-hidden="true">$</span>
                    <span className="text-emerald-400">status</span>
                    <span className="text-zinc-600" aria-hidden="true">→</span>
                    <span className="text-cyan-400">Available for work</span>
                    <span className="inline-block w-1.5 h-4 bg-emerald-400 animate-cursor-blink ml-1" aria-hidden="true" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="w-full flex items-center justify-center">
                <a href="/MyCV.pdf" download aria-label="Download Muhammad Zohaib Malik's CV (PDF)">
                  <ShimmerButton className="shadow-2xl">
                    <span className="text-sm font-mono font-medium tracking-tight text-white lg:text-base flex items-center gap-2">
                      <span className="text-emerald-400" aria-hidden="true">&gt;</span> Download CV
                    </span>
                  </ShimmerButton>
                </a>
              </CardFooter>
            </Card>
          </aside>

          {/* Main Content Sections */}
          <div className="flex-1 space-y-10">
            {/* Terminal Hero — Introduction */}
            <section aria-label="Terminal introduction">
              <TerminalWindow />
            </section>

            {/* Hero Heading */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
              aria-label="About me"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
                <SparklesText
                  className="inline-flex text-2xl sm:text-3xl md:text-4xl"
                  text="Building Full Stack"
                  sparklesCount={5}
                />
                <br />
                <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text animate-gradient text-xl sm:text-3xl md:text-4xl font-bold mt-2 block">
                  Systems That Scale
                </span>
              </h1>

              <p className="text-zinc-500 max-w-2xl text-sm font-mono leading-relaxed">
                <span className="text-zinc-600" aria-hidden="true">// </span>
                Building robust, scalable systems from frontend to backend.
                Passionate about clean architecture, API design, cloud
                infrastructure, and crafting seamless digital experiences that
                perform at scale.
              </p>
            </motion.section>

            {/* Tech Stack */}
            <section id="tech-stack" aria-label="Technology stack">
              <CodeSection filename="stack.config.ts" icon="⚙️" delay={0.1}>
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="text-emerald-400 font-mono text-sm">
                      const
                    </span>
                    <span className="text-cyan-300 font-mono">techStack</span>
                    <span className="text-zinc-600 font-mono text-sm">=</span>
                  </h2>
                  <TechStack />
                </div>
              </CodeSection>
            </section>

            {/* Experience */}
            <section id="experience" aria-label="Work experience">
              <CodeSection filename="experience.ts" icon="💼" delay={0.15}>
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="text-emerald-400 font-mono text-sm">
                      export
                    </span>
                    <span className="text-cyan-300 font-mono">experience</span>
                    <span className="text-zinc-600 font-mono text-sm">
                      : Role[]
                    </span>
                  </h2>
                  <Experience />
                </div>
              </CodeSection>
            </section>

            {/* Projects */}
            <section id="projects" aria-label="Featured projects">
              <CodeSection filename="projects.json" icon="🚀" delay={0.2}>
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="text-zinc-600 font-mono text-sm">{"{"}</span>
                    <span className="text-cyan-300 font-mono">
                      &quot;projects&quot;
                    </span>
                    <span className="text-zinc-600 font-mono text-sm">
                      : [
                    </span>
                  </h2>
                  <ProjectsCard />
                </div>
              </CodeSection>
            </section>

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-8 border-t border-zinc-800/50"
              role="contentinfo"
            >
              <p className="text-zinc-600 text-sm font-mono">
                <span className="text-zinc-700" aria-hidden="true">{"// "}</span>© {new Date().getFullYear()} Muhammad Zohaib Malik
                <span className="text-emerald-500/50 ml-2" aria-hidden="true">
                  &lt;/&gt;
                </span>{" "}
                All rights reserved.
              </p>
              <p className="text-zinc-700 text-xs font-mono mt-2">
                Built with Next.js + TypeScript + ❤️
              </p>
            </motion.footer>
          </div>
        </div>
      </main>
    </div>
  );
}
