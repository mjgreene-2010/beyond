import styles from "./TitleDescr.module.css";

const TitleDescr = ({ title, descripton }) => {
  return (
    <section>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{descripton}</p>
    </section>
  );
};

export default TitleDescr;
