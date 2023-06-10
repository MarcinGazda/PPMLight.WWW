import styles from "./index.module.scss";

type Props = {
  name: string;
  jobPosition: string;
  description: string;
  img: string;
};

const FooterReviewCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.postBottom}>
        <img src={props.img} alt="" className={styles.avatar} />
        <div className={styles.text}>
          <h5 className={styles.name}>{props.name}</h5>
          <span className={styles.job}>{props.jobPosition}</span>
        </div>
      </div>
    </div>
  );
};

export default FooterReviewCard;
