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
  const [dialogType, setDialogType] = useState<"features" | "tech" | null>(
    null
  );

  const openDialog = (project: Project, type: "features" | "tech") => {
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
          <CardFooter className="flex flex-wrap gap-2 justify-between">
            <Button
              variant="ghost"
              onClick={() => openDialog(project, "features")}
            >
              Features
            </Button>
            <Button variant="ghost" onClick={() => openDialog(project, "tech")}>
              Tech
            </Button>
            <Button asChild variant="ghost">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
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
                  : `Tech Stack of ${selectedProject.title}`}
              </DialogTitle>
            </DialogHeader>

            {dialogType === "features" ? (
              <ul className="list-disc pl-5 space-y-2 text-white text-sm sm:text-base">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            ) : (
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
            )}

            <div className="flex justify-end mt-4">
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
