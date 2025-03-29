import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo.jsx";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLeft}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <FontAwesomeIcon icon={faBagShopping} />
      </div>
    </nav>
  );
};

export default Nav;
