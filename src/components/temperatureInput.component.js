import React, { Component } from "react";
import { Container, Card, Form, Input } from "semantic-ui-react";
import { ScaleNames } from "./helpers";

class TemperatureInput extends Component {
  //   state = { temperature: "" };

  handleChange = e => {
    console.log("changing temp...");
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;

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
                placeholder={ScaleNames[scale]}
                value={temperature}
                onChange={this.handleChange}
              />
            </Form.Field>
            <br />
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default TemperatureInput;
