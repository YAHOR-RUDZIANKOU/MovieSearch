import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
import classes from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";

type AuthForm = {
  setVisible: (item: boolean) => void;
  setInputValue: (item: string) => void;
};

const AuthForm = ({ setVisible, setInputValue }: AuthForm) => {
  const { setIsAuth } = useContext(AuthProvider);
  const navigate = useNavigate();
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsAuth(true);
    setVisible(false);
    navigate("/favorites");
    setInputValue("");
  }
  return (
    <div>
      <form className={classes.form__wrapper} onSubmit={handleSubmit}>
        <MyInput type="text" placeholder="Ваше имя" />
        <MyInput type="tel" placeholder="Номер телефона" />

        <MyButton className={classes.form_btn} type="submit">
          Войти
        </MyButton>
      </form>
    </div>
  );
};

export default AuthForm;
