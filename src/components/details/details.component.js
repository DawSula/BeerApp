import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import beerLogo from "../../assets/img/beer-logo-400x400.png";
import Comment from "../comment/comment.component";

function Details() {
  return (
    <Container fluid style={{ marginTop: "15vh" }}>
      <Row>
        <Col>
          <h1>Place holder for the beer type (e.g. IPA)</h1>
          <p style={{ marginTop: "4vh" }}>
            Short coverage of the beer type (e.g. Classic English pale ales are
            golden to copper colored and display earthy, herbal English-variety
            hop character.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={beerLogo} style={{ width: "25vh" }} />
          <p>
            Exact beer (e.g. Botanical Gardener 5,4% English Pale Arts District)
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={beerLogo} style={{ width: "25vh" }} />
          <p>
            Exact beer (e.g. Botanical Gardener 5,4% English Pale Arts District)
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Comments</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Comment />
        </Col>
      </Row>
      <Row>
        <Col>
          <Comment />
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
