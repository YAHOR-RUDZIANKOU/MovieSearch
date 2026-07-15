import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import classes from "../components/Loader/Loader.module.css";
import { getTopMovies, getSearchMovies, fetchMovies } from "../api/kinopoisk";
import { useFetch } from "../hooks/useFetch";

export const Home = ({ favoriteFilms, toggleFavorite }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const {
    data: movies,
    isLoading: isFilmsLoading,
    error,
  } = useFetch(fetchMovies, searchQuery);

  return (
    <div>
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
};
