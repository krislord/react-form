import React from "react";
import PageHeader from "./common/pageHeader";
import { Card, Button, Form } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import Signup from "./signup";

function Register() {
  //refs
  const emailRef = useRef(null);
  const password = useRef(null);
  const confirmPass = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  //state management
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    errors: {},
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
    //validation part now
    //after validation send errors to state errors
    window.location = "/login";
  }
  function handleChange(event) {
    const {
      target: { value, name },
    } = event;

    setFormState((state) => {
      return { ...state, [name]: value }; // took name from attribute then it changes the property according to att name (w3 > dynamic property access)
    });
  }
  return (
    <>
      <div className="container">
        <PageHeader title="Register Page" />
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit} onChange={handleChange}>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" required></Form.Control>
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  ref={emailRef}
                  type="email"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  ref={password}
                  type="password"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="confirmPass">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmPass"
                  ref={confirmPass}
                  type="confirmPass"
                  required
                ></Form.Control>
              </Form.Group>
              <Button className="w-100" type="submit">
                Create Account
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2">
        <h4>
          <a href="/login">Already Have an Account?</a>
        </h4>
      </div>
      <div className="results"></div>
    </>
  );
}

export default Register;
