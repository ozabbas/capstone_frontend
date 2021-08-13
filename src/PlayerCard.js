function PlayerCard({ player }) {
  return (
    <div>

      <p>Hello {player.name}</p>
      <p>{player.home_run} home runs</p>
    </div>
  );
}

export default PlayerCard;

// {"id":2792,"name":"Tommy Nance","created_at":"2021-08-07T06:27:47.907Z","updated_at":"2021-08-07T06:27:47.907Z","home_run":0,"rbi":0,"avg":0.0,"team_name":"Chicago Cubs","position":"P","era":null,"whip":null}