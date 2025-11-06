"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";
import SocialLinks from "@/components/shared/SocialLinks";
import DynamicBackground from "@/components/DynamicBackground";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen section">
      <DynamicBackground />
      <div className="relative z-10 section-content max-w-2xl mx-auto">
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
            04
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="heading-1 text-text-primary mb-6"
          >
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="body-large"
          >
            Lass uns zusammenarbeiten oder einfach über Code sprechen.
          </motion.p>
        </motion.div>
        
        <ContactForm />
        <SocialLinks />
      </div>
    </div>
  );
}
