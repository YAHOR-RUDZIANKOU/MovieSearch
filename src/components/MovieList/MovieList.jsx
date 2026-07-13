import MovieCard from "/src/components/MovieCard/MovieCard";
import classes from "./movieList.module.css";

const MovieList = ({ moviesData, favoriteFilms, toggleFavorite }) => {
  return (
    <div className={classes.main}>
      <div className={classes.cards__wrapper}>
        {moviesData.map((value) => (
          <MovieCard
            favoriteFilms={favoriteFilms}
            toggleFavorite={toggleFavorite}
            key={value.kinopoiskId}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
