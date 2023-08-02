// import { IconContext } from "react-icons";
import styles from "./styles.module.scss";
// import { MdDone } from "react-icons/md";
import tipsImg from "../../assets/images/tips.png";
import tips2Img from "../../assets/images/tips2.png";
import backgroundImg from "../../assets/background/background-1.png";
import shield from "../../assets/images/shield.png";
import card from "../../assets/images/card.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

// const TIPS = ["Boost SEO ranking", "Marketing", "Visual Reviews"];

const TRICKS = [
  {
    img: shield,
    title: "The Project Card",
    description:
      "Created by practitioners - a single space for key project data.",
  },
  {
    img: card,
    title: "The Reports Tab",
    description: "Get progress insights based on project history.",
  },
];

const TRICKS2 = [
  {
    img: shield,
    title: "Magic Button",
    description: "One click required to present current project status",
  },
  {
    img: card,
    title: "Notes",
    description: "Collect stakeholders notes during a presentation.",
  },
];

const TipsAndTricks = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {
      Aos.refresh();
    };
  }, []);

  // const tipsElements = TIPS.map((tips, index) => (
  //   <li data-aos="fade-up" data-aos-once="true" key={index}>
  //     <IconContext.Provider value={{ className: styles.icon }}>
  //       <MdDone />
  //     </IconContext.Provider>
  //     <span>{tips}</span>
  //   </li>
  // ));

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
            <img className={styles.media} src={trick.img} alt="" />
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
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Our stand outs</h2>
          {/* <p className={styles.description}>
            faff about only a quid blower I down't want no agro bleeding chimney
            pot burke tosser cras nice one boot fanny.!
          </p> */}
          {/* <ul>{tipsElements}</ul> */}
          {tricksElements(TRICKS)}
        </div>
        <div data-aos="fade" data-aos-once="true" className={styles.imgWrapper}>
          <img className={styles.img} src={tipsImg} alt="" />
        </div>
      </div>
      <div className={`${styles.container} ${styles.reverse}`}>
        <div className={styles.text}>
          {/* <h2 className={styles.title}>Our unique features</h2> */}
          {/* <p className={styles.description}>
            faff about only a quid blower I down't want no agro bleeding chimney
            pot burke tosser cras nice one boot fanny.!
          </p> */}
          {tricksElements(TRICKS2)}
        </div>
        <div data-aos="fade" data-aos-once="true" className={styles.imgWrapper}>
          <img className={styles.img} src={tips2Img} alt="" />
          <img className={styles.background} src={backgroundImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TipsAndTricks;
