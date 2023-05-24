import styles from "./styles.module.scss";

export enum Color {
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
    <div
      className={`${styles.card} ${
        props?.color === Color.Green ? styles.green : ""
      }${props?.color === Color.Gray ? styles.gray : ""}`}
    >
      <div className={`${styles.wrapper}`}>
        <div
          className={`${styles.circle} ${
            props?.color === Color.Green ? styles.green : ""
          }${props?.color === Color.Gray ? styles.gray : ""}`}
        ></div>
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
