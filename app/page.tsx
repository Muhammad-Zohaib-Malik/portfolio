"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import TechStack from "@/components/tech-stack";
import { DockDemo } from "@/components/Dock";
import { Button } from "@/components/ui/button";
import { ScrollProgressDemo } from "@/components/ScrollProgress";
import { SpinningText } from "@/components/magicui/spinning-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ProjectsCard } from "@/components/ProjectsCard";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#121314] text-white relative ">
      <ScrollProgressDemo />

      {/* Spinning Text */}
      <div className="absolute top-20 left-16 z-10">
        <SpinningText>Backend beast • Always up • Never down</SpinningText>
      </div>

      <DockDemo />

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Profile Card */}
          <Card className="relative overflow-hidden bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-md mx-auto md:mx-0 md:sticky md:top-24 h-fit">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <CardContent className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-2xl overflow-hidden mb-6">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text animate-gradient text-3xl font-bold mb-1">
                Muhammad Zohaib
              </span>
              <p className="text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text">
                Backend Developer
              </p>
              <p className="text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text mb-6">
                Pakistan
              </p>
            </CardContent>
            <CardFooter className="w-full flex items-center justify-center">
              <a href="/MyCV.pdf" download>
                <ShimmerButton className="shadow-2xl">
                  <span className="text-sm font-medium tracking-tight text-white lg:text-lg">
                    Download CV
                  </span>
                </ShimmerButton>
              </a>
            </CardFooter>
          </Card>

          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {/* Heading */}
            <motion.h1
              className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug sm:leading-tight flex flex-wrap items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SparklesText
                className="inline-flex text-3xl sm:text-3xl md:text-5xl"
                text="Architecting Backend"
              />
              <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text animate-gradient ml-2 text-xl sm:text-3xl md:text-5xl font-bold mt-2 sm:mt-0">
                Brilliance
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-zinc-400 max-w-2xl text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building robust, scalable, and efficient backend systems that
              power seamless digital experiences. Passionate about optimizing
              performance, ensuring security, and crafting APIs that drive
              innovation.
            </motion.p>

            {/* Tech Stack */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <TechStack />
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <ProjectsCard />
            </section>

            {/* Footer */}
            <footer className="text-center text-zinc-500 text-sm mt-10">
              © {new Date().getFullYear()} Zohaib. All rights reserved.
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
