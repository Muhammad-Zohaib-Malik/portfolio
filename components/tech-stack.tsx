'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiGit,
  SiExpress,
  SiMongoose,
  SiLinux,
} from "react-icons/si"

const technologies = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 sm:grid-rows-4 lg:grid-cols-3 gap-4 p-4">
      {technologies.map((tech, index) => (
        <Card
          key={index}
          className="group flex flex-col items-center justify-center p-4 sm:p-2 lg:p-6 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 lg:w-44"
        >
          <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-3 p-3 sm:p-2 lg:p-2">
            <tech.icon 
              className="h-10 w-10 sm:h-10 sm:w-10 lg:h-12 lg:w-12 transition-transform duration-300 group-hover:scale-110" 
              style={{ color: tech.color }} 
            />
            <span className="text-sm sm:text-xs lg:text-base font-medium text-white">{tech.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
