"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const socialLinks = [
  { name: "GitHub", icon: GitHubLogoIcon, href: "https://github.com/adrian1921677" },
  { name: "LinkedIn", icon: LinkedInLogoIcon, href: "https://www.linkedin.com/in/adrian-abdullahu-7b2ab635b" },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-6"
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{}}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-3 bg-background-secondary/50 backdrop-blur-sm border border-border rounded-lg transition-all text-text-secondary hover:text-text-primary hover:border-text-primary hover:bg-background-secondary"
          >
            <Icon className="w-5 h-5" />
            <span>{link.name}</span>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
