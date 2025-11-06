"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Cross2Icon, ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

interface Project {
  id: number;
  title: string;
  description: string;
  whatIsIt: string;
  whatFor: string;
  longDescription: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

interface ProjectModalProps {
  project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  return (
    <Dialog.Portal>
      <AnimatePresence>
        <Dialog.Overlay asChild forceMount>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
        </Dialog.Overlay>
        <Dialog.Content asChild forceMount>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-secondary/95 backdrop-blur-xl border border-border rounded-2xl p-8 max-w-3xl w-full mx-4 z-50 max-h-[90vh] overflow-y-auto shadow-lg"
          >
            <div className="space-y-6">
              {/* Header */}
              <div>
                <Dialog.Title className="heading-2 gradient-text mb-3">
                  {project.title}
                </Dialog.Title>
                <Dialog.Description className="body-large">
                  {project.description}
                </Dialog.Description>
              </div>

              {/* What is it / What for */}
              <div className="space-y-4">
                <div>
                  <h4 className="heading-3 mb-2 text-text-primary">Was ist das?</h4>
                  <p className="body">{project.whatIsIt}</p>
                </div>
                <div>
                  <h4 className="heading-3 mb-2 text-text-primary">Wofür ist es gut?</h4>
                  <p className="body">{project.whatFor}</p>
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl overflow-hidden bg-gradient-to-br from-accent/5 to-accent-secondary/5 aspect-video flex items-center justify-center"
              >
                <div className="text-6xl font-mono text-accent/20">
                  {"</>"}
                </div>
              </motion.div>

              {/* Tech Stack */}
              <div>
                <h4 className="caption mb-3 text-text-secondary uppercase tracking-wider">
                  Technologien
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="px-3 py-1.5 bg-background-tertiary/50 border border-border rounded-lg text-sm text-text-secondary"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <GitHubLogoIcon className="w-4 h-4" />
                    GitHub
                  </motion.a>
                )}
              </div>

              {/* Close Button */}
              <Dialog.Close asChild>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-6 right-6 text-text-tertiary hover:text-accent transition-colors p-2 rounded-lg hover:bg-background-tertiary/50"
                  aria-label="Schließen"
                >
                  <Cross2Icon className="w-5 h-5" />
                </motion.button>
              </Dialog.Close>
            </div>
          </motion.div>
        </Dialog.Content>
      </AnimatePresence>
    </Dialog.Portal>
  );
}
