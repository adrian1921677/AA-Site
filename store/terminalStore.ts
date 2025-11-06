import { create } from "zustand";

interface TerminalStore {
  isOpen: boolean;
  openTerminal: () => void;
  closeTerminal: () => void;
}

export const useTerminalStore = create<TerminalStore>((set) => ({
  isOpen: false,
  openTerminal: () => set({ isOpen: true }),
  closeTerminal: () => set({ isOpen: false }),
}));

