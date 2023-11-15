export const urlForLatestPremierLeagueTeams =
  "https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2023";

export const urlForLeagueTable =
  "https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=39";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

export const getData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
