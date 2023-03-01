import { Beer } from "@/types/beer";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BeerStore {
  myBeers: Beer[];
  addBeer: (val: Beer) => void;
}

export const useBeerStore = create<BeerStore>()(
  persist(
    (set, get) => ({
      myBeers: [],
      addBeer: (val) => set({ myBeers: [val, ...get().myBeers] }),
    }),
    {
      name: "beer-storage",
    }
  )
);
