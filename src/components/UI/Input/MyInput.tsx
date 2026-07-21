import classes from "./MyInput.module.css";
type MyInputProps = React.ComponentPropsWithoutRef<"input">;
const MyInput = (props: MyInputProps) => {
  return <input className={classes.MyInput} {...props} />;
};

export default MyInput;
