import styles from "./Card.module.css";

const Card = ({ id, title, description }) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.title}>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default Card;
