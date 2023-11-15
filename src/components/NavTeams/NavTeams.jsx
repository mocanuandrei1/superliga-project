import React from "react";
import style from "./NavTeams.module.css";

const NavTeams = (props) => {
  return (
    <div className={style.navteams}>
      {props.teamsArray.map((team) => {
        return (
          <div key={team.team.id}>
            <img src={team.team.logo} alt={team.team.name}></img>
          </div>
        );
      })}
    </div>
  );
};

export default NavTeams;
