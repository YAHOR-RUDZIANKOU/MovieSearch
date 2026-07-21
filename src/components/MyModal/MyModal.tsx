import classes from "./MyModal.module.css";

type MyModalProps={
  visible:boolean;
  children: React.ReactNode;
}

const MyModal = ({ children, visible }:MyModalProps) => {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(" ")}>
      <div className={classes.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
