import styles from "./styles.module.scss";

type props = {
  svg: React.ReactNode;
  title: string;
  description: string;
};

const Card = (props: props) => {
  return (
    <div className={styles.card}>
      <div className={styles.circle}>{props.svg}</div>
      <div className={styles.text}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
