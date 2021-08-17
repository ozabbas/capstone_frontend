import React from "react";
import { Card, Button } from "react-bootstrap";

function PlayerCard({ player, addOrRemovePlayer, addOrRemove }) {
  return (
    <>
      <Card style={{ width: '14rem' }}>
        {/* <Card.Img variant="top" src="/images/mickeymantle.jpeg" /> */}
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>
            <p>{player.team_name}</p>
            <p>{player.home_run} home runs</p>
            <p>{player.rbi} runs batted in</p>
            <p>{player.avg} batting average</p>
            <p>{player.era} ERA</p>
            <p>{player.whip} WHIP</p>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => addOrRemovePlayer(player)} >
            {addOrRemove ? "Add" : "Remove"}
          </Button>

        </Card.Body>
      </Card>
    </>
  );
}
export default PlayerCard;
// {"id":2792,"name":"Tommy Nance","created_at":"2021-08-07T06:27:47.907Z","updated_at":"2021-08-07T06:27:47.907Z","home_run":0,"rbi":0,"avg":0.0,"team_name":"Chicago Cubs","position":"P","era":null,"whip":null}