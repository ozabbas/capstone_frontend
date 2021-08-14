function PlayerCard({ player }) {
  return (
    <div>
      <body>

        <section class="container">

          <div class="card">
            <div class="card-image car-1">
              <h1>{player.name}</h1>
              <h2>{player.team_name}</h2>
              <p>{player.home_run} home runs</p>
              <p>{player.rbi} runs batted in</p>
              <p>{player.avg} batting average</p>
              <p>{player.era} ERA</p>
              <p>{player.whip} WHIP</p>
            </div>
          </div>

          <div class="card">
            <div class="card-image car-2">
              <h1>{player.name}</h1>
              <h2>{player.team_name}</h2>
              <p>{player.home_run} home runs</p>
              <p>{player.rbi} runs batted in</p>
              <p>{player.avg} batting average</p>
              <p>{player.era} ERA</p>
              <p>{player.whip} WHIP</p>
            </div>
          </div>

          <div class="card">
            <div class="card-image car-3">
              <h1>{player.name}</h1>
              <h2>{player.team_name}</h2>
              <p>{player.home_run} home runs</p>
              <p>{player.rbi} runs batted in</p>
              <p>{player.avg} batting average</p>
              <p>{player.era} ERA</p>
              <p>{player.whip} WHIP</p>
            </div>
          </div>

        </section>

      </body>

    </div>
  );
}
export default PlayerCard;
// {"id":2792,"name":"Tommy Nance","created_at":"2021-08-07T06:27:47.907Z","updated_at":"2021-08-07T06:27:47.907Z","home_run":0,"rbi":0,"avg":0.0,"team_name":"Chicago Cubs","position":"P","era":null,"whip":null}