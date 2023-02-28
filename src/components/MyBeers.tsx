import { appStore, beerStore } from "@/store/beer.store";
import { Beer } from "@/types/beer";
import { Fragment, useEffect } from "react";
import { subscribe, useSnapshot } from "valtio";
import { BeerCard } from "./BeerCard";
import { MyBeerForm } from "./MyBeerForm";

const BEER_STORAGE_KEY = "myBeers";

export function MyBeers() {
  const { creatingBeer: creatingBeerSnap } = useSnapshot(appStore);
  const { myBeers } = useSnapshot(beerStore);
  return (
    <div>
      {creatingBeerSnap && <MyBeerForm />}
      {myBeers.length === 0 ? (
        <div className=" mx-10 mt-20 flex flex-col items-center bg-slate-100 pt-[200px] pb-[350px]">
          <p className="">Nothing to see yet.</p>
          <p className="">
            <span
              className="mr-1 text-blue-500"
              onClick={() => {
                appStore.setCreatingBeer(true);
              }}
            >
              Click here
            </span>
            to add your first beer!
          </p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 p-10 lg:sm:grid-cols-2">
          {myBeers.map(
            (beer) =>
              beer && (
                <Fragment key={beer.id}>
                  <BeerCard {...(beer as Beer)} />
                </Fragment>
              )
          )}
        </div>
      )}
    </div>
  );
}
