import styles from "./styles.module.scss";
import tipsImg from "../../assets/images/tips.png";
import tips2Img from "../../assets/images/tips2.png";
import backgroundImg from "../../assets/background/background-1.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import TAT1 from "../../assets/SVG/TAT1";
import TAT2 from "../../assets/SVG/TAT2";
import TAT3 from "../../assets/SVG/TAT3";
import TAT4 from "../../assets/SVG/TAT4";

const TRICKS = [
  {
    svg: TAT1,
    title: "The Project Card",
    description:
      "Created by practitioners - a single space for key project data.",
  },
  {
    svg: TAT2,
    title: "The Reports Tab",
    description: "Get progress insights based on project history.",
  },
];

const TRICKS2 = [
  {
    svg: TAT3,
    title: "Magic Button",
    description: "One click required to present current project status",
    orange: true,
  },
  {
    svg: TAT4,
    title: "Notes",
    description: "Collect stakeholders notes during a presentation.",
    orange: true,
  },
];

const TipsAndTricks = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {
      Aos.refresh();
    };
  }, []);

  const tricksElements = (data: Array<any>) => {
    return (
      <>
        {data.map((trick, index) => (
          <div
            data-aos="fade-up"
            data-aos-once="true"
            key={index}
            className={styles.wrapper}
          >
            <div
              className={`${styles.circle} ${
                trick.orange === true ? styles.orange : ""
              }}`}
            >
              {trick.svg}
            </div>
            <div className={`${styles.text} ${styles.width}`}>
              <h3
                className={`${styles.title} ${styles.nonMargin} ${styles.small}`}
              >
                {trick.title}
              </h3>
              <p className={`${styles.description} ${styles.nonMargin}`}>
                {trick.description}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <section>
      <div className={styles.container} id="features">
        <div className={styles.text}>
          <h2 className={styles.title}>Our stand outs</h2>
          {tricksElements(TRICKS)}
        </div>
        <div data-aos="fade" data-aos-once="true" className={styles.imgWrapper}>
          <img className={styles.img} src={tipsImg} alt="" />
        </div>
      </div>
      <div className={`${styles.container} ${styles.reverse}`}>
        <div className={styles.text}>{tricksElements(TRICKS2)}</div>
        <div data-aos="fade" data-aos-once="true" className={styles.imgWrapper}>
          <img className={styles.img} src={tips2Img} alt="" />
          <img className={styles.background} src={backgroundImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TipsAndTricks;
