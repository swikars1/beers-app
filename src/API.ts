import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
});

export const PAGE_SIZE = 10;
