import React from 'react';
import './App.css';

import { LinkContainer } from 'react-router-bootstrap';

import Home from './Home.js';
import BettingOdds from './BettingOdds.js';
import CreateTeam from './CreateTeam.js';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Major League Stats</Navbar.Brand>
            <Nav className="me-auto">
              <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/betting-odds"><Nav.Link>Betting Odds</Nav.Link></LinkContainer>
              <LinkContainer to="/create-team"><Nav.Link>Create Team</Nav.Link></LinkContainer>
            </Nav>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Container>
          <Switch>
            <Route path="/betting-odds">
              <BettingOdds />
            </Route>
            <Route path="/create-team">
              <CreateTeam />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>

  );
}

export default App;
