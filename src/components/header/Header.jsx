import { useEffect } from "react";
import { MdMovie, MdFavoriteBorder } from "react-icons/md";
import classes from "./header.module.css";
import MyButton from "../UI/Button/MyButton";
const Header = () => {
  const sayHi = () => {
    console.log("hello");
  };

  return (
    <div className={classes.header__wrapper}>
      <div className={classes.header__logo}>
        <MdMovie className={classes.header__logoIcon} />
        <h1>КИНОПОИСК</h1>
      </div>
      <input
        type="text"
        placeholder="Фильмы, сериалы"
        className={classes.header__input}
      />
      <MyButton className={classes.header__btn} onClick={sayHi}>
        <MdFavoriteBorder className={classes.btn__icon} />
        <span className={classes.btn__text}> Избранное :</span>
        <span className={classes.btn__count}>0</span>
      </MyButton>
    </div>
  );
};

export default Header;
