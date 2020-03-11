import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
      user: {},
      login_url: "http://",
      redirect: false,
      path: "/register"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };

    //this.login(user);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login(user) {
    axios
      .post(this.state.login_url, user)
      .then(res => {
        if (res) {
          this.setState({
            redirect: true,
            user: res
          });

          localStorage.setItem("username", res.username);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/" + this.state.user.username,
            state: {
              user: this.state.user
            }
          }}
        ></Redirect>
      );
    } else {
      return (
        <div id="login">
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Courriel"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    placeholder="email@gmail.com"
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Mot de passe"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />

                  <Button type="submit" content="Se connecter" primary />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign="middle">
                <Link to="/register">
                  <Button content="S'enregistrer" icon="signup" size="big" />
                </Link>
              </Grid.Column>
            </Grid>

            <Divider vertical>Ou</Divider>
          </Segment>
        </div>
      );
    }
  }
}
