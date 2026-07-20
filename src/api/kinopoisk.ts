import axios from "axios";
import {
  KinopoiskResponseItems,
  KinopoiskResponseFilms,
  IMovie,
} from "../types/movie";

const delay = (ms: number) =>
  new Promise<void>((res) => setTimeout(() => res(), ms));

export async function getTopMovies(): Promise<IMovie[]> {
  await delay(1500);
  const allMovies = await axios.get<KinopoiskResponseItems>(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1",
    {
      method: "GET",
      headers: {
        "X-API-KEY": "5f713f4e-abf0-49c2-b597-b67b7f6d4ea6",
        "Content-Type": "application/json",
      },
    },
  );
  return allMovies.data.items;
}

export async function getSearchMovies(film: string): Promise<IMovie[]> {
  await delay(1500);
  const allMovies = await axios.get<KinopoiskResponseFilms>(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${film}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "5f713f4e-abf0-49c2-b597-b67b7f6d4ea6",
        "Content-Type": "application/json",
      },
    },
  );
  return allMovies.data.films;
}

export function fetchMovies(query: string): Promise<IMovie[]> {
  if (query.length) {
    console.log(query);
    return getSearchMovies(query);
  } else {
    return getTopMovies();
  }
}
