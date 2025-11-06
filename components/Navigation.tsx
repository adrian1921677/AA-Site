"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminalStore } from "@/store/terminalStore";
import { useState } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

const navItems = [
  { href: "/", label: "Home", number: "01" },
  { href: "/projects", label: "Projekte", number: "02" },
  { href: "/about", label: "Über mich", number: "03" },
  { href: "/contact", label: "Kontakt", number: "04" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { openTerminal } = useTerminalStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              className="text-xl font-bold font-mono gradient-text tracking-wider"
            >
              AA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-accent" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-xs text-accent-secondary/60 mr-2">
                      {item.number}
                    </span>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-secondary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Menu Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={openTerminal}
                className="hidden sm:block px-4 py-2 text-sm font-mono bg-background-secondary/50 border border-accent/30 rounded-lg hover:border-accent/60 hover:bg-background-secondary transition-all backdrop-blur-sm"
                title="Terminal öffnen"
              >
                &gt;_
              </button>
              
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden text-gray-400 hover:text-accent transition-colors p-2"
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
              className="fixed top-0 right-0 bottom-0 w-80 bg-background-secondary/95 backdrop-blur-xl border-l border-accent/20 z-50 p-8 md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-bold font-mono gradient-text">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  <Cross2Icon className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? "bg-accent/10 text-accent border-l-2 border-accent"
                            : "text-gray-400 hover:text-white hover:bg-background-tertiary"
                        }`}
                      >
                        <span className="font-mono text-xs text-accent-secondary/60 mr-3">
                          {item.number}
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <button
                  onClick={() => {
                    openTerminal();
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-sm font-mono bg-background-tertiary border border-accent/30 rounded-lg hover:border-accent/60 transition-all text-gray-400 hover:text-accent"
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
