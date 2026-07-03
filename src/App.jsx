import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList/MovieList";
import { getTopMovies } from "./api/kinopoisk";
import Loader from "./components/Loader/Loader";
function App() {
  const [movies, setMovies] = useState([]);
  const [isFilmsLoading, setIsFilmsLoading] = useState(false);

  async function fetchMovies() {
    setIsFilmsLoading(true);
    const allMovies = await getTopMovies();
    setMovies(allMovies);
    setIsFilmsLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
      {isFilmsLoading ? <Loader /> : <MovieList moviesData={movies} />}
    </div>
  );
}

export default App;
