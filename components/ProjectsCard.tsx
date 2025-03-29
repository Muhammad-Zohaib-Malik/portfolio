import { useState } from "react";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  link: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "AI Mock Interview",
    description: "An AI-powered platform for conducting mock interviews and providing feedback.",
    link: "https://github.com/yourusername/ai-mock-interview",
    features: [
      "AI-driven interview simulations",
      "Real-time feedback and scoring",
      "Custom interview questions",
    ],
  },
  {
    title: "Ride App",
    description: "A React Native-based ride-sharing app for seamless travel experiences.",
    link: "https://github.com/yourusername/ride-app",
    features: [
      "Live ride tracking",
      "Secure payment integration",
      "User ratings and reviews",
    ],
  },
  {
    title: "Job Portal",
    description: "A job portal website connecting employers and job seekers.",
    link: "https://github.com/Muhammad-Zohaib-Malik",
    features: [
      "Job search and filtering",
      "Resume uploading",
      "Employer dashboard",
    ],
  },
];

export const ProjectsCard = () => {
  // Explicitly define the type as Project | null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-6 p-5">
      {projects.map((project, index) => (
        <Card key={index} className="relative w-full overflow-hidden bg-[#121314]">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400">Click below to view the source code.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="border bottom-3" variant="ghost" onClick={() => setSelectedProject(project)}>
              Features
            </Button>
            <Button asChild variant="ghost">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-3">
                <Github className="h-5 w-5" />
                Code
              </a>
            </Button>
          </CardFooter>
          <BorderBeam duration={8} size={100} />
        </Card>
      ))}

      {/* Feature Popup Dialog */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="bg-black text-white border border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-white">Features of {selectedProject.title}</DialogTitle>
            </DialogHeader>
            <ul className="list-disc pl-5 space-y-2 text-white">
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="text-white">{feature}</li>
              ))}
            </ul>
            <div className="flex justify-end">
              <Button variant="ghost" className="border border-2" onClick={() => setSelectedProject(null)}>Close</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
