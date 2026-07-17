type Genre = {
  genre: string;
};

export type IMovie = {
  kinopoiskId?: number;
  filmId?: number;
  posterUrlPreview: string;
  nameRu: string;
  ratingKinopoisk: number;
  genres: Genre[];
  year: number;
};

export type HeaderProps = {
  favoriteFilms: IMovie[];
};
