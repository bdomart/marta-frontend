import React from "react";
import { Login } from "./Login";

export class User extends React.Component {
  constructor(props) {
    super();

    this.state = {
      redirect: false
    };
  }
  componentWillMount() {
    if (localStorage.getItem("username") === null) {
      this.setState({
        redirect: true
      });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Login />;
    } else {
      return <h1>ça marche</h1>;
    }
  }
}
