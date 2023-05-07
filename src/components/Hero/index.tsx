import styles from "./styles.module.scss";
import HeroImg from "../../assets/hero.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialMedia}>
        <img className={styles.icon} src={twitter} alt="twitter icon" />
        <img className={styles.icon} src={facebook} alt="facebook icon" />
        <img className={styles.icon} src={instagram} alt="instagram icon" />
        <span className={styles.follow}>Follow us:</span>
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{`The biggest platform
        for your growth.`}</h1>
        <p
          className={styles.description}
        >{`There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form.`}</p>
        <button className={styles.button}>Read More</button>
      </div>
      <img className={styles.img} src={HeroImg} alt="" />
    </div>
  );
};

export default Hero;
