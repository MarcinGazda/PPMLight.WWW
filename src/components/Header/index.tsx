import { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import Logo from "./../../assets/Logo.png";

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
      window.scrollY >= 60 ? setIsScrolled(true) : setIsScrolled(false)
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
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

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.isScrolled : ""}`}
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
              <a>Home</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>About us</a>
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
