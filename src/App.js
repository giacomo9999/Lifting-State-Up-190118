import React, { Component } from "react";
import { Container, Card } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <style>{`html, body {background-color: #2E4053 !important;}}`}</style>

        <br />
        <Card centered>
          <Card.Content>
            <Card.Header textAlign="center">Temperature Calculator</Card.Header>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
