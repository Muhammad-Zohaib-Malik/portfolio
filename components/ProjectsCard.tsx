import { JSX } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";

import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiAmazon,
  SiPostgresql,
  SiReact,
  SiElasticsearch,
  SiRabbitmq
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  link: string;
  liveDemo?: string;
  features: string[];
  techStack: { name: string; icon: JSX.Element }[];
  deployment?: string[];
}

const projects: Project[] = [
  {
    title: "File Storage",
    description:
      "A robust, full-stack cloud storage platform with a scalable, highly-available architecture and secure user management.",
    link: "https://github.com/Muhammad-Zohaib-Malik/File-Storage",
    liveDemo: "https://storemyfiles.netlify.app",
    features: [
      "AWS EC2, Render, Netlify & CloudFront CDN.",
      "CI/CD pipelines via GitHub Actions.",
      "AWS S3 for secure file storage.",
      "OAuth & Two-Factor Auth (2FA).",
      "Stripe-based Subscriptions.",
      "Redis Session Management.",
    ],
    deployment: [
      "Frontend: Netlify & S3 via CloudFront",
      "Backend: EC2 (Nginx) & Render",
    ],
    techStack: [
      { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
      { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
      { name: "Redis", icon: <SiRedis className="w-5 h-5" /> },
      { name: "React", icon: <SiReact className="w-5 h-5" /> },
      { name: "AWS", icon: <SiAmazon className="w-5 h-5" /> },
    ],
  },
  {
    title: "EDOP Platform",
    description:
      "Enterprise Distributed Order Pipeline: A complex microservices-based Order Management Platform for modern commerce.",
    link: "https://github.com/Muhammad-Zohaib-Malik/EDOP",
    liveDemo: "https://meredukaan.netlify.app/",
    features: [
      "API Gateway for routing & auth.",
      "Microservices: Auth, Inventory, Order, Payment.",
      "Stripe for payment processing.",
      "Elasticsearch for fuzzy product search.",
      "RabbitMQ for event-driven messaging.",
    ],
    deployment: [
      "Frontend: Netlify",
      "Backend: Render",
    ],
    techStack: [
      { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
      { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
      { name: "Postgres", icon: <SiPostgresql className="w-5 h-5" /> },
      { name: "React", icon: <SiReact className="w-5 h-5" /> },
      { name: "Elastic", icon: <SiElasticsearch className="w-5 h-5" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="w-5 h-5" /> },
    ],
  },
];

export const ProjectsCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="group relative flex flex-col w-full"
        >
          {/* Icons Row */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-[#0b6e4f] transition-all duration-300">
              <Code2 className="w-8 h-8" />
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="text-black/50 hover:text-black transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-black/50 hover:text-[#0b6e4f] transition-all duration-300"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Title & Desc */}
          <div className="mb-6">
            <h3 className="font-sans text-3xl md:text-4xl font-bold tracking-tighter leading-tight text-black group-hover:text-[#0b6e4f] transition-colors duration-500 mb-3">
              {project.title}.
            </h3>
            <p className="font-sans text-lg text-black/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <div 
                key={techIndex}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-black/5 rounded-lg text-black/60 font-sans text-xs font-bold group-hover:border-[#0b6e4f]/20 group-hover:text-[#0b6e4f] transition-colors duration-300"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-black/5 my-8"></div>

          {/* Features List */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-black/40 mb-4">
              Key Features
            </h4>
            <ul className="space-y-3">
              {project.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-black/70 text-sm leading-relaxed font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20 mt-1.5 shrink-0 group-hover:bg-[#0b6e4f] transition-colors duration-300"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      ))}
    </div>
  );
};
