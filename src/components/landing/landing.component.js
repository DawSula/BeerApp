import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import beerLogo from "../../assets/img/android-chrome-192x192.png";

function Landing() {
  return (
    <Container fluid style={{ marginTop: "15vh" }}>
      <Row>
        <Col>
          <img src={beerLogo} alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center">
            <i>Progressive Beer</i>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={() => window.location.href = "/login"}>Continue to site</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
