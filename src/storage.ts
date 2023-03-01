import { ProxyPersistStorageEngine } from "valtio-persist";

export const storage: Promise<ProxyPersistStorageEngine> = new Promise(
  (resolve, _) => {
    if (typeof window !== "undefined") {
      const storage = {
        getItem: (key: string) => localStorage.getItem(key),
        setItem: (key: string, val: string) => localStorage.setItem(key, val),
        removeItem: (key: string) => localStorage.removeItem(key),
        getAllKeys: () => Object.keys(localStorage),
      };
      resolve(storage);
    }
  }
);
