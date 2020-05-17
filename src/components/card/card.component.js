import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal } from "react-bootstrap";
import beerFoam from "../../assets/img/beer-foam-placeholder-180x100.jpg";
import * as firebase from "firebase";

function BeerType({ beer, user }) {
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (user && beer) {
      if (beer.data().liked_by && beer.data().liked_by.length) {
        if (beer.data().liked_by.includes(user.email)) {
          setLiked(true);
        }
      }
    }
  }, [user, beer]);

  const like = () => {
    const id = beer.id;
    const email = user.email;
    let beerObj = beer.data();
    if (!beerObj.liked_by || !beerObj.liked_by.length) {
      beerObj.liked_by = [email];
      firebase
        .firestore()
        .collection("beertypes")
        .doc(id)
        .set(beerObj)
        .then(() => setLiked(true));
      return;
    }

    if (beerObj.liked_by.includes(user.email)) return;

    beerObj.liked_by.push(email);
    firebase
      .firestore()
      .collection("beertypes")
      .doc(id)
      .set(beerObj)
      .then(() => setLiked(true));
    return;
  };

  const unlike = () => {
    if (!liked) return;
    const id = beer.id;
    const email = user.email;
    let beerObj = beer.data();
    if (beerObj.liked_by && beerObj.liked_by.includes(user.email)) {
      const newLikedBy = beerObj.liked_by.filter(el => el !== email);
      beerObj.liked_by = newLikedBy;
      firebase.firestore().collection("beertypes").doc(id).set(beerObj).then(() => setLiked(false));
      return;
    }
    return;
  }

  return (
    <Container align="center" style={{ marginTop: "4vh" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={beerFoam} />
        <Card.Body>
          <Card.Title>{beer.data().name}</Card.Title>
          <Button
            variant="primary"
            style={{ marginRight: "2vh" }}
            onClick={handleOpen}
          >
            Read more
          </Button>
          <Button
            variant={liked ? "danger" : "primary"}
            onClick={!liked ? like : unlike}
          >
            {liked ? "♥" : "Like"}
          </Button>
        </Card.Body>
      </Card>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{beer.data().name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{beer.data().description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default BeerType;
