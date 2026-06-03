import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiZod,
  SiRedis,
  SiGoogle,
  SiAmazon,
  SiNginx,
  SiStripe,
  SiPostgresql,
  SiSocketdotio,
  SiJsonwebtokens,
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
    title: "File Storage System",
    description:
      "Developed and deployed a full-stack cloud storage platform with scalable architecture.",
    link: "https://github.com/Muhammad-Zohaib-Malik/File-Storage",
    liveDemo: "https://storemyfiles.netlify.app",
    features: [
      "Deployed backend services on AWS EC2 and Render, and frontend on Netlify and AWS CloudFront.",
      "Implemented CI/CD pipelines using GitHub Actions for automated deployments.",
      "Integrated AWS S3 for secure file storage and CloudFront CDN for optimized content delivery.",
      "Implemented OAuth Authentication (Google, GitHub) and Two-Factor Authentication (2FA).",
      "Developed Stripe-based Subscription Management for payments and plan upgrades.",
      "Utilized Redis Session Management for secure multi-device access control.",
    ],
    deployment: [
      "Deployed frontend on Netlify and s3 using cloudfront",
      "Deployed backend on EC2 using Nginx and Render",
    ],
    techStack: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "AWS", icon: <SiAmazon className="text-orange-300" /> },
    ],
  },
  {
    title: "EDOP - Enterprise Distributed Order Pipeline",
    description:
      "Built a Microservices-Based Order Management Platform.",
    link: "https://github.com/Muhammad-Zohaib-Malik/EDOP",
    liveDemo: "https://meredukaan.netlify.app/",
    features: [
      "Implemented an API Gateway for request routing, authentication, and service communication.",
      "Developed Authentication, Inventory, Order, Payment, and Notification Services.",
      "Integrated Stripe for secure payment processing and subscription handling.",
      "Integrated Elasticsearch for fuzzy search and improved product discovery.",
      "Utilized RabbitMQ for asynchronous and event-driven communication between services.",
    ],
    deployment: [
      "Deployed frontend on Netlify",
      "Deployed backend on Render",
    ],
    techStack: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Elasticsearch", icon: <SiElasticsearch className="text-green-300" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-400" /> },
    ],
  },
];

export const ProjectsCard = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogType, setDialogType] = useState<"features" | "tech" | "deployment" | null>(
    null
  );

  const openDialog = (project: Project, type: "features" | "tech" | "deployment") => {
    setSelectedProject(project);
    setDialogType(type);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-5">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="relative w-full overflow-hidden bg-[#121314]"
        >
          <CardHeader>
            <CardTitle className="text-xl font-bold text-emerald-400">{project.title}</CardTitle>
            <CardDescription className="text-zinc-400 text-sm leading-relaxed mt-2">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-zinc-500">Click below to view more.</p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 justify-center">
            <Button variant="ghost" size="sm" className="text-xs text-zinc-300 hover:text-white" onClick={() => openDialog(project, "features")}>
              Features
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-zinc-300 hover:text-white" onClick={() => openDialog(project, "tech")}>
              Tech
            </Button>
            {project.deployment && (
              <Button variant="ghost" size="sm" className="text-xs text-zinc-300 hover:text-white" onClick={() => openDialog(project, "deployment")}>
                Deployment
              </Button>
            )}
            <Button variant="ghost" size="sm" className="text-xs text-zinc-300 hover:text-white" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            </Button>
            {project.liveDemo && (
              <Button variant="ghost" size="sm" className="text-xs text-emerald-400 hover:text-emerald-300" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                  Live Demo
                </a>
              </Button>
            )}
          </CardFooter>
          <BorderBeam duration={8} size={100} />
        </Card>
      ))}

      {/* Shared Dialog for Features / Tech Stack */}
      {selectedProject && dialogType && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="bg-black text-white border border-gray-700 w-[90vw] sm:max-w-2xl mx-auto px-4 py-6">
            <DialogHeader>
              <DialogTitle className="text-white text-lg sm:text-xl">
                {dialogType === "features"
                  ? `Features of ${selectedProject.title}`
                  : dialogType === "tech"
                    ? `Tech Stack of ${selectedProject.title}`
                    : `Deployment Steps for ${selectedProject.title}`}
              </DialogTitle>
            </DialogHeader>

            {dialogType === "features" ? (
              <ul className="list-disc pl-5 space-y-2 text-white text-sm sm:text-base">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            ) : dialogType === "tech" ? (
              <div className="flex flex-wrap gap-3 pt-2">
                {selectedProject.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-[#1f1f1f] rounded-md"
                  >
                    {tech.icon}
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            ) : dialogType === "deployment" && selectedProject.deployment ? (
              <ul className="list-disc pl-5 space-y-2 text-white text-sm sm:text-base">
                {selectedProject.deployment.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            ) : (
              <p className="text-white text-sm sm:text-base text-gray-400">
                No deployment.
              </p>
            )}

            <div className="flex justify-end items-center mt-4">
              <Button
                variant="ghost"
                className="border"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </Button>
            </div>

          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
