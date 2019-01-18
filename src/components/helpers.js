import React from "react";
import { Segment } from "semantic-ui-react";

const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return (
      <Segment inverted color="red" textAlign="center">
        The water would boil
      </Segment>
    );
  }
  return (
    <Segment inverted color="blue" textAlign="center">
      The water would not boil
    </Segment>
  );
};

const ToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

const ToFahrenheit = celsius => (celsius * 9) / 5 + 32;

const ScaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};



export { ScaleNames, BoilingVerdict, ToCelsius, ToFahrenheit, tryConvert };
