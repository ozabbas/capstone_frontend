import React, { useState, useEffect } from 'react';
import './App.css';

import { LinkContainer } from 'react-router-bootstrap';

import Home from './Home.js';
import BettingOdds from './BettingOdds.js';
import CreateTeam from './CreateTeam.js';
import Login from './Login.js';
import Signup from './Signup.js';
import MyTeam from './MyTeam.js';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);

  const history = useHistory();

  // This useEffect tries to grab the currently logged in user
  useEffect(() => {
    console.log('running..')
    const token = localStorage.getItem('jwt');

    if (!token) {
      history.push('/login');
    } else {
      fetch('http://localhost:3000/sessions/user_authenticate', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (!data.id) {
            console.log('here')
            history.push('/login')
          } else {
            setUser(data.id)
          }
        });
    }

    // take the token and use it to grab this user's info
  }, [])

  const logout = () => {
    localStorage.removeItem('jwt');
    setUser(null);
    history.push('/login');
  }


  return (



    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Major League Stats</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/betting-odds"><Nav.Link>Betting Odds</Nav.Link></LinkContainer>
            <LinkContainer to="/create-team"><Nav.Link>Create Team</Nav.Link></LinkContainer>
            <LinkContainer to="/my-team"><Nav.Link>My Team</Nav.Link></LinkContainer>
            {!user && <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>}
            {user && <LinkContainer to="#" onClick={logout}><Nav.Link>Logout</Nav.Link></LinkContainer>}

          </Nav>
        </Container>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Container>
        {user ? (
          <Switch>
            <Route path="/betting-odds">
              <BettingOdds />
            </Route>
            <Route path="/create-team">
              <CreateTeam />
            </Route>
            <Route path="/my-team">
              <MyTeam />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        )}
      </Container>
    </div>

  );
}

export default App;
