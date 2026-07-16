import MovieList from "/src/components/MovieList/MovieList";
import classes from "./favorite.module.css";
import {Link } from "react-router-dom";

export const Favorite = ({ moviesData, favoriteFilms, toggleFavorite }) => {
  return (
    <div>
      {moviesData.length ? (
        <MovieList
          moviesData={moviesData}
          favoriteFilms={favoriteFilms}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <div className={classes.favorite__container}>
          <div className={classes.favorite__title}>
            Избранные фильмы отсутствуют 
          </div>
          <Link to="/" className={classes.favorite__subtitle}>
            Вернуться на главную страницу
          </Link>
        </div>
      )}
    </div>
  );
};
