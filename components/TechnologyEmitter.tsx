"use client";

import React, { useMemo } from "react";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiAmazonwebservices,
  SiGit,
  SiLinux,
  SiRabbitmq,
  SiWordpress,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiGithubactions,
} from "react-icons/si";

const TECH_ICONS = [
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiExpress, color: "#000000", name: "Express" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
  { Icon: SiDocker, color: "#2496ED", name: "Docker" },
  { Icon: SiRedis, color: "#DC382D", name: "Redis" },
  { Icon: SiAmazonwebservices, color: "#232F3E", name: "AWS" },
  { Icon: SiGit, color: "#F05032", name: "Git" },
  { Icon: SiLinux, color: "#FCC624", name: "Linux" },
  { Icon: SiRabbitmq, color: "#FF6600", name: "RabbitMQ" },
  { Icon: SiWordpress, color: "#21759B", name: "WordPress" },
  { Icon: SiDocker, color: "#2496ED", name: "Docker" },
  { Icon: SiNginx, color: "#009639", name: "Nginx" },
  { Icon: SiPrometheus, color: "#FF5722", name: "Prometheus" },
  { Icon: SiGrafana, color: "#FF5722", name: "Grafana" },
  { Icon: SiGithubactions, color: "#2088FF", name: "GitHub Actions" },
];

function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function TechnologyEmitter() {
  const particles = useMemo(() => {
    const items: Array<{
      id: string;
      tech: (typeof TECH_ICONS)[0];
      endX: number;
      endY: number;
      midX: number;
      midY: number;
      duration: number;
      delay: number;
      scale: number;
      rotation: number;
    }> = [];

    // Create multiple instances of the icons for a continuous loop
    // 3 iterations = 27 icons floating
    for (let loop = 0; loop < 3; loop++) {
      TECH_ICONS.forEach((tech, i) => {
        items.push({
          id: `tech-${loop}-${i}`,
          tech,
          // Floating upwards with a smooth curve
          endX: randomFloat(-400, 400),
          endY: randomFloat(-600, -800), // high up
          midX: randomFloat(-250, 250),
          midY: randomFloat(-200, -400), // mid way curve
          duration: randomFloat(18, 28), // Very slow and gentle
          delay: randomFloat(0, 30), // Spread across time
          scale: randomFloat(0.7, 1.2),
          rotation: randomFloat(-120, 120),
        });
      });
    }

    return items;
  }, []);

  return (
    <div className="absolute top-[72%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 z-20 pointer-events-none">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        ${particles
          .map(
            (p) => `
          @keyframes anim-${p.id} {
            0% {
              transform: translate3d(0px, 0px, 0) scale(0.2) rotate(0deg);
              opacity: 0;
            }
            15% {
              opacity: 1; /* Softly fade in as it emerges */
              transform: translate3d(${p.midX * 0.3}px, ${p.midY * 0.3}px, 0) scale(${p.scale * 0.8}) rotate(${p.rotation * 0.3}deg);
            }
            60% {
              opacity: 0.8;
              transform: translate3d(${p.midX}px, ${p.midY}px, 0) scale(${p.scale}) rotate(${p.rotation}deg);
            }
            85% {
              opacity: 0; /* Start fading out before reaching the very top */
            }
            100% {
              transform: translate3d(${p.endX}px, ${p.endY}px, 0) scale(${p.scale * 1.1}) rotate(${p.rotation * 1.5}deg);
              opacity: 0; /* Completely faded away */
            }
          }
          
          .particle-${p.id} {
            animation: anim-${p.id} ${p.duration}s infinite cubic-bezier(0.3, 0, 0.7, 1);
            animation-delay: -${p.delay}s; /* Negative delay for immediate chaotic movement on load */
            position: absolute;
            will-change: transform, opacity;
          }
        `,
          )
          .join("\n")}
      `,
        }}
      />

      {/* Render Icons */}
      {particles.map((p) => {
        const { Icon, color } = p.tech;
        return (
          <div
            key={p.id}
            className={`particle-${p.id} flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-auto`}
          >
            <div className="relative group transition-transform duration-500 cursor-pointer">
              {/* Clean, subtle glass badge */}
              <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/30 flex items-center justify-center relative z-10 overflow-hidden">
                <Icon
                  className="w-8 h-8 lg:w-10 lg:h-10 relative z-20"
                  style={{ color }}
                />
              </div>

              {/* Soft Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full opacity-15 blur-xl -z-10"
                style={{ backgroundColor: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
