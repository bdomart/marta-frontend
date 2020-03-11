import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/style.css";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
