import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";
import { Beer } from "./types";

const API = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
});

const PAGE_SIZE = 10;

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
  return data;
};
