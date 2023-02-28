import { API, PAGE_SIZE } from "@/API";
import { Beer } from "@/types/beer";
import { WithPage } from "@/types/utils";
import { type QueryFunction, useInfiniteQuery } from "@tanstack/react-query";

const queryRoutes = {
  getAllBeers: "beers",
} as const;

const getAllBeers: QueryFunction<{
  data: Beer[];
  page: number;
}> = async (_context) => {
  const page: number = _context.pageParam ?? 1;
  const { data } = await API.get(queryRoutes.getAllBeers, {
    params: {
      page,
      per_page: PAGE_SIZE,
    },
  });
  return { data, page };
};

export const beersKey = {
  all: [queryRoutes.getAllBeers] as const,
};

export const useBeers = () =>
  useInfiniteQuery(beersKey.all, getAllBeers, {
    getNextPageParam: (lastPage: WithPage<Beer>) => {
      if (lastPage?.data?.length) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    onError: (err: any) => {
      console.log({ err });
    },
  });
