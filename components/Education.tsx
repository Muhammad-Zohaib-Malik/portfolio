"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

const education: EducationItem[] = [
  {
    institution: "PMAS Arid Agriculture University, Rawalpindi",
    degree: "Bachelor of Science in Computer Science",
    duration: "2025",
  },
];

export default function Education() {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="group relative overflow-hidden border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                {/* Left Section */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 group/icon"
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
                      <GraduationCap className="h-5 w-5 text-emerald-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-cyan-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-emerald-300 font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Section - Duration */}
                <div className="flex items-center gap-2 md:flex-col md:items-end">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
