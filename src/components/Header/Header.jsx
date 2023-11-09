import { NavLink } from "react-router-dom";
import logo from "../../images/logo/pl-main-logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.navbarlink}>
          Home
        </NavLink>
        <NavLink to="/fixtures" className={styles.navbarlink}>
          Fixtures
        </NavLink>
        <NavLink to="/results" className={styles.navbarlink}>
          Results
        </NavLink>
        <NavLink to="/" className={styles.navbarlogo}>
          <img src={logo} alt="Premier League Main Logo"></img>
        </NavLink>
        <NavLink to="/tables" className={styles.navbarlink}>
          Tables
        </NavLink>
        <NavLink to="/transfers" className={styles.navbarlink}>
          Transfers
        </NavLink>
        <NavLink to="/stats" className={styles.navbarlink}>
          Stats
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
