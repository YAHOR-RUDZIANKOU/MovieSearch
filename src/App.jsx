import { useState, useEffect, useCallback } from "react";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList/MovieList";
import { getTopMovies, getSearchMovies, fetchMovies } from "./api/kinopoisk";
import Loader from "./components/Loader/Loader";
import classes from "./components/Loader/Loader.module.css";
import { useFetch } from "./hooks/useFetch";
import { useDebounce } from "./hooks/useDebounce";
import { useFavorites } from "./hooks/useFavorites";

function App() {
  const [inputValue, setInputValue] = useState("");
  const { favoriteFilms, toggleFavorite } = useFavorites();

  const searchQuery = useDebounce(inputValue, 3000);
  const {
    data: movies,
    isLoading: isFilmsLoading,
    error,
  } = useFetch(fetchMovies, searchQuery);

  return (
    <div>
      <Header
        value={inputValue}
        onSearchChange={setInputValue}
        favoriteFilms={favoriteFilms}
      />
      {isFilmsLoading && <Loader />}
      {!isFilmsLoading && error && (
        <div className={classes.errors}>{error}</div>
      )}
      {!isFilmsLoading && !error && (
        <MovieList
          moviesData={movies}
          favoriteFilms={favoriteFilms}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

export default App;
