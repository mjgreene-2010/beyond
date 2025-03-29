import styles from "./logo.module.css";

const Logo = () => {
  return (
    <span>
      <img src="src\assets\byLogo.png" alt="logo" className={styles.logo} />
    </span>
  );
};

export default Logo;
