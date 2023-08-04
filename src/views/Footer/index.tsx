import styles from "./index.module.scss";
import Logo from "../../assets/logoPPMLight.svg";

const MENU_ITEMS = ["Home", "Features", "Pricing", "FAQ", "Contact us"];

const companyDetails = [
  "AGILEME SP. Z O. O.",
  "ul. Innowacyjna 1",
  "16-400, Suwałki, Poland",
  "REGON: 369680813",
  "NIP: 8442361905",
  "KRS: 0000722436",
];

const Footer = () => {
  const menuList = MENU_ITEMS.map((item, index) => <li key={index}>{item}</li>);

  const CompanyDetails = companyDetails.map((detail, index) => (
    <p key={index} className={styles.compDescription}>
      {detail}
    </p>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.subscribeWrapper}>
            <div className={styles.subText}>
              <h4 className={styles.subTitle}>Contact Form</h4>
              <p className={styles.subDescription}>
                If You have any question write to us!
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
              <input type="text" placeholder="Topic" className={styles.input} />
              <input
                type="text"
                placeholder="Message"
                className={styles.input}
              />
              <span className={styles.text}>
                Consent to provide personal data{" "}
              </span>
              <input type="checkbox" className={styles.checkbox} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.company}>
            <div className={styles.logo}>
              <a href="/">
                <img src={Logo} alt="logoPPMlight" className={styles.logoImg} />
              </a>

              {CompanyDetails}
            </div>
          </div>
          <div className={styles.menu}>
            <h5>Menu</h5>
            <ul>{menuList}</ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
