import React, { Component } from "react";
import { Container, Card, Form, Input } from "semantic-ui-react";
import BoilingVerdict from "./boilingVerdict.component";
import ScaleNames from "./scaleNames.component";

class TemperatureInput extends Component {
  state = { temperature: "" };

  handleChange = e => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const temperature = this.state.temperature;
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

            <BoilingVerdict celsius={Number(temperature)} />
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default TemperatureInput;
