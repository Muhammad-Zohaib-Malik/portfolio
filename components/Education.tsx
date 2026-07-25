"use client";

import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

const education: EducationItem[] = [
  {
    institution: "PMAS Arid Agriculture University, Rawalpindi",
    degree: "Bachelor in Computer Science",
    duration: "2025",
  },
];

export default function Education() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-24">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col items-start w-full"
          >
            {/* Institution Name */}
            <span className="text-black/50 text-xl md:text-2xl font-medium mb-2 md:mb-4 tracking-wide transition-colors duration-300 group-hover:text-black/80">
              {edu.institution}
            </span>

            {/* Degree Typography */}
            <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-black group-hover:text-[#0b6e4f] transition-colors duration-500 mb-3 md:mb-4 max-w-4xl">
              {edu.degree}.
            </h3>

            {/* Duration */}
            <span className="text-black/50 text-lg md:text-xl font-mono tracking-wide">
              {edu.duration}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
