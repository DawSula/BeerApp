import React from "react";
import { Container, Media } from "react-bootstrap";
import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";

function Comment() {
  return (
    <Container style={{ marginTop: "4vh" }}>
      <Media>
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src={avatarPlaceholder}
          alt="Generic placeholder"
        />
        <Media.Body style={{ textAlign: "left" }}>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    </Container>
  );
}

export default Comment;
