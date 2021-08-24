import React from 'react';
import PlayerCard from './PlayerCard';
import { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function CreateTeam() {
  const history = useHistory();

  const [players, setPlayers] = useState([])
  const [displayPlayers, setDisplayPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([])
  const [searchInput, setSearchInput] = useState("");

  const email = localStorage.getItem('email');
  const userID = localStorage.getItem('userID');

  // fetch all players from backend
  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then(response => response.json())
      .then(json => {
        setPlayers(json);
        setDisplayPlayers(json);
      })
  }, []);

  // add player to team
  const addPlayer = (player) => {
    setTeamPlayers([...teamPlayers, player]);
  }

  const removePlayer = (playerToRemove) => {
    setTeamPlayers(teamPlayers.filter(player => player.name !== playerToRemove.name));
  }

  // handle search submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchInput.toLowerCase()))
    setDisplayPlayers(filteredPlayers)
  }

  const handleCreateTeam = (event) => {
    event.preventDefault();

    const playerIDs = teamPlayers.map(player => player.id);

    fetch("/teams", {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        name: `${email} team`,
        user_id: userID,
        player_ids: playerIDs
      })
    })
      .then(resp => {
        if (!resp.ok) {
          // error
          console.log(resp);
        } else {
          // success - created team
          // redirect to My Team
          history.push('/my-team')
        }
      });
  }

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Create your own baseball team here!</h1>
        </Col>
      </Row>

      {/* <h2>#1 Team</h2> */}

      {teamPlayers.length > 0 && (
        <>
          <Row xs={1} md={4} className="g-4">
            {teamPlayers.map(player => { return <Col><PlayerCard player={player} buttonText={"Remove"} buttonOnClick={removePlayer} /></Col> })}
          </Row>
          <Row xs={12}>
            <Col xs={12} md={4}>
              <Button onClick={handleCreateTeam}>
                Create Team
              </Button>
            </Col>
          </Row>
        </>
      )}


      <Row xs={12}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control type="text" id="search" placeholder="search here" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
          </Form.Group>

          <Button type="submit">Search</Button>
        </Form>
      </Row>

      <Row xs={1} md={4} className="g-4">
        {displayPlayers.map(player => <Col><PlayerCard buttonOnClick={addPlayer} buttonText={"Add"} player={player} /></Col>)}
      </Row>

    </>


  );
}


export default CreateTeam;