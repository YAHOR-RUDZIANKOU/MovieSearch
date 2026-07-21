import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import classes from "../components/Loader/Loader.module.css";
import { fetchMovies } from "../api/kinopoisk";
import { useFetch } from "../hooks/useFetch";
import { List } from "../components/List/List";
import MovieCard from "../components/MovieCard/MovieCard";
import { IMovie } from "../types/movie";

type HomeProps = {
  favoriteFilms: IMovie[];
  toggleFavorite: (item: IMovie) => void;
};

export const Home = ({ favoriteFilms, toggleFavorite }: HomeProps) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const {
    data: movies,
    isLoading: isFilmsLoading,
    error,
  } = useFetch(fetchMovies, searchQuery);

  return (
    <div className={classes.main__wrapper}>
      {isFilmsLoading && <Loader />}
      {!isFilmsLoading && error && (
        <div className={classes.errors}>{error}</div>
      )}
      {!isFilmsLoading && !error && (
        <div className={classes.main}>
          <div className={classes.cards__wrapper}>
            <List
              items={movies}
              renderItems={(value:IMovie) => (
                <MovieCard
                  favoriteFilms={favoriteFilms}
                  toggleFavorite={toggleFavorite}
                  value={value}
                  key={value.kinopoiskId || value.filmId || value.nameRu}
                />
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};
