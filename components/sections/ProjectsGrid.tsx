"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "",
    description: "Ein moderner intelligenter Taschenrechner",
    tech: [],
    image: "/syno.png",
    link: "https://syno.abdullahu-adrian.de",
  },
  {
    id: 2,
    title: "",
    description: "Login-System für Telekom Azubis",
    tech: [],
    image: "/telekom.png",
    link: "https://telekom.abdullahu-adrian.de",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={project.id} style={{ width: '100%', maxWidth: '28rem', minWidth: '300px' }} className="mx-auto">
            <ProjectCard
              project={project}
              index={index}
              onClick={() => {
                if (project.link) {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
