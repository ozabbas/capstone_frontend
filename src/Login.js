import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/sessions",
      {
        method: "POST",
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then((resp) => {
        if (!resp.ok) {
          // error: ex. password is incorrect
          console.log(resp);
        } else {
          // parse json response
          resp.json().then((json) => {
            // store email, userID
            localStorage.setItem('email', email);
            localStorage.setItem('userID', json.user_id);
            // redirect to home
            history.push('/home');
          });
        }
      })
  }


  return (
    <>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password" />
        </Form.Group>

        <Button
          onClick={handleSubmit}
          className="me-2"
          variant="primary"
          type="submit">
          Submit
        </Button>
        <LinkContainer to="/signup">
          <Button variant="secondary">
            Sign up
          </Button>
        </LinkContainer>

      </Form>
    </>
  )
}


export default Login;