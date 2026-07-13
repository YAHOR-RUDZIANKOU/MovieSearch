import { IMovie } from "../hooks/useFavorites";

export const getMovieId = (movie: IMovie): number | undefined => {
  return "kinopoiskId" in movie ? movie.kinopoiskId : movie.filmId;
};
