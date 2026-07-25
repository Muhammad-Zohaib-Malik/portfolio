"use client";

import { Flame } from "lucide-react";
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
  SiNginx,
  SiGit,
  SiPostgresql,
  SiGithubactions,
  SiRabbitmq,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

const technologies = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
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
  { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
  { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
  { name: "Grafana", icon: SiGrafana, color: "#F46800" },
  { name: "Loki", icon: Flame, color: "#FF5722" },
];

export default function TechStack() {
  return (
    <div
      className="relative flex w-full overflow-hidden py-8 group gap-[var(--gap)]"
      style={
        {
          "--gap": "2rem",
          "--duration": "35s",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        } as React.CSSProperties
      }
    >
      {/* First Marquee Track */}
      <div className="flex w-max shrink-0 animate-marquee items-center justify-around gap-[var(--gap)] group-hover:[animation-play-state:paused]">
        {technologies.map((tech, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="group/pill flex items-center gap-3 px-6 py-3 bg-white border border-black/5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(11,110,79,0.12)] hover:border-[#0b6e4f]/30 transition-all duration-500 cursor-default hover:-translate-y-1">
              <tech.icon
                className="h-6 w-6 lg:h-7 lg:w-7 transition-transform duration-500 group-hover/pill:scale-110 drop-shadow-sm"
                style={{
                  color: tech.color === "#ffffff" ? "#000000" : tech.color,
                }}
              />
              <span className="text-sm font-bold font-sans text-black/70 group-hover/pill:text-black transition-colors duration-500">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Second Marquee Track (Duplicate for seamless loop) */}
      <div
        aria-hidden="true"
        className="flex w-max shrink-0 animate-marquee items-center justify-around gap-[var(--gap)] group-hover:[animation-play-state:paused]"
      >
        {technologies.map((tech, index) => (
          <div key={`dup-${index}`} className="flex-shrink-0">
            <div className="group/pill flex items-center gap-3 px-6 py-3 bg-white border border-black/5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(11,110,79,0.12)] hover:border-[#0b6e4f]/30 transition-all duration-500 cursor-default hover:-translate-y-1">
              <tech.icon
                className="h-6 w-6 lg:h-7 lg:w-7 transition-transform duration-500 group-hover/pill:scale-110 drop-shadow-sm"
                style={{
                  color: tech.color === "#ffffff" ? "#000000" : tech.color,
                }}
              />
              <span className="text-sm font-bold font-sans text-black/70 group-hover/pill:text-black transition-colors duration-500">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
