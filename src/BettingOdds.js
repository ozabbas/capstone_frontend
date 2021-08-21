import React, { useState, useEffect } from 'react';

function BettingOdds() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=7549875322df73fac8520596e0fab9bc&regions=us")
      .then(resp => resp.json())
      .then(gamesJson => {
        console.log(gamesJson);

        let games = gamesJson.map(game => {
          let homeTeam = game.home_team;
          let awayTeam = game.away_team;
          let homeTeamPrice = 0;
          let awayTeamPrice = 0;

          let fanduel = game.bookmakers.find(bookmaker => bookmaker.key === "fanduel");
          if (fanduel) {
            let outcomes = fanduel.markets[0].outcomes
            let homeTeamOutcome = outcomes.find(outcome => outcome.name === homeTeam);
            let awayTeamOutcome = outcomes.find(outcome => outcome.name === awayTeam);
            homeTeamPrice = homeTeamOutcome.price;
            awayTeamPrice = awayTeamOutcome.price;
          }

          return {
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            homeTeamPrice: homeTeamPrice,
            awayTeamPrice: awayTeamPrice
          }
        })
        setGames(games);
      });
  }, []);


  return (
    <>
      <h1>Betting Odds</h1>

      {games.map(game => <div>
        Home Team: {game.homeTeam}<br />
        Price: {game.homeTeamPrice}
        <br />
        <br />
        Away Team: {game.awayTeam}<br />
        Price: {game.awayTeamPrice}
        <br />
        <br />
        <hr />
      </div>)
      }

    </>
  )
}


export default BettingOdds;