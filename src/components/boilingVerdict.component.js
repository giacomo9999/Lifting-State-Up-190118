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

export default BoilingVerdict;
