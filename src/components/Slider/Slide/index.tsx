import styles from "./styles.module.scss";
import { BiLink } from "react-icons/bi";

type Props = {
  img: string;
  title: string;
  description: string;
  href: string;
};

const Slide = (props: Props) => {
  return (
    <div className={styles.container}>
      <a draggable="false" href={props.href} className={styles.imgWrapper}>
        <img src={props.img} alt="" className={styles.img} />
        <div className={styles.link}>
          <div className={styles.icon}>
            <BiLink strokeWidth={0.8} />
          </div>
        </div>
      </a>
      <div className={styles.text}>
        <a draggable="false" href={props.href}>
          <h4 className={styles.title}>{props.title}</h4>
        </a>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Slide;
