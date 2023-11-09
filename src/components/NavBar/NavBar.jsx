import logo from "../../images/logo/pl-main-logo.png";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Fixtures</a>
        </li>
        <li>
          <a href="#">Results</a>
        </li>
        <li className={styles.navbarlogo}>
          <img src={logo} alt="Premier League Main Logo"></img>
        </li>
        <li>
          <a href="#">Tables</a>
        </li>
        <li>
          <a href="#">Transfers</a>
        </li>
        <li>
          <a href="#">Stats</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
