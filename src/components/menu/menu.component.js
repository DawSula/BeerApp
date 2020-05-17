import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BeerType from "../card/card.component";

import * as firebase from "firebase";

function Menu({ user }) {
  const [beerTypes, setBeerTypes] = useState([]);

  useEffect(() => {
    if (user) {
      firebase
        .firestore()
        .collection("beertypes")
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            return;
          }
          const types = [];
          snapshot.forEach((el) => {
            types.push(el);
            // console.log(el.id)
          });
          setBeerTypes(types);
        });
    }
  }, [user]);

  const printBeers = (beers) =>
    beers.map((beer) => (
      <Col>
        <BeerType beer={beer} user={user} />
      </Col>
    ));

  return (
    <Container fluid style={{ marginTop: "15vh" }}>
      <Row>{printBeers(beerTypes)}</Row>
    </Container>
  );
}

export default Menu;
