"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CustomCursor from "./CustomCursor";
import BootIntro from "./BootIntro";

export default function Hero() {
  const [isBooted, setIsBooted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Subtle parallax
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (!isBooted) return;

    let lastUpdate = 0;
    const throttleDelay = 200;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < throttleDelay) return;
      lastUpdate = now;

      const newX = (e.clientX / window.innerWidth) * 100;
      const newY = (e.clientY / window.innerHeight) * 100;

      // Very smooth, subtle movement
      setMousePosition((prev) => ({
        x: prev.x + (newX - prev.x) * 0.03,
        y: prev.y + (newY - prev.y) * 0.03,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isBooted]);

  if (!isBooted) {
    return <BootIntro onComplete={() => setIsBooted(true)} />;
  }

  return (
    <>
      <CustomCursor />
      <div ref={containerRef} className="relative min-h-screen flex items-center justify-center section overflow-hidden">
        {/* Subtle background light */}
        <div className="fixed inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.08) 0%, transparent 70%),
                radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(6, 182, 212, 0.05) 0%, transparent 70%),
                #0a0a0a
              `,
              transition: "background 3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        {/* Very subtle floating orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Main content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          {/* Name */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <h1 className="heading-1 gradient-text mb-4">
              Adrian Adullahu
            </h1>
            <motion.div
              className="absolute inset-0 -z-10"
              style={{
                background: `radial-gradient(ellipse 60% 30% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)`,
              }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="heading-3 text-text-secondary mb-6">
              Full Stack Developer
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Ich entwickle moderne Web-Anwendungen, die{" "}
              <span className="text-accent font-medium">funktionieren</span>
              {" "}und{" "}
              <span className="text-accent-secondary font-medium">begeistern</span>.
              <br />
              Mit Fokus auf klare Struktur, verständliche Lösungen und durchdachtes Design.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/projects" className="btn-primary">
                Meine Projekte
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/contact" className="btn-secondary">
                Kontakt aufnehmen
              </Link>
            </motion.div>
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
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-accent/40 via-accent/60 to-transparent"
              animate={{
                height: [40, 32, 40],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
