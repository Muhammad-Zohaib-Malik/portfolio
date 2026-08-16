"use client";

import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Quantum Communications Lab",
    role: "Backend Developer",
    duration: "2026",
    description:
      "Developed a Collaboration Suite to improve internal communication and team productivity. Built Authentication and User Service using Node.js, Express.js, PostgreSQL, and Redis. Improved backend performance and contributed to scalable system architecture.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis"],
  },
  {
    company: "Common Criteria Pakistan Lab",
    role: "Backend Developer Intern",
    duration: "2025",
    description:
      "Built an Inventory Management System for asset tracking and reporting. Developed a secure Document Management System (DMS) for file storage and management. Developed and maintained the company website using WordPress.",
    technologies: ["Node.js", "Express.js", "WordPress"],
  },
];

export default function Experience() {
  return (
    <div className="w-full">
      <div className="relative border-l-2 border-black/5 ml-2 md:ml-6 flex flex-col gap-24 py-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col items-start w-full pl-8 md:pl-16"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[7px] top-2 md:top-3 w-3 h-3 rounded-full bg-black/20 group-hover:bg-[#0b6e4f] group-hover:scale-[1.5] transition-all duration-300 shadow-[0_0_0_4px_white]" />

            {/* Company Name */}
            <span className="text-black/50 text-xl md:text-2xl font-medium mb-2 md:mb-4 tracking-wide transition-colors duration-300 group-hover:text-black/80">
              {exp.company}
            </span>

            {/* Role Typography */}
            <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-black group-hover:text-[#0b6e4f] transition-colors duration-500 mb-3 md:mb-4">
              {exp.role}.
            </h3>

            {/* Duration */}
            <span className="text-black/50 text-lg md:text-xl font-mono tracking-wide mb-8">
              {exp.duration}
            </span>

            {/* Description & Tech Stack */}
            <div className="max-w-3xl overflow-hidden">
              <p className="font-sans text-lg md:text-xl text-black/70 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {exp.technologies && (
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-5 py-2 text-sm font-bold font-mono rounded-full bg-black/[0.03] text-black/60 border border-black/5 group-hover:bg-[#0b6e4f]/[0.05] group-hover:text-[#0b6e4f] group-hover:border-[#0b6e4f]/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
