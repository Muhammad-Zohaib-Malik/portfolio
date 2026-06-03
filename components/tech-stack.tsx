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
  SiRedis,
  SiWordpress,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNginx,
  SiGit,
  SiPostgresql,
  SiGithubactions
} from "react-icons/si"
import { motion } from "framer-motion"

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" }
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 p-2">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.04 }}
        >
          <Card
            className="group flex flex-col items-center justify-center p-3 border border-zinc-800/40 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 hover-glow"
          >
            <CardContent className="flex flex-col items-center justify-center gap-2 p-2">
              <tech.icon
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                style={{ color: tech.color }}
              />
              <span className="text-xs sm:text-sm font-mono font-medium text-zinc-400 group-hover:text-zinc-200 text-center transition-colors duration-300">
                {tech.name}
              </span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
