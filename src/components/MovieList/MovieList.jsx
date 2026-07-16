import MovieCard from "/src/components/MovieCard/MovieCard";
import classes from "./movieList.module.css";
import { motion, AnimatePresence } from 'framer-motion';

const MovieList = ({ moviesData, favoriteFilms, toggleFavorite }) => {
  return (
    <div className={classes.main}>
      <div className={classes.cards__wrapper}>
        <AnimatePresence>
          {moviesData.map((value) => (
            <motion.div
              key={value.id || value.nameRu}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <MovieCard
                favoriteFilms={favoriteFilms}
                toggleFavorite={toggleFavorite}
                key={value.kinopoiskId || value.id || value.nameRu}
                value={value}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MovieList;
