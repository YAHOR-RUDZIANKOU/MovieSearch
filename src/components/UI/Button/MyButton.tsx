import classes from "./MyButton.module.css";
type MyButtonProps = React.ComponentPropsWithoutRef<"button">;
const MyButton = ({
  className,
  children,
  onClick,
  ...props
}: MyButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.myBtn} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
