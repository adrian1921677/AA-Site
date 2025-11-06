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
    link: "https://www.abdullahu-adrian.de/SYNO",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="w-full flex justify-center">
      <div style={{ width: '100%', maxWidth: '28rem', minWidth: '300px' }} className="mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => {
              if (project.link) {
                window.open(project.link, "_blank", "noopener,noreferrer");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
