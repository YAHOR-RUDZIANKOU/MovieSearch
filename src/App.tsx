import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";
import { useFavorites } from "./hooks/useFavorites";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";

function App() {
  const { favoriteFilms, toggleFavorite } = useFavorites();
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <AuthProvider.Provider value={{ isAuth, setIsAuth }}>
        <Header favoriteFilms={favoriteFilms} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favoriteFilms={favoriteFilms}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorite
                favoriteFilms={favoriteFilms}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </AuthProvider.Provider>
    </div>
  );
}

export default App;
