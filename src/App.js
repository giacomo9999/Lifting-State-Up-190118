import React, { Component } from "react";
import { Container, Card } from "semantic-ui-react";
import TemperatureInput from "./components/temperatureInput.component";
import {
  tryConvert,
  ToCelsius,
  ToFahrenheit,
  BoilingVerdict
} from "./components/helpers";

class App extends Component {
  state = { temperature: "0", scale: "c" };

  // handleChange = e => {
  //   this.setState({ temperature: e.target.value });
  // };

  handleCelsiusChange = temperature => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = temperature => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    console.log(this.state);

    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, ToCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, ToFahrenheit) : temperature;
    return (
      <Container>
        <style>{`html, body {background-color: #2E4053 !important;} }`}</style>

        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <Card centered>
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </Card>
      </Container>
    );
  }
}

export default App;
