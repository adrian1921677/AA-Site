"use client";

import { motion } from "framer-motion";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import DynamicBackground from "@/components/DynamicBackground";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen section">
      <DynamicBackground />
      <div className="relative z-10 section-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="caption mb-4 block"
          >
            02
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="heading-1 text-text-primary mb-6"
          >
            Projekte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="body-large max-w-2xl mx-auto"
          >
            Eine Auswahl meiner Arbeiten – von Web-Apps bis hin zu experimentellen Projekten.
          </motion.p>
        </motion.div>
        <ProjectsGrid />
      </div>
    </div>
  );
}
