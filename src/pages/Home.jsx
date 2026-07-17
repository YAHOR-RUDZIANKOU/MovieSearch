import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import classes from "../components/Loader/Loader.module.css";
import { getTopMovies, getSearchMovies, fetchMovies } from "../api/kinopoisk";
import { useFetch } from "../hooks/useFetch";
import { List } from "../components/List/List";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "../components/MovieCard/MovieCard";

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
        <div className={classes.main}>
          <div className={classes.cards__wrapper}>
            <List
              items={movies}
              renderItems={(value) => (
                <MovieCard
                  favoriteFilms={favoriteFilms}
                  toggleFavorite={toggleFavorite}
                  value={value}
                  key={value.kinopoiskId || value.id || value.nameRu}
                />
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};
