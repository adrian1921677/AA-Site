"use client";

import { motion } from "framer-motion";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary/30 backdrop-blur-sm">
      <div className="section-content py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="caption text-text-tertiary"
          >
            © {currentYear} Adrian Adullahu. Alle Rechte vorbehalten.
          </motion.p>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

