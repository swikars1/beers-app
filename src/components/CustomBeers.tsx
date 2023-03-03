import { useAppStore } from "@/store/app.store";
import { useBeerStore } from "@/store/beer.store";
import { Beer } from "@/types/beer";
import { useEffect, useState } from "react";
import { BeerCard } from "./BeerCard";
import { BeerListWrapper } from "./BeerListWrapper";
import { MyBeerForm } from "./MyBeerForm";

export function CustomBeers() {
  const myBeers = useBeerStore((state) => state.myBeers);
  const creatingBeer = useAppStore((state) => state.creatingBeer);
  const setCreatingBeer = useAppStore((state) => state.setCreatingBeer);

  const [myBeersState, setMyBeersState] = useState<Beer[] | undefined>(
    undefined
  );

  useEffect(() => {
    setMyBeersState(myBeers);
  }, [myBeers]);

  return (
    <div>
      {creatingBeer && <MyBeerForm />}
      {!myBeersState ? (
        <p>Loading...</p>
      ) : myBeersState.length === 0 ? (
        <div className="mx-10 flex flex-col items-center bg-slate-100 pt-[150px] pb-[280px] lg:sm:pt-[200px] lg:sm:pb-[350px]">
          <p>Nothing to see yet.</p>
          <div>
            <span
              className="mr-1 text-blue-500 hover:cursor-pointer"
              onClick={() => {
                setCreatingBeer(true);
              }}
            >
              Click here
            </span>
            to add your first beer!
          </div>
        </div>
      ) : (
        <BeerListWrapper>
          {myBeersState.map(
            (beer) =>
              beer && (
                <div key={beer.id}>
                  <BeerCard {...(beer as Beer)} />
                </div>
              )
          )}
        </BeerListWrapper>
      )}
    </div>
  );
}
