import React from "react";
import PageHeader from "./common/pageHeader";
import { Card, Button, Form } from "react-bootstrap";

function Signup() {
  // function render() {
  //   const results = Object.values(formState);
  //   return results.map((inputValue) => <div>{inputValue}</div>);
  // }

  return (
    <div className="container">
      <PageHeader title="Login" />
      <Card>
        <Card.Body>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required></Form.Control>
            </Form.Group>
            <Form.Group id="confirmPass">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="confirmPass" required></Form.Control>
            </Form.Group>
            <Button className="w-100" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
