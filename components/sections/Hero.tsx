"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import BootIntro from "@/components/shared/BootIntro";

export default function Hero() {
  const [isBooted, setIsBooted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Subtle parallax
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  if (!isBooted) {
    return <BootIntro onComplete={() => setIsBooted(true)} />;
  }

  const name = "Adrian Adullahu";
  const letters = name.split("");

  return (
    <>
      <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center section overflow-hidden">
        {/* Main content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          {/* Name with letter-by-letter animation */}
          <motion.div
            className="relative flex flex-wrap justify-center items-center gap-2 md:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary inline-block"
                style={{
                  fontFamily: "var(--font-primary)",
                  letterSpacing: "0.02em",
                  transformStyle: "preserve-3d",
                }}
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  rotateX: -90,
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.05,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
                whileHover={{}}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtle glow effect behind name */}
          <motion.div
            className="absolute inset-0 -z-10 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="w-full h-32 bg-text-primary/5 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-text-primary/40 via-text-primary/60 to-transparent"
              animate={{
                height: [40, 32, 40],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-text-primary"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

