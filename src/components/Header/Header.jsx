import { NavLink } from "react-router-dom";
import logo from "../../images/logo/pl-main-logo.png";
import styles from "./Header.module.css";
import {
  getData,
  options,
  urlForLatestPremierLeagueTeams,
} from "../../api/fetchData";
import { useEffect, useState } from "react";
import NavTeams from "../NavTeams/NavTeams";

const Header = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getData(urlForLatestPremierLeagueTeams, options).then((data) =>
      setTeams(data.response)
    );
  }, []);

  return (
    <header className={styles.header}>
      <NavTeams teamsArray={teams} />
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
