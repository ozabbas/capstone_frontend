import React from 'react';
import PlayerCard from './PlayerCard';
import { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function MyTeam() {

  const email = localStorage.getItem("email");
  const userID = localStorage.getItem("userID");

  const history = useHistory();

  const [teamPlayers, setTeamPlayers] = useState([])

  // fetch user's team
  useEffect(() => {
    fetch(`/users/${userID}/teams`)
      .then(response => response.json())
      .then(teamsJson => {
        const lastTeam = teamsJson[teamsJson.length - 1];
        setTeamPlayers(lastTeam.players)
      });
  }, []);

  return (
    <>
      <h1>My Team</h1>
      <h2>{email}</h2>

      {teamPlayers.length > 0 && (
        <>
          <Row xs={1} md={4} className="g-4">
            {teamPlayers.map(player => { return <Col><PlayerCard player={player} /></Col> })}
          </Row>
        </>
      )}
    </>
  )
}


export default MyTeam;
