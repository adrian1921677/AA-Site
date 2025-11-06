"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BootIntro({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const bootLines = [
    "[SYSTEM] Initializing...",
    "[LOAD] Loading assets...",
    "[RENDER] Preparing canvas...",
    "[READY] Welcome to digital space",
  ];

  useEffect(() => {
    if (currentLine >= bootLines.length) {
      setTimeout(() => {
        onComplete();
      }, 500);
      return;
    }

    const line = bootLines[currentLine];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < line.length) {
        setDisplayedText((prev) => prev + line[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayedText("");
          setCurrentLine((prev) => prev + 1);
        }, 300);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-accent-secondary text-sm md:text-base"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1"
            >
              ▊
            </motion.span>
          </motion.div>
          
          {/* Loading bar */}
          <motion.div
            className="w-64 h-1 bg-background-secondary rounded-full overflow-hidden mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent-secondary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

