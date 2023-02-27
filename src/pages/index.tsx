import Image from "next/image";
import { Inter } from "next/font/google";
import { Beer } from "@/types/beer";
import { useBeers } from "@/queries/beers.query";
import { Fragment, useRef } from "react";
import { isError } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

function BeerInfo({ beer }: { beer: Beer }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4 flex ">
      <Image src={beer.image_url} alt="a beer image" height={200} width={100} />
      <div>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {
    data: beers,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useBeers();
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:sm:grid-cols-2 p-10">
          {beers?.pages?.map((page) =>
            page?.data?.map((beer) => (
              <Fragment key={beer.id}>
                <BeerInfo beer={beer} />
              </Fragment>
            ))
          )}
        </div>
      )}
      {isFetchingNextPage && <p>Loading more...</p>}
      <div
        onClick={() => {
          if (!isFetchingNextPage && hasNextPage) {
            fetchNextPage();
          }
        }}
      >
        Load More
      </div>
    </>
  );
}
