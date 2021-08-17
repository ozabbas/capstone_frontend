import React from 'react';
import PlayerCard from './PlayerCard';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function CreateTeam() {
  const [players, setPlayers] = useState([])
  const [teamPlayers, setTeamPlayers] = useState([])
  const [searchInput, setSearchInput] = useState("")

  // fetch all players from backend
  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then(response => response.json())
      .then(json => setPlayers(json))
  }, []);

  // add player to team
  const addPlayer = (player) => {
    setTeamPlayers([...teamPlayers, player]);
  }

  const removePlayer = (playerToRemove) => {
    setTeamPlayers(teamPlayers.filter(player => player.name != playerToRemove.name));
  }

  // handle search submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchInput.toLowerCase()))
    setPlayers(filteredPlayers)
  }

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Create Team</h1>
        </Col>
      </Row>

      <Row xs={12}>
        <h3>#1 Team</h3>
      </Row>

      <Row xs={1} md={4} className="g-4">
        {teamPlayers.map(player => { return <Col><PlayerCard player={player} addOrRemove={false} addOrRemovePlayer={removePlayer} /></Col> })}
      </Row>

      <h2>Players</h2>

      <Row xs={12}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control type="text" id="search" placeholder="search here" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
          </Form.Group>

          <Button type="submit">Search</Button>
        </Form>
      </Row>

      <Row xs={1} md={4} className="g-4">
        {players.map(player => <Col><PlayerCard addOrRemovePlayer={addPlayer} addOrRemove={true} player={player} /></Col>)}
      </Row>

    </>


  );
}


export default CreateTeam;