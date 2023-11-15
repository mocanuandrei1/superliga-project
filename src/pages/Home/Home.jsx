import React from "react";
import heroimg from "../../images/hero-img/Haaland-Man-City.webp";
import styles from "./Home.module.css";
import logo from "../../images/logo/pl-main-logo.png";
import { urlForLeagueTable, getData, options } from "../../api/fetchData";
import { useState, useEffect } from "react";

const Home = () => {
  const [leagueTable, setLeagueTable] = useState([]);

  useEffect(() => {
    getData(urlForLeagueTable, options).then((data) =>
      setLeagueTable(data.response[0].league.standings)
    );
  }, []);

  return (
    <section>
      <div className={styles.herosection}>
        <div className={styles.table}>
          <div className={styles.tableupper}>
            <img src={logo} alt="" />
            <p>Table</p>
          </div>
          <div className={styles.tablelower}>
            {leagueTable.map((premierLeagueTeams) =>
              premierLeagueTeams.map((teams) => {
                return (
                  <div>
                    <div>
                      <img src={teams.team.logo} />
                      <p>{teams.team.name}</p>
                    </div>
                    <div>
                      <p>{teams.points}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
