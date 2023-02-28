import { useBeers } from "@/queries/beers.query";
import { DropdownIcon } from "@/svgs/dropdown";
import { Fragment } from "react";
import { BeerCard } from "./BeerCard";

export function AllBeers() {
  const {
    data: beers,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useBeers();
  return (
    <div>
      {isLoading ? (
        <p className="m-auto my-4 flex justify-center">Loading...</p>
      ) : (
        <div className="mx-10 mt-20 grid grid-cols-1 gap-6 lg:sm:grid-cols-2">
          {beers?.pages?.map((page) =>
            page?.data?.map((beer) => (
              <Fragment key={beer.id}>
                <BeerCard {...beer} />
              </Fragment>
            ))
          )}
        </div>
      )}
      {isFetchingNextPage ? (
        <p className="m-auto my-6  flex justify-center font-bold">
          Loading more...
        </p>
      ) : hasNextPage ? (
        <button
          className="m-auto flex"
          onClick={() => {
            if (!isFetchingNextPage && hasNextPage) {
              fetchNextPage();
            }
          }}
        >
          <div className="my-6 flex text-blue-500 hover:cursor-pointer">
            <span className="mr-1  font-semibold">Load More</span>
            <DropdownIcon />
          </div>
        </button>
      ) : null}
    </div>
  );
}
