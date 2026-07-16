import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";
import { useFavorites } from "./hooks/useFavorites";

function App() {
  const { favoriteFilms, toggleFavorite } = useFavorites();
  return (
    <div>
      <Header favoriteFilms={favoriteFilms} />
      <Routes>
        <Route path="/" element={<Home favoriteFilms={favoriteFilms} toggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorite moviesData={favoriteFilms} favoriteFilms={favoriteFilms} toggleFavorite={toggleFavorite}/>} />
      </Routes>
    </div>
  );
}

export default App;
