import styles from "./index.module.scss";
import Logo from "../../assets/logoPPMLight.svg";
import FooterReviewCard from "../../components/FooterReviewCard";
import avatar from "../../assets/images/footer-img.jpeg";
import avatar1 from "../../assets/images/footer-img1.jpeg";
import Slider from "../../components/Slider";

const MENU_ITEMS = ["About Us", "Theme", "Features", "Pricing", "Blog"];

const ABOUT_US_ITEMS = [
  "About PPMlight",
  "Roadmap",
  "How it Work",
  "Team",
  "News",
];

const REVIEWS = [
  {
    img: avatar,
    name: "Walhan Bobe",
    jobPosition: "CEO PPMlight",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.",
  },
  {
    img: avatar1,
    name: "Walhan Bobe",
    jobPosition: "CEO PPMlight",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.",
  },
];

const Footer = () => {
  const menuList = MENU_ITEMS.map((item) => <li key={item}>{item}</li>);

  const aboutUsList = ABOUT_US_ITEMS.map((item) => <li key={item}>{item}</li>);

  const reviewsCard = REVIEWS.map((item, index) => (
    <FooterReviewCard
      key={index}
      img={`${item.img}`}
      name={item.name}
      jobPosition={item.jobPosition}
      description={item.description}
    />
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.subscribeWrapper}>
            <div className={styles.subText}>
              <h4 className={styles.subTitle}>Ready to get started?</h4>
              <p className={styles.subDescription}>
                It is a long established fact that a page when looking at its
                layout.
              </p>
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="Email"
                placeholder="Your Email"
                className={styles.input}
              />
              <a href="/" className={styles.subBtn}>
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.company}>
            <div className={styles.logo}>
              <a href="/">
                <img src={Logo} alt="logoPPMlight" className={styles.logoImg} />
              </a>
              <p className={styles.compDescription}>
                Is is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <p className={styles.copyright}>Copyright @ 2023 Sofbox</p>
            </div>
          </div>
          <div className={styles.menu}>
            <h5>Menu</h5>
            <ul>{menuList}</ul>
          </div>
          <div className={styles.aboutUs}>
            <h5>About Us</h5>
            <ul>{aboutUsList}</ul>
          </div>
          <div className={styles.reviews}>
            <Slider slide={reviewsCard} oneSlideToShow={true} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
