import axios from "axios";

const delay = (ms) => new Promise((res) => setTimeout(() => res(), ms));

export async function getTopMovies() {
  await delay(1500);
  const allMovies = await axios.get(
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

export async function getSearchMovies(film) {
  await delay(1500);
  const allMovies = await axios.get(
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

export function fetchMovies(query) {
  if (query.length) {
    console.log(query);
    return getSearchMovies(query);
  } else {
    return getTopMovies();
  }
}
