import React from "react";
import heroimgmain from "../../images/hero-img/HeroImg.webp";
import heroimgson from "../../images/hero-img/HeroimgSon.webp";
import heroimgjesus from "../../images/hero-img/HeroImgJesus.webp";
import styles from "./Home.module.css";
import logo from "../../images/logo/pl-main-logo.png";
import { urlForLeagueTable, getData, options } from "../../api/fetchData";
import { useState, useEffect } from "react";
import ADSponsor from "../../images/sponsors/AD_Sponsor.webp";
import Castrol from "../../images/sponsors/Castrol_New.webp";
import EaSports from "../../images/sponsors/ea_sports_black_435_x_290_360.webp";
import Nike from "../../images/sponsors/Nike_Sponsor.webp";
import Oracle from "../../images/sponsors/Oracle_Sponsor.webp";
import Hublot from "../../images/sponsors/Hublot_Sponsor.webp";
import { posts } from "../../posts/posts";

const Home = () => {
  const [leagueTable, setLeagueTable] = useState([]);

  useEffect(() => {
    getData(urlForLeagueTable, options).then((data) =>
      setLeagueTable(data.response[0].league.standings)
    );
  }, []);

  return (
    <div>
      <section className={styles.herosection}>
        <div className={styles.table}>
          <div className={styles.tableupper}>
            <img src={logo} alt="" />
            <p>Premier League</p>
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
        <div className={styles.heronews}>
          <div className={styles.heronewsmain}>
            <img src={heroimgmain} alt="" />
            <h3>Talking Tactics</h3>
            <h1>
              Arteta Zinchenko lead Talking Tactics Season trends: Inverted
              full-backs providing tactical flexibility
            </h1>
          </div>
          <div className={styles.heronewssecond}>
            <img src={heroimgson} alt="" />
            <h3>Fantasy</h3>
            <h2>Is it time to sell Son in FPL?</h2>
          </div>
          <div className={styles.heronewssecond}>
            <img src={heroimgjesus} alt="" />
            <h3>Quizzes</h3>
            <h2>Pass it on: Arsenal players on their team-mates</h2>
          </div>
        </div>
      </section>
      <section className={styles.sponsorssection}>
        <ul>
          <li>
            <img src={ADSponsor} alt="" />
          </li>
          <li>
            {" "}
            <img src={Castrol} alt="" />
          </li>
          <li>
            <img src={EaSports} alt="" />
          </li>
          <li>
            {" "}
            <img src={Nike} alt="" />
          </li>
          <li>
            <img src={Oracle} alt="" />
          </li>
          <li>
            <img src={Hublot} alt="" />
          </li>
        </ul>
      </section>
      <section className={styles.articlessection}>
        <h2>Latest News</h2>
        <div>
          {posts.map((post) => {
            return (
              <div>
                <img src={post.image}></img>
                <h4>{post.category}</h4>
                <h2>{post.name}</h2>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.articlessection}>
        <h2>Editor's Choice</h2>
        <div>
          {posts.map((post) => {
            return (
              <div>
                <img src={post.image}></img>
                <h4>{post.category}</h4>
                <h2>{post.name}</h2>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.articlessection}>
        <h2>Club News</h2>
        <div>
          {posts.map((post) => {
            return (
              <div>
                <img src={post.image}></img>
                <h4>{post.category}</h4>
                <h2>{post.name}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
