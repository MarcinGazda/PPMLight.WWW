import styles from "./styles.module.scss";

enum Color {
  Green,
  Gray,
}

type props = {
  svg: React.ReactNode;
  title: string;
  description: string;
  color?: Color;
};

const Card = (props: props) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.wrapper} ${styles.green}`}>
        <div className={styles.circle}></div>
        {props.svg}
        {props.svg}
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
