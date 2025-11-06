"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-6">
      <h2 className="heading-3 text-text-primary">Technologien</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="card card-hover text-center p-4"
          >
            <div className="text-2xl font-mono text-accent mb-2">{"</>"}</div>
            <div className="body text-text-primary font-medium">{tech.name}</div>
            <div className="caption text-text-tertiary mt-1">{tech.category}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
