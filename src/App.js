import React, { Component } from "react";
import { Container, Card, Form, Button, Input } from "semantic-ui-react";
import BoilingVerdict from "./components/boilingVerdict.component";

class App extends Component {
  state = { temperature: "" };

  handleChange = e => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const temperature = this.state.temperature;
    return (
      <Container>
        <style>{`html, body {background-color: #2E4053 !important;} }`}</style>

        <br />
        <Card centered>
          <Card.Content>
            <Card.Header textAlign="center">Temperature Calculator</Card.Header>
            <br />
            <Form.Field>
              <Input
                fluid
                placeholder="Enter temp in Celsius:"
                value={temperature}
                onChange={this.handleChange}
              />
            </Form.Field>
            <br />

            <BoilingVerdict celsius={Number(temperature)} />
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
