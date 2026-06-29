import classes from "./MyButton.module.css";
const MyButton = ({ className, children, onClick }) => {
  return (
    <button onClick={onClick} className={`${classes.myBtn} ${className || ""}`}>
      {children}
    </button>
  );
};

export default MyButton;
