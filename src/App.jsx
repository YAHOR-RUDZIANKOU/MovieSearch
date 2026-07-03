import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import "./main.css";
import MovieList from "./components/MovieList/MovieList";
import { getTopMovies } from "./api/kinopoisk";
function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const allMovies = await getTopMovies();
    setMovies(allMovies);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
      <MovieList moviesData={movies} />
    </div>
  );
}

export default App;