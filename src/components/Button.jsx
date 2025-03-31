import styles from "./Button.module.css";

const Button = ({ children, onClick, type }) => {
  return (
    <button className={`${styles.button} ${styles[type]}`}>{children}</button>
  );
};

export default Button;
