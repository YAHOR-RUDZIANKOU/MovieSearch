import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList/MovieList";
import { getTopMovies } from "./api/kinopoisk";
import Loader from "./components/Loader/Loader";
import classes from "./components/Loader/Loader.module.css";
function App() {
  const [movies, setMovies] = useState([]);
  const [isFilmsLoading, setIsFilmsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchMovies() {
    try {
      setError(null);
      setIsFilmsLoading(true);
      const allMovies = await getTopMovies();
      setMovies(allMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsFilmsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

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
