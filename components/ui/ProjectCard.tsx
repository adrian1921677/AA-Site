"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image?: string;
  };
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        className="card card-hover w-full"
      >
        {/* Image area */}
        <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden bg-background-tertiary relative">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.description || project.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain p-6"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl text-text-tertiary group-hover:text-text-secondary transition-colors duration-300">
                {"</>"}
              </div>
            </div>
          )}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          {project.title && (
            <h3 className="heading-3 mb-2 group-hover:text-text-primary transition-colors duration-300">
              {project.title}
            </h3>
          )}
          {project.description && (
            <p className="body mb-4">
              {project.description}
            </p>
          )}

          {/* Tech tags */}
          {project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-background-tertiary/50 border border-border rounded text-text-tertiary group-hover:border-text-secondary group-hover:text-text-secondary transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
