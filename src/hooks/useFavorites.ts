import { useEffect, useState } from "react";
import { getMovieId } from "../utils/getMovieId";
import {IMovie} from "../types/movie"



export function useFavorites() {
  const [favoriteFilms, setFavoriteFilms] = useState<IMovie[]>(()=>{
    const oldFavorFilms=localStorage.getItem("favorites");
    return oldFavorFilms? JSON.parse(oldFavorFilms) :[];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteFilms));
  }, [favoriteFilms]);
  const toggleFavorite = (value: IMovie) => {
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
  };

  return { favoriteFilms, toggleFavorite };
}
