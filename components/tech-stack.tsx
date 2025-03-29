'use client'

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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="group relative flex items-center justify-center p-4 rounded-xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <tech.icon 
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" 
            style={{ color: tech.color }} 
          />
        </div>
      ))}
    </div>
  )
}
