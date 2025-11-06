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
              <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
              <Dialog.Content className="fixed top-8 right-8 bg-background-secondary border border-border rounded-lg p-6 w-96 max-h-[80vh] z-[100] shadow-2xl flex flex-col">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  className="text-sm flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-text-tertiary rounded-full"></div>
                      <div className="w-3 h-3 bg-text-tertiary rounded-full"></div>
                      <div className="w-3 h-3 bg-text-tertiary rounded-full"></div>
                      <span className="ml-4 text-text-primary font-medium">Terminal</span>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        className="text-text-secondary hover:text-text-primary transition-colors p-1 hover:bg-background-tertiary rounded"
                        aria-label="Schließen"
                      >
                        <Cross2Icon className="w-4 h-4" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="bg-background p-4 rounded border border-border flex-1 overflow-y-auto min-h-0">
                    <div className="space-y-2">
                      {history.map((item, index) => (
                        <div key={index} className="space-y-1">
                          {item.command && (
                            <div className="text-text-primary font-mono text-xs">
                              {currentPath} {item.command}
                            </div>
                          )}
                          <div className="text-text-secondary font-mono text-xs">{item.output}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-text-primary font-mono text-xs">{currentPath}</span>
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-text-primary font-mono text-xs"
                        autoFocus
                      />
                    </div>
                  </div>

                  <p className="text-xs text-text-tertiary mt-4 text-center flex-shrink-0">
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
