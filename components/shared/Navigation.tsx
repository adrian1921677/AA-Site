"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminalStore } from "@/store/terminalStore";
import { useState, useEffect } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

const navItems = [
  { href: "#home", label: "Home", number: "01" },
  { href: "#projects", label: "Projekte", number: "02" },
  { href: "#about", label: "Über mich", number: "03" },
  { href: "#contact", label: "Kontakt", number: "04" },
];

export default function Navigation() {
  const { openTerminal } = useTerminalStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            {/* Signatur Logo */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
              className="relative h-24 w-auto cursor-pointer"
            >
              <Image
                src="/signatur.png"
                alt="Adrian Adullahu"
                width={400}
                height={96}
                className="h-full w-auto object-contain brightness-0 invert"
                priority
              />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <span className="text-xs text-text-tertiary mr-2">
                      {item.number}
                    </span>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-text-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Menu Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={openTerminal}
                className="hidden sm:block px-4 py-2 text-sm bg-background-secondary/50 border border-border rounded-lg hover:border-text-primary hover:bg-background-secondary transition-all backdrop-blur-sm text-text-secondary hover:text-text-primary"
                title="Terminal öffnen"
              >
                &gt;_
              </button>
              
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2"
                aria-label="Menü öffnen"
              >
                <HamburgerMenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-background-secondary/95 backdrop-blur-xl border-l border-border z-50 p-8 md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-bold text-text-primary">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Cross2Icon className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        }}
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? "bg-background-tertiary text-text-primary border-l-2 border-text-primary"
                            : "text-text-secondary hover:text-text-primary hover:bg-background-tertiary"
                        }`}
                      >
                        <span className="text-xs text-text-tertiary mr-3">
                          {item.number}
                        </span>
                        {item.label}
                      </a>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-8 pt-8 border-t border-border">
                <button
                  onClick={() => {
                    openTerminal();
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-sm bg-background-tertiary border border-border rounded-lg hover:border-text-primary transition-all text-text-secondary hover:text-text-primary"
                >
                  &gt;_ Terminal
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
