import { storage } from "@/storage";
import { Beer } from "@/types/beer";
import { proxy } from "valtio";
import proxyWithPersist, {
  PersistStrategy,
  ProxyPersistStorageEngine,
} from "valtio-persist";

export interface BeerStore {
  myBeers: Partial<Beer>[];
  addBeer: (beer: Partial<Beer>) => void;
}
export interface AppStore {
  creatingBeer: boolean;
  setCreatingBeer: (val: boolean) => void;
}

export const beerStore = proxyWithPersist<BeerStore>({
  name: "beerStore1",
  initialState: {
    myBeers: [],
    addBeer: (beer) => {
      beerStore.myBeers = [beer, ...beerStore.myBeers];
    },
  },
  persistStrategies: PersistStrategy.SingleFile,
  version: 0,
  migrations: {},

  getStorage: () => storage,
});

export const appStore = proxy<AppStore>({
  creatingBeer: false,
  setCreatingBeer: (val) => {
    appStore.creatingBeer = val;
  },
});
