import React, { Component } from "react";
import { Container, Card, Form, Button, Input } from "semantic-ui-react";
import BoilingVerdict from "./components/boilingVerdict.component";
import ScaleNames from "./components/scaleNames.component";
import TemperatureInput from "./components/temperatureInput.component";

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

        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </Container>
    );
  }
}

export default App;
