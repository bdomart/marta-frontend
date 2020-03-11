import React from "react";
import { Button, Form } from "semantic-ui-react";

export class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      nom: "",
      prenom: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} size="small">
          <Form.Field>
            <label>Nom</label>
            <input
              placeholder="Nom"
              name="nom"
              value={this.state.nom}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Prénom</label>
            <input
              placeholder="Prénom"
              name="prenom"
              value={this.state.prenom}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Envoyer</Button>
        </Form>
      </div>
    );
  }
}
