import { useBeers } from "@/queries/beers.query";
import { DropdownIcon } from "@/svgs/dropdown";
import { Fragment } from "react";
import { BeerCard } from "./BeerCard";
import { BeerListWrapper } from "./BeerListWrapper";

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
        <p className="m-auto my-4 mt-[300px] flex justify-center text-xl">
          Loading...
        </p>
      ) : (
        <BeerListWrapper>
          {beers?.pages?.map((page) =>
            page?.data?.map((beer) => (
              <Fragment key={beer.id}>
                <BeerCard {...beer} />
              </Fragment>
            ))
          )}
        </BeerListWrapper>
      )}
      {isFetchingNextPage ? (
        <p className="m-auto mb-6 mt-2 flex justify-center font-bold">
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
          {!isLoading && (
            <div className="mb-6 mt-2 flex text-blue-500 hover:cursor-pointer">
              <span className="mr-1 font-semibold">Load More</span>
              <DropdownIcon />
            </div>
          )}
        </button>
      ) : null}
    </div>
  );
}
