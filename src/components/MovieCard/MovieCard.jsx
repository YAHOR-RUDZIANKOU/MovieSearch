import classes from "./movieCard.module.css";
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

const MovieCard = ({ value }) => {
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
          <span className={classes.rating__number}>{value.ratingKinopoisk || 6.9}</span>
        </div>
      </div>
      <div className={classes.card__context}>
        <div className={classes.card__title}>{value.nameRu}</div>
        <div className={classes.card__subtitle}>
          {value.genres.map((item) => item.genre).join(", ")}
        </div>
        <div className={classes.card__year}>{value.year}</div>
        <button className={classes.card__btn}> В Избранное</button>
      </div>
    </div>
  );
};

export default MovieCard;
