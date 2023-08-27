import styles from "./styles.module.scss";
import HeroImg from "../../assets/images/hero.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import BackgroundImg from "../../assets/background/background-1.png";
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
    return width > minValue && width < maxValue ? (width / maxValue) * 0.95 : 1;
  };

  const scaleStyle = { scale: `${calculatePercentage(screenWidth)}` };

  return (
    <section id="home">
      <div className={styles.background}>
        <img className={styles.imgBackground} src={BackgroundImg} alt="" />
        <div className={styles.container} style={scaleStyle}>
          <div className={styles.socialMedia}>
            <div onClick={() => alert("twitter")} className={styles.circle}>
              <img className={styles.icon} src={twitter} alt="twitter icon" />
            </div>
            <div onClick={() => alert("facebook")} className={styles.circle}>
              <img className={styles.icon} src={facebook} alt="facebook icon" />
            </div>
            <div onClick={() => alert("instagram")} className={styles.circle}>
              <img
                className={styles.icon}
                src={instagram}
                alt="instagram icon"
              />
            </div>
            <span className={styles.follow}>Follow us:</span>
          </div>
          <div className={styles.text}>
            <h1
              className={styles.title}
            >{`Find the solution where your PPM Presentations meets simplicity and briefness.`}</h1>
            <p
              className={styles.description}
            >{`Experience the perfect balance between the maximum efficiency and minimal chaos. PPMLight - 
            a reliable solution that sees to your project reviews being executed flawlessly, whilst eliminating the distractions .`}</p>
            <button className={styles.button}>Marketplace</button>
          </div>
          <div className={styles.imgWrapper}>
            <img className={styles.img} src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
