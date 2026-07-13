import { useState, useCallback } from "react";
import { getMovieId } from "../utils/getMovieId";

export type IMovie = {
  kinopoiskId?: number;
  filmId?: number;
  posterUrlPreview: string;
  nameRu: string;
  ratingKinopoisk: number;
  genres: { genre: string }[];
  year: number;
};

export function useFavorites() {
  const [favoriteFilms, setFavoriteFilms] = useState<IMovie[]>([]);

  const toggleFavorite = useCallback(
    (value: IMovie) => {
      let currentId = getMovieId(value);
      let hasId = favoriteFilms.some((item) => getMovieId(item) === currentId);
      if (hasId) {
        let noRepeatFilms = favoriteFilms.filter(
          (item) => getMovieId(item) !== currentId,
        );
        setFavoriteFilms(noRepeatFilms);
      } else {
        setFavoriteFilms([...favoriteFilms, value]);
      }
    },
    [favoriteFilms],
  );
  return { favoriteFilms, toggleFavorite };
}
