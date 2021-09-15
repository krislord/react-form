import React from "react";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PageHeader from "./common/pageHeader";
import * as API from "../services/usersService";
import { Card, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  //state management
  // const [registerState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPass: "",
  //   errors: {},
  // });

  const [modify, setModify] = useState({
    isVisible: false,
    loading: false,
  });

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is Required")
      .min(2, "Name should be atleast 2 letters"),
    email: yup
      .string()
      .required("Email is Required")
      .email("Please provide a valid email"),
    password: yup
      .string()
      .required("Please provide password")
      .min(6, "Password should be atleast 6 letters"),
    confirmPass: yup
      .string()
      .required("Confirm Password")
      .oneOf([yup.ref("password"), null], "Passwords doesnt match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  //   setFormState((state) => {
  //     return { ...state, [name]: value };
  //   });
  // }
  function handle() {
    setModify((obj) => {
      return { ...obj, isVisible: !obj.isVisible };
    });
  }

  const submit = async (data) => {
    console.log(data, "DATA GATHERED FROM FORM");
    const result = await API.getUsers(
      "https://jsonplaceholder.typicode.com/users"
    ).then(({ data }) => {
      console.log(data);
    });

    return result;
  };
  const errorMsg = (message) => <span className="text-danger">{message}</span>;
  return (
    <div>
      <div className="container">
        <PageHeader title="Create Account" />
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit(submit)} noValidate autoComplete="off">
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  {...register("name")}
                  type="name"
                  name="name"
                  required
                ></Form.Control>
                {errorMsg(errors.name?.message)}
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  {...register("email")}
                  name="email"
                  type="text"
                  required
                ></Form.Control>
                {errorMsg(errors.email?.message)}
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...register("password")}
                  name="password"
                  type={modify.isVisible ? "text" : "password"}
                  required
                ></Form.Control>
                {errorMsg(errors.password?.message)}
              </Form.Group>
              <Form.Group id="confirmPass">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  {...register("confirmPass")}
                  name="confirmPass"
                  type={modify.isVisible ? "text" : "password"}
                  required
                ></Form.Control>
                {errorMsg(errors.confirmPass?.message)}
                <div className="d-flex justify-content-center mt-3">
                  <Button onClick={handle}>
                    {modify.isVisible ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </Button>
                </div>
              </Form.Group>
              <Button className="w-100 mt-3" type="submit">
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
    </div>
  );
}

export default Register;
