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

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white ">
      <ScrollProgressDemo />
      {/* <SpinningText>learn more • earn more • grow more •</SpinningText> */}
      <DockDemo />
      <main className="container mx-auto  px-4 py-4 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-4 sm:gap-8 items-start">
          {/* Profile Card */}
          <Card className="relative overflow-hidden md:sticky md:top-36 bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center h-fit max-w-[400px] mx-auto w-full">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardContent className="flex flex-col items-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-purple-900/30">
          <img src="/placeholder.svg?height=160&width=160" alt="Profile" className="w-full h-full object-cover" />
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
      <CardFooter className="w-full">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Let&apos;s Talk</Button>
      </CardFooter>
    </Card>

          {/* Content */}
          <div className="space-y-10 sm:space-y-12">
            <div>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SparklesText className="inline-flex" text=" Transforming Your Ideas into " />
                <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text animate-gradient">
                  Reality
                </span>
              </motion.h1>

              <motion.p
                className="text-zinc-400 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Passionate about building robust and scalable backend solutions. Specialize in transforming complex
                business requirements into efficient and reliable systems.
              </motion.p>
            </div>



            {/* Tech Stack */}

            <div className="">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Tech Stack</h3>
              <TechStack />
            </div>
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
