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
  SiStripe
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  link: string;
  features: string[];
  techStack: { name: string; icon: JSX.Element }[];
  deployment?: string[];
  
}

const projects: Project[] = [
  {
    title: "File Storage App",
    description:
      "A secure and efficient file storage system enabling users to upload, manage, and protect their personal documents, images, and videos.",
    link: "https://github.com/Muhammad-Zohaib-Malik/File-Storage-App",
    features: [
      
      "Secure file upload and download using AWS S3 Bucket with accelerated delivery via CloudFront",
      "Unique folder creation per user with isolated access",
      "Winston for logging",
      "Session-based authentication using Redis with a two-device login limit per user",
      "Role-Based Access Control (RBAC) with Owner, Admin, and Manager permissions",
      "Soft and hard delete functionality for users and their files",
      "Google OAuth 2.0 integration for third-party authentication",
      "Type-safe input validation using Zod",
      "Nginx implemented as a reverse proxy",
      "Stripe integration for subscription-based payments",
    ],
    deployment: [
      "Deployed frontend on s3 using cloudfront",
      "Deployed backend on EC2 using Nginx",
    ],
    techStack: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "Zod", icon: <SiZod className="text-purple-400" /> },
      { name: "OAuth", icon: <SiGoogle className="text-blue-500" /> },
      { name: "AWS", icon: <SiAmazon className="text-orange-300" /> },
      { name: "Nginx", icon: <SiNginx className="text-green-500" /> },
      { name: "Stripe", icon: <SiStripe className="text-purple-600" /> }
    ],
  },
  {
    title: "Airline Booking Backend",
    description:
      "A microservices-based backend for an airline booking system, enabling scalable and secure flight and booking management.",
    link: "https://github.com/Muhammad-Zohaib-Malik/AIRLINE-BOOKING-BACKEND",
    features: [
      "Microservices architecture: Flight and Booking services",
      "MongoDB transactions for atomic booking operations",
      "Mongoose indexing for optimized performance",
      "Zod for input validation and Winston for logging",
      "Automated booking cancellation with cron job",
    ],
    techStack: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Zod", icon: <SiZod className="text-purple-500" /> },
      
    ],
  },
];

export const ProjectsCard = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogType, setDialogType] = useState<"features" | "tech" | "deployment" | null>(
    null
  );

  const openDialog = (project: Project, type: "features" | "tech" | "deployment" ) => {
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
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400">Click below to view more.</p>
          </CardContent>
          <CardFooter className="grid grid-cols-2 gap-2">
            <Button
              variant="ghost"
              onClick={() => openDialog(project, "features")}
            >
              Features
            </Button>
            <Button variant="ghost" onClick={() => openDialog(project, "tech")}>
              Tech
            </Button>
            <Button variant="ghost" onClick={() => openDialog(project, "deployment")}>
              Deployment Steps
            </Button>
            <Button
              variant="ghost"
              asChild
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
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

            <div className="flex justify-between items-center mt-4">
              <Button
                variant="ghost"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
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
