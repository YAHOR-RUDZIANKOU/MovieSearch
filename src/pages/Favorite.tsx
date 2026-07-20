import classes from "./favorite.module.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "../components/MovieCard/MovieCard";
import { IMovie } from "../types/movie";

type FavoriteProps = {
  favoriteFilms: IMovie[];
  toggleFavorite: (item: IMovie) => void;
};

export const Favorite = ({ favoriteFilms, toggleFavorite }: FavoriteProps) => {
  return (
    <div>
      {favoriteFilms.length > 0 && (
        <div className={classes.main}>
          <div className={classes.cards__wrapper}>
            <AnimatePresence mode="popLayout">
              {" "}
              {/* Не используем компонент List чтобы работал AnimatePresence */}
              {favoriteFilms.map((value) => (
                <motion.div
                  key={value.kinopoiskId || value.filmId || value.nameRu}
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <MovieCard
                    favoriteFilms={favoriteFilms}
                    toggleFavorite={toggleFavorite}
                    value={value}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
      {favoriteFilms.length === 0 && (
        <div className={classes.favorite__container}>
          <div className={classes.favorite__title}>
            Избранные фильмы отсутствуют
          </div>
          <Link to="/" className={classes.favorite__subtitle}>
            Вернуться на главную страницу
          </Link>
        </div>
      )}
    </div>
  );
};
