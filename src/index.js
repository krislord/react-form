import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap implementation
import { BrowserRouter as Router } from "react-router-dom"; //Routing Components

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
