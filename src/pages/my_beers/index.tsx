import { CustomBeers } from "@/components/CustomBeers";
import Header from "@/components/Header";
import { useAppStore } from "@/store/app.store";

export default function MyBeers() {
  const setCreatingBeer = useAppStore((state) => state.setCreatingBeer);
  return (
    <div>
      <Header
        rightComponent={
          <button
            className="btn-primary btn mr-4 capitalize lg:sm:mr-10"
            onClick={() => setCreatingBeer(true)}
          >
            Add a New Beer
          </button>
        }
      />
      <CustomBeers />
    </div>
  );
}
