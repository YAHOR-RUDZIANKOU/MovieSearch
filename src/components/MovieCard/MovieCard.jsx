import classes from "./movieCard.module.css";
import { useState, useEffect } from "react";
import { getMovieId } from "/src/utils/getMovieId";
function showColorRating(value) {
  const currentNumb = Number(value);
  if (currentNumb < 5 && currentNumb > 0) {
    return classes.bad__ratingCard;
  } else if (currentNumb >= 5 && currentNumb < 7.5) {
    return classes.middle__ratingCard;
  } else if (currentNumb >= 7.5 && currentNumb <= 10) {
    return classes.good__ratingCard;
  }
  return classes.no__ratingCard;
}

const MovieCard = ({ value, favoriteFilms, toggleFavorite }) => {
  let currentId = getMovieId(value);
  let hasId = favoriteFilms.some((item) => getMovieId(item) === currentId);
  const buttonClass = `${classes.card__btn} ${hasId ? classes.card_active : ""}`;

  function handleFavoriteClick() {
    toggleFavorite(value);
  }

  return (
    <div key={value.kinopoiskId} className={classes.card__item}>
      <div className={classes.card__img}>
        <img
          src={value.posterUrlPreview}
          alt={value.nameRU}
          className={classes.card__poster}
        />
        <div
          className={`${classes.card__rating}  ${showColorRating(value.ratingKinopoisk)}`}
        >
          <span className={classes.rating__number}>
            {value.ratingKinopoisk || 6.9}
          </span>
        </div>
      </div>
      <div className={classes.card__context}>
        <div className={classes.card__title}>{value.nameRu}</div>
        <div className={classes.card__subtitle}>
          {value.genres.map((item) => item.genre).join(", ")}
        </div>
        <div className={classes.card__year}>{value.year}</div>
        <button className={buttonClass} onClick={handleFavoriteClick}>
          В Избранное
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
