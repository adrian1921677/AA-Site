"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "Python", category: "Backend" },
  { name: "C++", category: "System" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Styling" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Full-Stack" },
  { name: "SQL", category: "Database" },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="heading-3 text-text-primary"
      >
        Technologien
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="card card-hover text-center p-6 group relative overflow-hidden"
          >
            {/* Animated background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-text-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            
            <div className="relative z-10">
              <motion.div
                className="text-3xl text-text-secondary mb-3 group-hover:text-text-primary transition-colors duration-300"
                animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {"</>"}
              </motion.div>
              <div className="body text-text-primary font-medium mb-1">{tech.name}</div>
              <div className="caption text-text-tertiary">{tech.category}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
