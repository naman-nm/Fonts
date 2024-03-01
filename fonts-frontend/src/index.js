import React from "react";
import './index.css'
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Your main app component

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
