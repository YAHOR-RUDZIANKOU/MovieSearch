import MovieCard from "/src/components/MovieCard/MovieCard";
import classes from "./movieList.module.css"

const MovieList = ({ moviesData }) => {
  return (
    <div className={classes.main}>
      <div className={classes.cards__wrapper}>{moviesData.map((value) => <MovieCard key={value.kinopoiskId} value={value}/>)}</div>
    </div>
  );
};

export default MovieList;
