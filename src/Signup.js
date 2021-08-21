import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, passwordConfirmation);
    fetch("/users",
      {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        })
      })
      .then((resp) => {
        if (!resp.ok) {
          // error: ex. password and confirmation don't match
          console.log(resp);
        } else {
          // redirect to login
          history.push('/login')
        }
      })
  }


  return (
    <>
      <h1>Sign up</h1>
      <Form onSubmit={handleSubmit}>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={e => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
            type="password"
            placeholder="Password" />
        </Form.Group>

        <Button
          className="me-2"
          variant="primary"
          type="submit">
          Submit
        </Button>
        <LinkContainer to="/login">
          <Button variant="secondary">
            Login
          </Button>
        </LinkContainer>

      </Form>
    </>
  )
}


export default Signup;