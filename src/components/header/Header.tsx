import { useEffect, useState } from "react";
import { MdMovie, MdFavoriteBorder } from "react-icons/md";
import classes from "./header.module.css";
import MyButton from "../UI/Button/MyButton";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IMovie } from "../../types/movie";

type HeaderProps = {
  favoriteFilms: IMovie[];
};

const Header = ({ favoriteFilms }: HeaderProps) => {
  const [inputValue, setInputValue] = useState("");
  const searchQuery = useDebounce(inputValue, 3000);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputValue.length) {
      navigate(`/?search=${searchQuery}`);
    }
  }, [searchQuery]);

  return (
    <div className={classes.header__wrapper}>
      <div className={classes.header__logo}>
        <MdMovie className={classes.header__logoIcon} />
        <h1>КИНОПОИСК</h1>
      </div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Фильмы, сериалы"
        className={classes.header__input}
      />
      <Link to="/favorites" onClick={() => setInputValue("")}>
        <MyButton className={classes.header__btn}>
          <MdFavoriteBorder className={classes.btn__icon} />
          <span className={classes.btn__text}> Избранное :</span>
          <span className={classes.btn__count}>{favoriteFilms.length}</span>
        </MyButton>
      </Link>
    </div>
  );
};

export default Header;
