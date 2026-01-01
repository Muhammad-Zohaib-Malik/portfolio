'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiExpress,
  SiMongoose,
  SiRedis,
  SiWordpress
} from "react-icons/si"

const technologies = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Nginx", icon: SiNodedotjs, color: "#009639" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" }
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 p-3 sm:p-4">
      {technologies.map((tech, index) => (
        <Card
          key={index}
          className="group flex flex-col items-center justify-center p-3 sm:p-4 border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <CardContent className="flex flex-col items-center justify-center gap-2 p-2">
            <tech.icon
              className="h-8 w-8 xs:h-10 xs:w-10 sm:h-10 sm:w-10 lg:h-12 lg:w-12 transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            />
            <span className="text-xs xs:text-sm sm:text-sm lg:text-base font-medium text-white text-center">{tech.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
