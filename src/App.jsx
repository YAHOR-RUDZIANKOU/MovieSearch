import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList/MovieList";
import { getTopMovies } from "./api/kinopoisk";
import Loader from "./components/Loader/Loader";
import classes from "./components/Loader/Loader.module.css";
import { useFetch } from "./hooks/useFetch";
function App() {
  const {
    data: movies,
    isLoading: isFilmsLoading,
    error,
  } = useFetch(getTopMovies);

  return (
    <div>
      <Header />
      {isFilmsLoading && <Loader />}
      {!isFilmsLoading && error && (
        <div className={classes.errors}>{error}</div>
      )}
      {!isFilmsLoading && !error && <MovieList moviesData={movies} />}
    </div>
  );
}

export default App;
