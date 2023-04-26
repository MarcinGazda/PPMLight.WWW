import { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import Logo from "./../../assets/Logo.png";

import classes from "./styles.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
    <header className={classes.header}>
      <img className={classes.header__logo} src={Logo} alt="Logo PPM Light" />
      <nav
        className={`${classes.header__nav} ${
          menuOpen && size.width < 768 ? classes.isMenu : ""
        }`}
      >
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About us</li>
        </ul>
      </nav>
      <div className={classes.header__toggle}>
        {!menuOpen ? (
          <FaBars onClick={menuToggleHandler} />
        ) : (
          //<BiMenuAltRight onClick={menuToggleHandler} />
          <AiOutlineClose onClick={menuToggleHandler} />
        )}
      </div>
    </header>
  );
};

export default Header;
