"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Quantum Communication",
    role: "Web Developer",
    duration: "3 months",
    description: "Developed and maintained WordPress websites",
    technologies: ["WordPress"],
  },
];

export default function Experience() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Left Section */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group/icon"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: index * 0.1 + 0.2,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <Briefcase className="h-5 w-5 text-purple-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-purple-300 font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Section - Duration */}
                <div className="flex items-start gap-2 md:flex-col md:items-end">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
