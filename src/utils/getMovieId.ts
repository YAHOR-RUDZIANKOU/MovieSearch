import { IMovie } from "../types/movie";

export const getMovieId = (movie: IMovie): number | undefined => {
  return "kinopoiskId" in movie ? movie.kinopoiskId : movie.filmId;
};
