"use client";

import { motion } from "framer-motion";
import TechStack from "@/components/sections/TechStack";
import DynamicBackground from "@/components/DynamicBackground";

export default function AboutPage() {
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
            03
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="heading-1 text-text-primary mb-8"
          >
            Über mich
          </motion.h1>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="body-large">
              Hallo! Ich bin Adrian, ein Full Stack Developer mit Leidenschaft für moderne Web-Technologien.
            </p>
            <p className="body">
              Ich entwickle Web-Anwendungen, die sowohl technisch solide als auch benutzerfreundlich sind. 
              Mein Fokus liegt darauf, komplexe Probleme in klare, verständliche Lösungen zu übersetzen – 
              sowohl im Code als auch in der Kommunikation.
            </p>
            <p className="body">
              Neben der Entwicklung beschäftige ich mich kontinuierlich mit neuen Technologien und 
              Best Practices, um immer die beste Lösung für jedes Projekt zu finden.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TechStack />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
