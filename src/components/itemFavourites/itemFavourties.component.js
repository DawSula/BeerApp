import React from "react";
import { Container, Card, Form } from "react-bootstrap";
import beerFoam from "../../assets/img/beer-foam-placeholder-180x100.jpg";

function ItemFavourites() {
  return (
    <Container align="center" style={{ marginTop: "4vh" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={beerFoam} />
        <Card.Body>
          <Card.Title>Type of Beer (e.g. IPA)</Card.Title>
          <Form>
            <Form.Check
              inline
              label="To taste!"
              name="tasteRadios"
              type="radio"
              id="toTaste"
              value="toTaste"
            />
            <Form.Check
              inline
              label="Tasted!"
              name="tasteRadios"
              type="radio"
              id="tasted"
              value="tasted"
            />
            <Form.Check
              inline
              label="Taste again!"
              name="tasteRadios"
              type="radio"
              id="tasteAgain"
              value="tasteAgain"
            />
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemFavourites;
