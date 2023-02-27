import { API, PAGE_SIZE } from "@/API";
import { Beer } from "@/types/beer";
import { WithPage } from "@/types/utils";
import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";

export const getAllBeers: QueryFunction<{
  data: Beer[];
  page: number;
}> = async (_context) => {
  const page: number = _context.pageParam ?? 1;
  const { data } = await API.get("beers", {
    params: {
      page,
      per_page: PAGE_SIZE,
    },
  });
  return { data, page };
};

export const beersKey = {
  all: ["beers"] as const,
};

export const useBeers = () => {
  return useInfiniteQuery(beersKey.all, getAllBeers, {
    getNextPageParam: (lastPage: WithPage<Beer>) => {
      if (lastPage?.data?.length) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
