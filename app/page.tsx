"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import TechStack from "@/components/tech-stack"
import { DockDemo } from "@/components/Dock"

import { Button } from "@/components/ui/button"
import { ScrollProgressDemo } from "@/components/ScrollProgress"
import { SpinningText } from "@/components/magicui/spinning-text"
import { SparklesText } from "@/components/magicui/sparkles-text"
import { ProjectsCard } from "@/components/ProjectsCard"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShineBorder } from "@/components/magicui/shine-border"
import { ShimmerButton } from "@/components/magicui/shimmer-button"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#121314] text-white">
      <ScrollProgressDemo />
      <div className="absolute top-20 left-16">
        <SpinningText>Backend beast • Always up • Never down</SpinningText>
      </div>

      <DockDemo />

      <main className="container mx-auto px-10 py-8 sm:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          {/* Profile Card */}
          <Card className="relative overflow-hidden md:sticky md:top-24 bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center h-fit w-full max-w-[400px] mx-auto md:mx-0">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <CardContent className="flex flex-col items-center">
              <div className="w-[200px] h-[200px] sm:w-40 sm:h-440 rounded-2xl overflow-hidden mb-4 sm:mb-6 ">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>  
              <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text animate-gradient text-2xl sm:text-3xl font-bold mb-1">
                Muhammad Zohaib
              </span>
              <p className="text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text">
                Backend Developer
              </p>
              <p className="text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text mb-4 sm:mb-6">
                Pakistan
              </p>
            </CardContent>
            <CardFooter className="w-full flex items-center justify-center">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download CV
                </span>
              </ShimmerButton>
            </CardFooter>
          </Card>

          {/* Content */}
          <div className="flex-1 mt-8 md:mt-0 space-y-10 sm:space-y-12">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SparklesText className="inline-flex" text="Architecting Backend " />
              <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text animate-gradient text-2xl sm:text-5xl font-bold mb-1">
                Brilliance
              </span>
            </motion.h1>

            <motion.p
              className="text-zinc-400 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building robust, scalable, and efficient backend systems that power seamless digital experiences.
              Passionate about optimizing performance, ensuring security, and crafting APIs that drive innovation.
            </motion.p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Tech Stack</h3>
              <TechStack />
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Projects</h3>
              <ProjectsCard />
            </div>





          </div>
        </div>
      </main>
    </div>
  )
}
