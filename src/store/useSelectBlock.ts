import { create } from "zustand";

enum Blocks {
  INTRODUCE = "INTRODUCE",
  SKILLS = "SKILLS",
  EXPERIENCE = "EXPERIENCE",
  ABOUT = "ABOUT",
}

interface BlockStore {
  block: Blocks;
  setBlock: (block: Blocks) => void;
}

export const useSelectBlock = create<BlockStore>((set) => ({
  block: Blocks.EXPERIENCE, 
  setBlock: (block) => set({ block }),
}));

export { Blocks };