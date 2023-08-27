import styles from "./index.module.scss";
import Logo from "../../assets/logoPPMLight.svg";
import { Input } from "antd";
import { Link } from "react-scroll";

const { TextArea } = Input;

const MENU_ITEMS = [
  { name: "Home", to: "home", offset: -90 },
  { name: "Features", to: "features", offset: -110 },
  { name: "Pricing", to: "pricing", offset: -130 },
  { name: "FAQ", to: "faq", offset: 50 },
  { name: "Contact us", to: "contact", offset: -100 },
];

const companyDetails = [
  "AGILEME SP. Z O. O.",
  "ul. Innowacyjna 1",
  "16-400, Suwałki, Poland",
  "REGON: 369680813",
  "NIP: 8442361905",
  "KRS: 0000722436",
];

const Footer = () => {
  const menuList = MENU_ITEMS.map((item, index) => (
    <li key={index}>
      <Link
        to={item.to}
        offset={item.offset}
        spy={true}
        smooth={true}
        duration={500}
      >
        {item.name}
      </Link>
    </li>
  ));

  const CompanyDetails = companyDetails.map((detail, index) => (
    <p key={index} className={styles.compDescription}>
      {detail}
    </p>
  ));

  return (
    <footer className={styles.footer} id="contact">
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

              <input type="text" placeholder="Topic" className={styles.input} />

              <TextArea
                placeholder="Message"
                className={styles.input}
                autoSize={{ minRows: 4, maxRows: 100 }}
              />
              <div className={styles.row}>
                <div className={styles.wrapperRodo}>
                  <span className={styles.text}>
                    Consent to provide personal data{" "}
                  </span>
                  <input type="checkbox" className={styles.checkbox} />
                </div>
                <button className={styles.subBtn}>Send</button>
              </div>
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
