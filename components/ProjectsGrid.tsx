"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  description: string;
  whatIsIt: string; // Verständliche Beschreibung: "Was ist das?"
  whatFor: string; // "Wofür ist es gut?"
  longDescription: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Ein Online-Shop für moderne Marken",
    whatIsIt: "Ein vollständiger Online-Shop, mit dem Kunden Produkte durchstöbern, in den Warenkorb legen und sicher bezahlen können.",
    whatFor: "Perfekt für Unternehmen, die ihre Produkte online verkaufen möchten. Unterstützt verschiedene Zahlungsmethoden und bietet eine intuitive Benutzeroberfläche.",
    longDescription:
      "Eine vollständige E-Commerce-Plattform mit Produktkatalog, Warenkorb, Checkout-Prozess und Zahlungsintegration. Features umfassen Produktfilterung, Bewertungssystem und Admin-Dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Organisiere Aufgaben im Team",
    whatIsIt: "Eine Anwendung, mit der Teams gemeinsam Aufgaben verwalten können. Jeder sieht in Echtzeit, wer an was arbeitet.",
    whatFor: "Ideal für Teams, die ihre Projekte strukturiert angehen möchten. Erleichtert die Zusammenarbeit und sorgt für Transparenz.",
    longDescription:
      "Eine moderne Task-Management-Anwendung mit Team-Kollaboration, Echtzeit-Updates, Drag-and-Drop-Funktionalität und erweiterte Filteroptionen.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/api/placeholder/600/400",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Wetterinformationen auf einen Blick",
    whatIsIt: "Ein übersichtliches Dashboard, das aktuelle Wetterdaten und Vorhersagen für jeden Ort anzeigt.",
    whatFor: "Für alle, die schnell und zuverlässig Wetterinformationen benötigen. Perfekt für die Planung von Aktivitäten.",
    longDescription:
      "Ein Dashboard für Wetterdaten mit interaktiven Charts, Vorhersagen und Standort-basierten Services. Integriert mehrere Wetter-APIs für präzise Daten.",
    tech: ["Vue.js", "Chart.js", "OpenWeather API"],
    image: "/api/placeholder/600/400",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Verstehe deine Social Media Performance",
    whatIsIt: "Ein Tool, das zeigt, wie gut deine Posts auf Social Media ankommen. Zeigt Zahlen und Trends in übersichtlichen Grafiken.",
    whatFor: "Für Unternehmen und Content-Creator, die ihre Social Media Strategie verbessern möchten. Hilft dabei zu verstehen, was funktioniert.",
    longDescription:
      "Ein umfassendes Analytics-Tool zur Überwachung und Analyse von Social Media Performance mit detaillierten Reports und Export-Funktionen.",
    tech: ["Next.js", "Python", "PostgreSQL", "D3.js"],
    image: "/api/placeholder/600/400",
    link: "https://example.com",
    github: "https://github.com",
  },
];

// Extract all unique tech tags
const allTechTags = Array.from(new Set(projects.flatMap((p) => p.tech)));

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Filter projects based on selected tag
  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tech.includes(selectedFilter))
      );
    }
  }, [selectedFilter]);

  return (
    <>
      {/* Filter Tags */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {["All", ...allTechTags].map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedFilter === tag
                  ? "bg-accent text-white shadow-md shadow-accent/30"
                  : "bg-background-secondary/50 border border-border text-text-secondary hover:border-accent/30 hover:text-accent"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Dialog.Root>
    </>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="card card-hover h-full">
        {/* Image area */}
        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-accent/5 to-accent-secondary/5 flex items-center justify-center relative">
          <div className="text-5xl font-mono text-accent/20 group-hover:text-accent/40 transition-colors duration-300">
            {"</>"}
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="heading-3 mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="body mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-background-tertiary/50 border border-border rounded text-text-tertiary group-hover:border-accent-secondary/30 group-hover:text-accent-secondary transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
