import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logoPPMLight.svg";

import styles from "./styles.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleScroll = () => {
      window.scrollY >= 60 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.isScrolled : ""} ${
        menuOpen && size.width < 768 ? styles.isMenu : ""
      }`}
    >
      <div className={styles.header__content}>
        <img
          className={styles.header__content__logo}
          src={Logo}
          alt="Logo PPM Light"
        />
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && size.width < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                onClick={closeMenuHandler}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                onClick={closeMenuHandler}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenuHandler}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenuHandler}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenuHandler}
              >
                Contact us
              </Link>
            </li>
            <li>
              <a href="/" className={styles.subBtn}>
                Marketplace
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <FaBars onClick={menuToggleHandler} />
          ) : (
            //<BiMenuAltRight onClick={menuToggleHandler} />
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
