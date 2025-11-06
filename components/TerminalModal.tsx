"use client";

import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminalStore } from "@/store/terminalStore";
import { Cross2Icon } from "@radix-ui/react-icons";

const commands: Record<string, string> = {
  help: "Verfügbare Befehle: help, about, skills, contact, clear",
  about: "Ich bin ein Full Stack Developer mit Leidenschaft für moderne Web-Technologien.",
  skills: "TypeScript, React, Next.js, Node.js, Python, PostgreSQL, MongoDB, Docker, AWS",
  contact: "Kontaktiere mich über das Kontaktformular oder per E-Mail.",
  clear: "",
};

export default function TerminalModal() {
  const { isOpen, closeTerminal } = useTerminalStore();
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    { command: "", output: "Willkommen im Terminal! Tippe 'help' für verfügbare Befehle." },
  ]);
  const [input, setInput] = useState("");
  const [currentPath, setCurrentPath] = useState("portfolio:~$");

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[trimmedCmd] || `Befehl nicht gefunden: ${trimmedCmd}. Tippe 'help' für Hilfe.`;
    setHistory([...history, { command: cmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeTerminal()}>
      <Dialog.Portal>
        <AnimatePresence>
          {isOpen && (
            <>
              <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-secondary border border-border rounded-lg p-6 max-w-2xl w-full mx-4 z-50 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-text-tertiary rounded-full"></div>
                      <div className="w-3 h-3 bg-text-tertiary rounded-full"></div>
                      <div className="w-3 h-3 bg-text-tertiary rounded-full"></div>
                      <span className="ml-4 text-text-primary">Terminal</span>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        className="text-text-secondary hover:text-text-primary transition-colors"
                        aria-label="Schließen"
                      >
                        <Cross2Icon className="w-5 h-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="bg-background p-4 rounded border border-border h-96 overflow-y-auto">
                    <div className="space-y-2">
                      {history.map((item, index) => (
                        <div key={index} className="space-y-1">
                          {item.command && (
                            <div className="text-text-primary">
                              {currentPath} {item.command}
                            </div>
                          )}
                          <div className="text-text-secondary">{item.output}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-text-primary">{currentPath}</span>
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-text-primary"
                        autoFocus
                      />
                    </div>
                  </div>

                  <p className="text-xs text-text-tertiary mt-4 text-center">
                    Tippe &apos;help&apos; für verfügbare Befehle
                  </p>
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
