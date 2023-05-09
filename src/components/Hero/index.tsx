import styles from "./styles.module.scss";
import HeroImg from "../../assets/hero.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const maxValue = 1455;
  const minValue = 768;
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculatePercentage = (width: number) => {
    return width > minValue && width < maxValue ? width / maxValue : 1;
  };

  const scaleStyle = { scale: `${calculatePercentage(screenWidth)}` };

  return (
    <div className={styles.container} style={scaleStyle}>
      <div className={styles.socialMedia}>
        <div className={styles.circle}>
          <img className={styles.icon} src={twitter} alt="twitter icon" />
        </div>
        <div className={styles.circle}>
          <img className={styles.icon} src={facebook} alt="facebook icon" />
        </div>
        <div className={styles.circle}>
          <img className={styles.icon} src={instagram} alt="instagram icon" />
          <span className={styles.follow}>Follow us:</span>
        </div>
      </div>
      <div className={styles.text}>
        <h1
          className={styles.title}
        >{`The biggest platform\nfor your growth.`}</h1>
        <p
          className={styles.description}
        >{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}</p>
        <button className={styles.button}>Read More</button>
      </div>
      <img className={styles.img} src={HeroImg} alt="" />
    </div>
  );
};

export default Hero;
