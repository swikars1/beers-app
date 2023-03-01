import { create } from "zustand";

interface AppStore {
  creatingBeer: boolean;
  setCreatingBeer: (val: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  creatingBeer: false,
  setCreatingBeer: (val) => set({ creatingBeer: val }),
}));
