"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiAmazon,
  SiPostgresql,
  SiReact,
  SiElasticsearch,
  SiRabbitmq,
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  link: string;
  liveDemo?: string;
  image: string;
  techStack: { name: string; icon: React.ReactNode }[];
}

const projects: Project[] = [
  {
    title: "File Storage",
    description:
      "A robust, full-stack cloud storage platform with a scalable architecture, secure user management, and Stripe integration.",
    link: "https://github.com/Muhammad-Zohaib-Malik/File-Storage",
    liveDemo: "https://storemyfiles.netlify.app",
    image: "/project1.png",
    techStack: [
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
      { name: "Express", icon: <SiExpress className="w-4 h-4" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
      { name: "Redis", icon: <SiRedis className="w-4 h-4" /> },
      { name: "AWS", icon: <SiAmazon className="w-4 h-4" /> },
    ],
  },
  {
    title: "EDOP Platform",
    description:
      "Enterprise Distributed Order Pipeline: A microservices-based Order Management Platform for modern commerce with event-driven messaging.",
    link: "https://github.com/Muhammad-Zohaib-Malik/EDOP",
    liveDemo: "https://meredukaan.netlify.app/",
    image: "/project2.png", // fallback image
    techStack: [
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
      { name: "Postgres", icon: <SiPostgresql className="w-4 h-4" /> },
      { name: "React", icon: <SiReact className="w-4 h-4" /> },
      { name: "Elastic", icon: <SiElasticsearch className="w-4 h-4" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="w-4 h-4" /> },
    ],
  },
];

const ProjectDetail = ({
  project,
  index,
  setActiveProject,
}: {
  project: Project;
  index: number;
  setActiveProject: (index: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveProject(index);
    }
  }, [isInView, index, setActiveProject]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center py-24 md:py-32 pr-4 md:pr-12"
    >
      <div className="bg-[#F2E4CA] p-8 md:p-12 rounded-3xl shadow-xl border border-black/5">
        <div className="font-mono text-sm uppercase tracking-widest text-[#053627]/60 mb-4">
          Project {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="font-sans text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-[#053627] mb-6">
          {project.title}
        </h3>
        <p className="font-sans text-lg md:text-xl text-black/80 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-[#053627]/10 rounded-lg text-[#053627] font-sans text-sm font-bold transition-colors hover:bg-[#053627] hover:text-white"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-[#053627] rounded-full flex items-center justify-center text-white hover:bg-black transition-colors duration-300 shadow-lg hover:shadow-xl"
            aria-label="View Source Code"
          >
            <Github className="w-6 h-6" />
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="h-14 px-8 bg-white rounded-full flex items-center justify-center gap-2 text-[#053627] font-bold tracking-widest uppercase text-sm hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border border-[#053627]/10"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectsCard = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="relative w-full flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
      {/* Left Column - Sticky Image */}
      <div className="w-full md:w-3/5 lg:w-[60%] h-[40vh] md:h-screen sticky top-0 md:top-0 flex items-center justify-center pt-8 md:pt-0 z-10">
        <div className="relative w-full h-full max-h-[300px] md:max-h-[80vh] rounded-3xl overflow-hidden bg-transparent">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: activeProject === index ? 1 : 0,
                scale: activeProject === index ? 1 : 1.05,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain drop-shadow-xl"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column - Scrolling Details */}
      <div className="w-full md:w-2/5 lg:w-[40%] flex flex-col relative z-20">
        {projects.map((project, index) => (
          <ProjectDetail
            key={index}
            project={project}
            index={index}
            setActiveProject={setActiveProject}
          />
        ))}
      </div>
    </div>
  );
};
