import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";
import { useFavorites } from "./hooks/useFavorites";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";

function App() {
  const { favoriteFilms, toggleFavorite } = useFavorites();
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <AuthProvider.Provider value={{ isAuth, setIsAuth }}>
        <div className={classes.app__wrapper}>
          <Header favoriteFilms={favoriteFilms} />
          <main className={classes.main__content}>
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
          </main>
          <Footer />
        </div>
      </AuthProvider.Provider>
    </div>
  );
}

export default App;
