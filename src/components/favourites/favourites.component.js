import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ItemFavourties from "../itemFavourites/itemFavourties.component";

function Favourites() {
  return (
    <Container fluid style={{ marginTop: "15vh" }}>
      <Row>
        <Col>
          <ItemFavourties />
        </Col>
        <Col>
          <ItemFavourties />
        </Col>
        <Col>
          <ItemFavourties />
        </Col>
      </Row>
    </Container>
  );
}

export default Favourites;
